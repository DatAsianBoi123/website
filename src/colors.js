const root = document.querySelector(':root');

export const darkColors = {
  'heading-color': 'white',
  'text-color': 'rgb(220, 220, 220)',
  'subtitle-color': 'rgb(190, 190, 190)',
  'link-color': 'rgb(162, 162, 245)',
  'link-hover-color': 'rgb(192, 192, 248)',
  'main-color': 'rgb(8, 2, 10)',
  'secondary-color': 'rgb(18, 14, 20)',
  'accent-color': 'rgb(193, 143, 243)',
  'container-color': 'rgba(255, 255, 255, 0.02)',
  'scrollbar-thumb-color': 'rgb(148, 103, 194)',
};

export const lightColors = {
  'heading-color': 'black',
  'text-color': 'rgb(20, 20, 20)',
  'subtitle-color': 'rgb(50, 50, 50)',
  'link-color': 'rgb(214, 163, 41)',
  'link-hover-color': 'rgb(222, 182, 87)',
  'main-color': 'rgb(245, 243, 237)',
  'secondary-color': 'rgb(238, 237, 233)',
  'accent-color': 'rgb(230, 153, 28)',
  'container-color': 'rgba(0, 0, 0, 0.04)',
  'scrollbar-thumb-color': 'rgb(250, 186, 82)',
};

export function setDark() {
  for (const prop of Object.keys(darkColors)) {
    root.style.setProperty(`--${prop}`, darkColors[prop]);
  }
}

export function setLight() {
  for (const prop of Object.keys(lightColors)) {
    root.style.setProperty(`--${prop}`, lightColors[prop]);
  }
}

