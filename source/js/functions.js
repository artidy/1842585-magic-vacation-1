const DEFAULT_SETTINGS = {
  property: `transform`,
  duration: 0.3,
  timingFunctions: [`ease-in`, `ease-out`, `ease`],
  lineSeparator: ` `,
  containerTag: `span`,
  lineClass: `line__text-animate`,
  letterClass: `letter__text-animate`,
  lineDelay: 0.2,
  maxLetterDelay: 0.2,
  letterDelayDigit: 1
};

export const modifyAnimateText = (textNode, settings = {}) => {
  const animationSettings = {...DEFAULT_SETTINGS, ...settings};
  const {
    property,
    duration,
    timingFunctions,
    lineSeparator,
    containerTag,
    lineClass,
    letterClass,
    lineDelay,
    maxLetterDelay,
    letterDelayDigit
  } = animationSettings;
  const content = textNode.textContent;
  const lines = content.split(lineSeparator);

  textNode.innerHTML = ``;

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const lineElement = document.createElement(containerTag);
    const line = lines[lineIndex];

    lineElement.classList.add(lineClass);

    for (const letter of line) {
      const charElement = document.createElement(containerTag);
      const timingFunction = timingFunctions[getRandomIndex(timingFunctions.length)];
      const letterDelay = lineDelay * lineIndex + generateRandomNumber(maxLetterDelay, letterDelayDigit);

      charElement.textContent = letter;
      charElement.style.transition = `${property} ${duration}s ${timingFunction} ${letterDelay}s`;

      if (letter === ` `) {
        charElement.style.whiteSpace = `pre`;
      }

      charElement.classList.add(letterClass);
      lineElement.append(charElement);
    }

    textNode.append(lineElement);
  }
};

const getRandomIndex = (arrayLength) => generateRandomNumber(arrayLength - 1);

const generateRandomNumber = (max, digit = 0) => +((Math.random() * max).toFixed(digit));
