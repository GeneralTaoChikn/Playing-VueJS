import { createApp } from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
// import exampleAPI from  './components/exampleAPI.vue'
// import axios from 'axios'


const app = createApp(App);
// Vue.prototype.$http = axios;

app.component('hello-world', HelloWorld);
// app.component('example-api', exampleAPI);

app.mount('#app');
