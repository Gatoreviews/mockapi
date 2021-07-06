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
      token: "DEALER_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
    }),
  }
}
