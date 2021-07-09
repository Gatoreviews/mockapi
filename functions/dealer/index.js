const _ = require("lodash")

exports.handler = async event => {
  const e = [
    {
      token: "DEALER_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
      body: { lead_accepted: "1" },       
    },
    {
      token: "DEALER_ACCEPTED",
      status: 1,
      revert_link: "DEALER_NEW_REJECTED?lead_accepted=0",
      lead_accepted: 1,
      body: { lead_accepted: "1" },      
    },
    {
      token: "DEALER_REJECTED",
      status: 1,
      revert_link: "DEALER_NEW_ACCEPTED?lead_accepted=1",
      lead_accepted: 0,
      body: { lead_accepted: "0" },      
    },
    {
      token: "DEALER_NEW_REJECTED",
      status: 1,
      revert_link: "",
      lead_accepted: 0,
      body: { lead_accepted: "0" },      
    },
    {
      token: "DEALER_NEW_ACCEPTED",
      status: 1,
      revert_link: "",
      lead_accepted: 1,
      body: { lead_accepted: "1" },      
    },
    {
      token: "DEALER_ACCEPTED_NEW_EXPIRED",
      status: 1,
      revert_link: "DEALER_NEW_REJECTED_EXPIRED?lead_accepted=0",
      lead_accepted: 1,
      body: { lead_accepted: "1" },      
    },
    {
      token: "DEALER_REJECTED_NEW_EXPIRED",
      status: 1,
      revert_link: "DEALER_NEW_ACCEPTED_EXPIRED?lead_accepted=1",
      lead_accepted: 0,
      body: { lead_accepted: "0" },      
    },
    {
      token: "DEALER_NEW_REJECTED_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
      body: { lead_accepted: "0" },      
    },
    {
      token: "DEALER_NEW_ACCEPTED_EXPIRED",
      status: 0,
      revert_link: "",
      lead_accepted: "",
      body: { lead_accepted: "1" },      
    },
  ]

  const token = event.queryStringParameters.token
  const body = JSON.parse(event.body ? event.body : "{}")
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET, POST",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(
      _.omit(
        e.find(el => el.token == token && _.isEqual(body, el.body)),
        ["body"]
      ) || {}
    ),
  }
}
