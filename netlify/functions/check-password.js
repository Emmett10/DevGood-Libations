exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const password = body.password || "";

    const correctPassword = process.env.SITE_PASSWORD;

    if (!correctPassword) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing SITE_PASSWORD env var" }),
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
      body: JSON.stringify({ error: err.message }),
    };
  }
};
