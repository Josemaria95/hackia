interface Env {
  DB: D1Database;
}

interface SurveyPayload {
  hijos: string;
  comportamientos: string;
  comportamientos_otro: string;
  usaria: string;
  pagaria: string;
  email: string;
  whatsapp: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidPayload(body: unknown): body is SurveyPayload {
  if (typeof body !== 'object' || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b['hijos'] === 'string' && b['hijos'].length > 0 &&
    typeof b['usaria'] === 'string' && b['usaria'].length > 0 &&
    typeof b['pagaria'] === 'string' && b['pagaria'].length > 0 &&
    typeof b['email'] === 'string' && EMAIL_RE.test(b['email'])
  );
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const body: unknown = await request.json();

    if (!isValidPayload(body)) {
      return Response.json(
        { ok: false, error: 'Faltan campos requeridos o email no válido' },
        { status: 400 },
      );
    }

    const userAgent = request.headers.get('User-Agent') ?? '';
    const ipCountry = (request as Request & { cf?: { country?: string } }).cf?.country ?? '';

    await env.DB.prepare(
      `INSERT INTO survey_responses (hijos, comportamientos, comportamientos_otro, usaria, pagaria, email, whatsapp, user_agent, ip_country)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(
        body.hijos,
        body.comportamientos ?? '',
        body.comportamientos_otro ?? '',
        body.usaria,
        body.pagaria,
        body.email,
        body.whatsapp ?? '',
        userAgent,
        ipCountry,
      )
      .run();

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      { ok: false, error: 'Error interno del servidor' },
      { status: 500 },
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
