"use strict";

// const fs = require("fs");
const axios = require("axios");

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");

// let inputString = "";
// let currentLine = 0;

// process.stdin.on("data", function (inputStdin) {
//   inputString += inputStdin;
// });

// process.stdin.on("end", function () {
//   inputString = inputString.split("\n");

//   main();
// });

// function readLine() {
//   return inputString[currentLine++];
// }

/*
 * Complete the 'weatherStation' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING keyword as parameter.
 * API URL:  https://jsonmock.hackerrank.com/api/weather/search?name={keyword}
 */

async function getData(keyword, page = [1]) {
  for (let i = 0; i < page.length; i++) {
    const url = `https://jsonmock.hackerrank.com/api/weather/search?name=${keyword}&page=${page[i]}`;
    const result = await axios.get(url);
  }
  return result.data;
}

async function weatherStation(keyword) {
  let page = 1;
  const getAllData = [];
  const httpGet = await getData(keyword, [page]);
  const total_pages = httpGet.total_pages;
  const data = httpGet.data;
  const returnResult = data.map((data) => {
    return `${data.name},${data.weather.split(" ")[0]},${data.status.map(
      (status) => status.replace(/[^0-9]/g, "")
    )}`;
  });
  getAllData.push(...returnResult);
  if (page !== total_pages) {
  }
  return getAllData;
}

async function main() {
  const result = await weatherStation("all");
  console.log("result", result);
}
main();
// console.log(weatherStation("all"));
// async function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const keyword = readLine();

//   const result = await weatherStation(keyword);

//   ws.write(result.join("\n") + "\n");

//   ws.end();
// }
