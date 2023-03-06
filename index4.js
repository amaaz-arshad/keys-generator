const fs = require("fs");
const { country_mapper } = require("./helpers/country-mapper");
let { dpdUkData } = require("./helpers/dpd-uk-data");

let mainlandPostcodes = [];
let scottlandPostcodes = [];
let isleOfManPostcodes = [];
let northernIrelandPostcodes = [];
let channelIslandPostcodes = [];

try {
  const data = fs.readFileSync("helpers/mainland-postcodes-short.txt", "UTF-8");
  mainlandPostcodes = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

for (let i = 0; i < mainlandPostcodes.length; i++) {
  let regex = /^([a-zA-Z]{1,2}[0-9]{1,2}[a-zA-Z]{1})$/;
  if (mainlandPostcodes[i].match(regex)) {
    mainlandPostcodes[i] = mainlandPostcodes[i].slice(0, -1);
  }
}

mainlandPostcodes = Array.from(new Set(mainlandPostcodes));

try {
  const data = fs.readFileSync("helpers/scottland-postcodes.txt", "UTF-8");
  scottlandPostcodes = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

try {
  const data = fs.readFileSync("helpers/isle-of-man-postcodes.txt", "UTF-8");
  isleOfManPostcodes = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

try {
  const data = fs.readFileSync(
    "helpers/northern-ireland-postcodes.txt",
    "UTF-8"
  );
  northernIrelandPostcodes = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

try {
  const data = fs.readFileSync("helpers/channel-island-postcodes.txt", "UTF-8");
  channelIslandPostcodes = data.split(/\r?\n/);
} catch (err) {
  console.error(err);
}

let valueObj = {};

mainlandPostcodes.forEach((mainland2) => {
  valueObj[mainland2] = { "1^12": "1", "1^17": "1", "1^18": "1" };
});

scottlandPostcodes.forEach((scottland) => {
  valueObj[scottland] = { "1^11": "2" };
});

isleOfManPostcodes.forEach((isle) => {
  valueObj[isle] = { "1^11": "3" };
});

northernIrelandPostcodes.forEach((northern) => {
  valueObj[northern] = { "1^11": "4", "1^12": "4" };
});

channelIslandPostcodes.forEach((channel) => {
  valueObj[channel] = { "1^11": "5" };
});

let zone = 6;
for (const code in country_mapper) {
  valueObj[code] = { "1^19": `${zone}` };
  zone++;
}

let zonekeys = [];

mainlandPostcodes.forEach((mainland1) => {
  zonekeys.push({
    key: `KEY-${mainland1}`,
    value: valueObj
  });
});

dpdUkData.zones = zonekeys;
dpdUkData = JSON.stringify(dpdUkData);

fs.writeFile("outputs/dpd-uk-data-obj-short.json", dpdUkData, (err) => {
  if (err) {
    throw err;
  }
  console.log("keys generated successfully.");
});
