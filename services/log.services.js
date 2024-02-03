import chalk from "chalk";
import dedent from "dedent";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR") + " " + error);
};
const printSuccess = (massage) => {
  console.log(chalk.bgGreen("Success") + " " + massage);
};
const pringHelp = () => {
  console.log(dedent`
    ${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token`);
};
const pringWeather = (res, icon) => {
  console.log(dedent`
      ${chalk.bgBlueBright("Weather")} Citt weather ${res.name}
      ${icon}   ${res.weather[0].description} 
      Temprature: ${res.main.temp} (feels like ${res.main.feels_like})
      Wind speed: ${res.wind.speed} m/s
  `);
};

export { printError, pringHelp, printSuccess, pringWeather };
