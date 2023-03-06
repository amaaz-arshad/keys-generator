const { country_mapper } = require("./country-mapper");
const { destinations } = require("./destinations");
const fs = require("fs");

let arr = [];
zone = 6;
for (const code in country_mapper) {
  let country = country_mapper[code];
  let value =
    destinations[
      country
    ].services.classic_road.weightClasses[0].baseRate.amount.toString();
  arr.push({ key: `KEY-1^19-zone${zone}`, value });
  zone++;
}

arr = JSON.stringify(arr);
fs.writeFile("country-keys.js", arr, (err) => {
  if (err) {
    throw err;
  }
  console.log("keys generated successfully.");
});

// // keys section

// let zonekeys = [];
// for (const postcode of uniquePostcodes) {
//   zonekeys.push({ key: `KEY-${postcode}`, value: "northern_ireland" });
// }
// zonekeys = JSON.stringify(zonekeys);
// fs.writeFile("mainland-keys.js", zonekeys, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("keys generated successfully.");
// });

// let countriesKeys = [];
// let zone = 6;
// for (const code in country_mapper) {
//   countriesKeys.push({
//     key: `KEY-mainland-${code}`,
//     value: { "1^19": zone.toString() }
//   });
//   zone++;
// }
// countriesKeys = JSON.stringify(countriesKeys);
// fs.writeFile("countries-keys.js", countriesKeys, (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("countries keys generated successfully.");
// });

// // keys section end