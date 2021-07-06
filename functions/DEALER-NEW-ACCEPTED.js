exports.handler = event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: "DEALER_NEW_ACCEPTED",
      status: 1,
      revert_link: "",
      lead_accepted: 1,
    }),
  }
}
