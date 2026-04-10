exports.handler = async (event) => {
  try {
    const body = event.body ? JSON.parse(event.body) : {};
    const password = body.password || "";

    const correctPassword = process.env.SITE_PASSWORD;

    // Safety check: env variable missing
    if (!correctPassword) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          success: false,
          error: "SITE_PASSWORD is not set in Netlify environment variables"
        }),
      };
    }

    // Compare passwords
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
        success: false,
        error: err.message
      }),
    };
  }
};
