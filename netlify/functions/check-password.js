exports.handler = async (event) => {
  const body = event.body ? JSON.parse(event.body) : {};
  const password = body.password || "";
  const correctPassword = process.env.SITE_PASSWORD;

  return {
    statusCode: 200,
    body: JSON.stringify({
      received: password,
      expected: correctPassword,
      match: password === correctPassword
    }),
  };
};
