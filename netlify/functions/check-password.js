exports.handler = async (event) => {
  const { password } = JSON.parse(event.body || "{}");

  const correctPassword = process.env.SITE_PASSWORD;

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
};
