import {modifyAnimateText} from "../functions";

export default () => {
  const animateTitle = document.querySelector(`.intro__title`);

  window.addEventListener(`load`, function () {
    document.body.classList.add(`content_loaded`);
  });

  animateTitle.classList.add(`animate-title`);
  modifyAnimateText(animateTitle);
};
