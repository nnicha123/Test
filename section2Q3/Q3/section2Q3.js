const request = require('request');
request({
  url: "https://codequiz.azurewebsites.net/",
  json: true,
  body: process.argv.slice[2],
}, (err, response, body) => {
  console.log(JSON.stringify(body, undefined, 4))
})
console.log(process.argv.slice(2))