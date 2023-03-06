const { country_mapper } = require("./helpers/country-mapper");

for(const code in country_mapper){
    console.log(`"${code}",`)
}