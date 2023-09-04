const fetch = require('node-fetch');
require('dotenv').config();

/*** 
 * @typedef {json} newtonRes
 * @property {string} operation": The name of the mathematical operation to execute
 * @property {string} expression": The mathematical expression to be operated on
 * @property {string} result: The result of the operation on the expression
 */

/***
 * Performs a GET request to the API.
 * @param {newtonRes} expected
 * @returns {newtonRes} response 
 */
async function fetchData(expected) {
   const URL = `${process.env.API_URL}/api/v2/${expected.operation}/${expected.expression}`
   const res =  await fetch(URL);
   const received = await res.json();
   return received; 
};

module.exports = fetchData;