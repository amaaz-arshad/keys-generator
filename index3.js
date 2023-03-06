const fs = require("fs");
let { dpdUkData } = require("./helpers/dpd-uk-data-old");

let rateKeys = [];
for (const item of dpdUkData.rates) {
  if (item.key.includes("1^11") || item.key.includes("1^12")) {
    for (let i = 1; i <= 30; i++) {
      rateKeys.push({ key: `${item.key}-${i}kgs`, value: item.value });
    }
  }
  else{
    rateKeys.push(item);
  }
}

dpdUkData.rates = rateKeys;
dpdUkData = JSON.stringify(dpdUkData);

fs.writeFile("outputs/dpd-uk-data2.json", dpdUkData, (err) => {
  if (err) {
    throw err;
  }
  console.log("keys generated successfully.");
});