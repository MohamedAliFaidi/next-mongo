import Blog from "@/lib/models/blog";
import connect from "@/lib/db.connect";

export async function POST(req) {
    try {
        const { author, title,content } = req.body;
        await connect;
    const body = await req.json();
    const blog = await Blog.create(body).then((res) => {
      console.log(res);
    });
    return new Response(JSON.stringify({ success: true, message: "success" }), {
      status: 200,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      {
        status: 500,
        headers: { "content-type": "application/json" },
      }
    );
  }
}
