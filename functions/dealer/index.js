exports.handler = async event => {
  const e = [
    {
      token: "DEALER_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
    },
    {
      token: "DEALER_ACCEPTED",
      status: 1,
      revert_link: "DEALER_NEW_REJECTED?lead_accepted=0",
      lead_accepted: 1,
    },
    {
      token: "DEALER_REJECTED",
      status: 1,
      revert_link: "DEALER_NEW_ACCEPTED?lead_accepted=1",
      lead_accepted: 0,
    },
    {
      token: "DEALER_NEW_REJECTED",
      status: 1,
      revert_link: "",
      lead_accepted: 0,
    },
    {
      token: "DEALER_NEW_ACCEPTED",
      status: 1,
      revert_link: "",
      lead_accepted: 1,
    },
    {
      token: "DEALER_ACCEPTED_NEW_EXPIRED",
      status: 1,
      revert_link: "DEALER_NEW_REJECTED_EXPIRED?lead_accepted=0",
      lead_accepted: 1,
    },
    {
      token: "DEALER_REJECTED_NEW_EXPIRED",
      status: 1,
      revert_link: "DEALER_NEW_ACCEPTED_EXPIRED?lead_accepted=1",
      lead_accepted: 0,
    },
    {
      token: "DEALER_NEW_REJECTED_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
    },
    {
      token: "DEALER_NEW_ACCEPTED_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
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
    body: JSON.stringify(e.find(el => el.token == token) || {}),
  }
}
