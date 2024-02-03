import https from "https";
import axios from "axios";
import { getApiKey } from "./storage.service.js";

const token = await getApiKey("token");

const getIcon = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "☀️";
    case "02":
      return "⛅";
    case "02":
      return "⛅";
    case "04":
      return "☁";
    case "09":
      return "🌥";
    case "10":
      return "🌤";
    case "13":
      return "🌩";
    case "50":
      return "🌧";
  }
};

const getWeather = async (city) => {
  //https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  //axois orqali zapros jonatib malumotlarni olish
  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: process.env.TOKEN ?? token,
        lang: "en",
        units: "metric",
      },
    }
  );
  return data;
  //****Pastdagi qisimda https orqali append qilib malumotlar olingan****
  //   const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  //   url.searchParams.append("q", city);
  //   url.searchParams.append("appid", token);
  //   url.searchParams.append("lang", "en");
  //   url.searchParams.append("units", "metric");

  //   https.get(url, (response) => {
  //     let res = "";

  //     response.on("data", (chunk) => {
  //       res += chunk;
  //     });
  //     response.on("end", () => {
  //       console.log(res);
  //     });
  //   });
};

export { getWeather, getIcon };
