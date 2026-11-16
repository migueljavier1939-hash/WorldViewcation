interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const today = new Date().toISOString().slice(0, 10);

  const { results } = await env.DB.prepare(
    `SELECT id, title, description, image_url, start_date, end_date
     FROM promos
     WHERE is_active = 1
       AND (start_date IS NULL OR start_date <= ?1)
       AND (end_date IS NULL OR end_date >= ?1)
     ORDER BY end_date`
  )
    .bind(today)
    .all();

  return Response.json(results, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
};