interface Env {
  DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const { results } = await env.DB
    .prepare("SELECT id, image_url, caption, category FROM gallery_photos ORDER BY id DESC")
    .all();

  return Response.json(results, {
    headers: { "Cache-Control": "public, max-age=60" },
  });
};