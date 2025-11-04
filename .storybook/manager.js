import { addons } from "storybook/manager-api";
import themeKariu from "./themeKariu";

// Configuration Google Analytics
// Remplacez 'G-XXXXXXXXXX' par votre ID de mesure Google Analytics
const GA_MEASUREMENT_ID = process.env.STORYBOOK_GA_ID || "G-XXXXXXXXXX";

// Ajouter le script Google Analytics
if (
  typeof window !== "undefined" &&
  GA_MEASUREMENT_ID &&
  GA_MEASUREMENT_ID !== "G-XXXXXXXXXX"
) {
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
}

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "right",
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: true,
  theme: themeKariu, //themes.dark
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: true,
  },
});
