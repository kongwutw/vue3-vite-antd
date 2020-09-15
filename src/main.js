import { createApp } from 'vue';
import 'ant-design-vue/dist/antd.css';

import App from "/@/App.vue";
import router from "/@/router";
import vuex from "/@/vuex";


createApp(App).use(vuex).use(router).mount('#app')
