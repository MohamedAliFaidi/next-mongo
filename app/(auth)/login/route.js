import User from "@/lib/models/user";
import connect from "@/lib/db.connect";

export async function GET(req) {
  try {
    const { email, password } = req.body;
    await connect;
    const user = await User.create({ email, password }).then((res) => {
      console.log(res);
    });
    return new Response(JSON.stringify({ success: true, message: "success" }), {
      status: 200,
      headers: { "content-type": "application/json" },
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
