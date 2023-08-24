import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const app = createApp(App);

import {} from '@fortawesome/free-regular-svg-icons';
library.add();

app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
