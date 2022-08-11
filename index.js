const fetch = require("node-fetch");
const { getIntrospectionQuery } = require('graphql');

async function codegenFetch(url, options) {
  const introspectionQuery = getIntrospectionQuery()

  newOptions = {
    ...options,
    body: JSON.stringify({
      variables: {},
      operationName: "IntrospectionQuery",
      query: introspectionQuery
    })
  }

  return fetch(url, newOptions);
}

module.exports = exports = codegenFetch;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports;
