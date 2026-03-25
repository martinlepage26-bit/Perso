const DEFAULT_UPSTREAM = "https://echo-tts-online.martinlepage26.workers.dev/api/echo-tts";

function corsHeaders(origin = "*") {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(payload, status = 200, origin = "*") {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...corsHeaders(origin),
      "Content-Type": "application/json; charset=utf-8",
    },
  });
}

function upstreamUrl(env) {
  return String(env.ECHO_TTS_WORKER_URL || DEFAULT_UPSTREAM).trim() || DEFAULT_UPSTREAM;
}

function passthroughHeaders(upstream, origin) {
  const headers = {
    ...corsHeaders(origin || "*"),
    "X-Echo-Proxy": "martin-lepage-site-pages-function",
  };

  const contentType = upstream.headers.get("Content-Type");
  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  const disposition = upstream.headers.get("Content-Disposition");
  if (disposition) {
    headers["Content-Disposition"] = disposition;
  }

  const echoBackend = upstream.headers.get("X-Echo-Backend");
  const echoModel = upstream.headers.get("X-Echo-Model");
  const echoVoice = upstream.headers.get("X-Echo-Voice");
  const echoSpeed = upstream.headers.get("X-Echo-Speed");
  if (echoBackend) headers["X-Echo-Backend"] = echoBackend;
  if (echoModel) headers["X-Echo-Model"] = echoModel;
  if (echoVoice) headers["X-Echo-Voice"] = echoVoice;
  if (echoSpeed) headers["X-Echo-Speed"] = echoSpeed;

  return headers;
}

async function proxyRequest(method, context) {
  const origin = context.request.headers.get("Origin") || "*";
  const target = upstreamUrl(context.env);
  const headers = { "Content-Type": "application/json" };
  if (origin && origin !== "*") {
    headers.Origin = origin;
  }

  let body = undefined;
  if (method === "POST") {
    body = await context.request.text();
  }

  let upstream;
  try {
    upstream = await fetch(target, {
      method,
      headers,
      body,
    });
  } catch (error) {
    return jsonResponse(
      {
        ok: false,
        error: "Upstream ECHO worker is unavailable.",
        details: String(error?.message || error).slice(0, 300),
      },
      502,
      origin,
    );
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: passthroughHeaders(upstream, origin),
  });
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get("Origin") || "*";
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

export async function onRequestGet(context) {
  return proxyRequest("GET", context);
}

export async function onRequestPost(context) {
  return proxyRequest("POST", context);
}
