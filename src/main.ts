import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* Font Awesome Icons - https://fontawesome.com/docs/web/use-with/vue/add-icons */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitter);
/* */

/* Asset Imports */
import "./assets/fonts/SFPro/SF-Pro-Display-Black.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-BlackItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Bold.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-BoldItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Heavy.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-HeavyItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Light.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-LightItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Medium.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-MediumItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Regular.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-RegularItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-SemiBold.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-SemiBoldItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-Thin.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-ThinItalic.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-UltraThin.woff2";
import "./assets/fonts/SFPro/SF-Pro-Display-UltraThinItalic.woff2";

import "./assets/img/test.png";

import "./assets/bundle.sass";
/* */

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
