import clearsky from "../assets/clearsky.png";
import fewclouds from "../assets/fewclouds.png";
import thunderstorm from "../assets/thunderstorm.png";
import showerrain from "../assets/showerrain.png";
import rain from "../assets/rain.png";
import mist from "../assets/mist.png";
import snow from "../assets/snow.png";

const weatherIcon = [
  {
    iconIds: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
    photoIcon: thunderstorm,
  },
  {
    iconIds: [800],
    photoIcon: clearsky,
  },
  {
    iconIds: [801, 802, 803, 804],
    photoIcon: fewclouds,
  },
  {
    iconIds: [300, 301, 302, 310, 311, 312, 313, 314, 321],
    photoIcon: showerrain,
  },
  {
    iconIds: [500, 501, 502, 503, 504, 511, 520, 521, 522, 531],
    photoIcon: rain,
  },
  {
    iconIds: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
    photoIcon: snow,
  },
  {
    iconIds: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
    photoIcon: mist,
  },
];

const weekDaysName = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];

const months = [
  "янв",
  "фев",
  "мар",
  "апр",
  "май",
  "июн",
  "июл",
  "авг",
  "сен",
  "окт",
  "ноя",
  "дек",
];

export { weekDaysName, weatherIcon, months };
