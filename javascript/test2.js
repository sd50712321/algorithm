// function decode(encoded) {
//   // Write your code here
//   const str = encoded.split("");
//   const result = [];
//   while (str.length > 0) {
//     const firstCharacter = str.pop();
//     if (+firstCharacter === 1) {
//       const middleCharacter = str.pop();
//       const lastCharacter = str.pop();
//       const ascCode = `${firstCharacter}${middleCharacter}${lastCharacter}`;
//       result.push(ascCode);
//     } else {
//       const lastCharacter = str.pop();
//       const ascCode = `${firstCharacter}${lastCharacter}`;
//       result.push(ascCode);
//     }
//   }
//   return String.fromCharCode(...result);
// }

// console.log(decode("23511011501782351112179911801562340161171141148"));
const request = require("request");

async function weatherStation(keyword) {
  const url = `https://jsonmock.hackerrank.com/api/weather/search?name=${keyword}`;
  request.get(url, function (error, response, body) {
    console.log("body", body);
  });
  // console.log("responses", responses);
  // console.log("jsonData", jsonData);
}
console.log(weatherStation("all"));
