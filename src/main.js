import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// component
import App from './App.vue';

// helpers
import router from './router';

// assets
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css'
import './assets/styles/index.scss';

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi'
  }
});



app.use(router);
app.use(vuetify).mount('#app');
