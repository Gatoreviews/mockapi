exports.handler = event => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: "DEALER_ACCEPTED",
      status: 1,
      revert_link: "DEALER_NEW_REJECTED?lead_accepted=0",
      lead_accepted: 1,
    }),
  }
}
