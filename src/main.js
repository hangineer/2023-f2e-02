import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Tab, Select, initTE } from 'tw-elements';

initTE({ Tab, Select });

const app = createApp(App);

app.use(createPinia());
app.use(router);
// app.use(VueAxios, axios);

// app.component('faIcon', FontAwesomeIcon);

app.mount('#app');
