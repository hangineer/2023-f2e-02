import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Tab, Select, initTE } from "tw-elements";

initTE({ Tab, Select });

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.component('faIcon', FontAwesomeIcon);

app.mount('#app');
