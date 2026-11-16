interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  // Today's date in Philippine time (UTC+8), so a promo "valid until Nov 30" lasts through the end of Nov 30 locally
  const today = new Date(Date.now() + 8 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const { results } = await env.DB.prepare(
    `SELECT id, title, description, destination, discount, image_url, start_date, end_date
     FROM promos
     WHERE is_active = 1
       AND (start_date IS NULL OR start_date <= ?1)
       AND (end_date IS NULL OR end_date >= ?1)
     ORDER BY end_date IS NULL, end_date, id DESC`
  )
    .bind(today)
    .all();

  return Response.json(results, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
};