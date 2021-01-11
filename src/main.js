import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueCookies from "vue-cookies";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueCookies);

Vue.prototype.$api_address = "https://api.arnaudperalta.fr";

new Vue({
    vuetify,
    render: h => h(App)
}).$mount("#app");

// Detecte l'utilisation de service workers utiles pour une PWA.
if("serviceWorker" in navigator){
    navigator.serviceWorker.register("/sw.js");
}
