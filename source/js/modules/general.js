import {modifyAnimateText} from "../functions";

export default () => {
  const introTitle = document.querySelector(`.intro__title`);
  const introDate = document.querySelector(`.intro__date`);

  window.addEventListener(`load`, function () {
    document.body.classList.add(`content_loaded`);
  });

  modifyAnimateText(introTitle);
  modifyAnimateText(introDate, {lineSeparator: `,`});
};
