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
      token: "DEALER_REJECTED_NEW_EXPIRED",
      status: 1,
      revert_link: "DEALER_NEW_ACCEPTED_EXPIRED?lead_accepted=1",
      lead_accepted: 0,
    }),
  }
}
