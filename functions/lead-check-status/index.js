exports.handler = async event => {
  const e = [
    {
      token: "ALREADY_TREATED",
      status: 0,
      location: "location1",
    },
    {
      token: "NOT_TREATED",
      status: 1,
      location: "location1",
    },
  ]

  const token = event.queryStringParameters.token
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(e.find(el => el.token == token ) || {}),
  }
}
