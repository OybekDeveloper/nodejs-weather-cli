import getArgs from "./helpers/args.js";
import { getIcon, getWeather } from "./services/api.services.js";
import {
  pringHelp,
  pringWeather,
  printError,
  printSuccess,
} from "./services/log.services.js";
import { getApiKey, saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError("Token doesn't exist");
    return;
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Token was saved");
  } catch (err) {
    printError(err.massage);
  }
};
const saveCity = async (city) => {
  if (!city.length) {
    printError("City doesn't exist");
    return;
  }
  try {
    await saveKeyValue("city", city);
    printSuccess("City was saved");
  } catch (err) {
    printError(err.massage);
  }
};
const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getApiKey("city"));
    const res = await getWeather(city);
    pringWeather(res, getIcon(res.weather[0].icon));
  } catch (err) {
    if (err?.response?.status == 404) {
      printError("City not found!");
    } else if (err?.response?.status == 401) {
      printError("Token is not inviled!");
    } else {
      printError(err?.massage, "fadfasd");
    }
  }
};

const startCli = () => {
  const args = getArgs(process.argv);
  if (args.h) {
    return pringHelp();
  }
  if (args.s) {
    return saveCity(args.s);
  }
  if (args.t) {
    return saveToken(args.t);
  }
  return getForcast();
};
startCli();
