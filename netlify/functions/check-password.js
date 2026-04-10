exports.handler = async (event) => {
  try {
    let body = {};

    // SAFE parsing (prevents crash)
    if (event.body) {
      body = typeof event.body === "string"
        ? JSON.parse(event.body)
        : event.body;
    }

    const password = body.password || "";

    const correctPassword = process.env.SITE_PASSWORD;

    if (!correctPassword) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing environment variable SITE_PASSWORD"
        }),
      };
    }

    if (password === correctPassword) {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      };
    }

    return {
      statusCode: 401,
      body: JSON.stringify({ success: false }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: err.message
      }),
    };
  }
};
