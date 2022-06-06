import {modifyAnimateText} from "../functions";

export default () => {
  const introTitle = document.querySelector(`.intro__title`);
  const introDate = document.querySelector(`.intro__date`);
  const historyTitle = document.querySelector(`.slider__item-title`);
  const prizeTitle = document.querySelector(`.prizes__title`);
  const rulesTitle = document.querySelector(`.rules__title`);
  const gameTitle = document.querySelector(`.game__title`);

  window.addEventListener(`load`, function () {
    document.body.classList.add(`content_loaded`);
  });

  modifyAnimateText(introTitle);
  modifyAnimateText(introDate, {lineSeparator: `,`});
  modifyAnimateText(historyTitle);
  modifyAnimateText(prizeTitle);
  modifyAnimateText(rulesTitle);
  modifyAnimateText(gameTitle);
};
