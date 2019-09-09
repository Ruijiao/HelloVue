import Vue from 'vue'
import App from './App.vue'
import antDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(antDesign);

new Vue({
  render: h => h(App),
}).$mount('#app')
