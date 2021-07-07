const _ = require("lodash")

exports.handler = async event => {
  const e = [
    {
      token: "LEAD_REASSIGN",
      status: 1,
      has_been_contacted: 0,
      revert_link: "LEAD_REASSIGN_NO_NEW?lead_reassigned=0",
      body: { reassign: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_ALREADY_TREATED",
      status: 0,
      has_been_contacted: 0,
      error: "already_treated",
      body: { reassign: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_WRONG_CONTEXT",
      status: 0,
      has_been_contacted: 1,
      error: "wrong_context",
      body: { reassign: "1", has_been_contacted: "1" },
    },
    {
      token: "LEAD_REASSIGN_NO",
      status: 1,
      has_been_contacted: 0,
      revert_link: "LEAD_REASSIGN_NEW?lead_reassigned=1",
      body: { satisfied: "0", has_been_contacted: "1" },
    },
    {
      token: "LEAD_REASSIGN_NEW",
      status: 1,
      has_been_contacted: 0,
      body: { reassign: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_NO_NEW",
      status: 1,
      has_been_contacted: 0,
      body: { reassign: "0", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_EXPIRED",
      status: 1,
      has_been_contacted: 0,
      revert_link: "LEAD_REASSIGN_NEW_EXPIRED?lead_reassigned=0",
      body: { reassign: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_EXPIRED_NO",
      status: 1,
      has_been_contacted: 0,
      revert_link: "LEAD_REASSIGN_NO_NEW_EXPIRED?lead_reassigned=1",
      body: { reassign: "0", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_NEW_EXPIRED",
      status: 0,
      has_been_contacted: 0,
      body: { reassign: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_REASSIGN_NO_NEW_EXPIRED",
      status: 0,
      has_been_contacted: 0,
      body: { reassign: "0", has_been_contacted: "0" },
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
