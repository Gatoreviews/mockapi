const _ = require("lodash")

exports.handler = async event => {
  const e = [
    {
      token: "LEAD_SATISFIED",
      status: 1,
      has_been_contacted: 1,
      body: { satisfied: "1", has_been_contacted: "1" },
    },
    {
      token: "LEAD_SATISFIED_ALREADY_TREATED",
      status: 0,
      has_been_contacted: 1,
      error: "already_treated",
      body: { satisfied: "1", has_been_contacted: "1" },
    },
    {
      token: "LEAD_SATISFIED_WRONG_CONTEXT",
      status: 0,
      has_been_contacted: 0,
      error: "wrong_context",
      body: { satisfied: "1", has_been_contacted: "0" },
    },
    {
      token: "LEAD_NOT_SATISFIED",
      status: 1,
      has_been_contacted: 1,
      body: { satisfied: "0", has_been_contacted: "1" },
    },
    {
      token: "LEAD_NOT_SATISFIED_COMMENT",
      status: 1,
      has_been_contacted: 1,
      body: { comment: "not good" },
    },
    {
      token: "LEAD_NOT_SATISFIED_ALREADY_COMMENTED",
      status: 0,
      has_been_contacted: 1,
      error: "already_treated",
      body: { comment: "not good" },
    },
    {
      token: "LEAD_NOT_SATISFIED_WRONG_CONTEXT",
      status: 0,
      has_been_contacted: 1,
      error: "wrong_context",
      body: { comment: "not good" },
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
    body: JSON.stringify(_.omit(
      e.find(el => el.token == token && _.isEqual(body, el.body)) 
    ,['body']) || {})
  }
}
