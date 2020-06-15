import Vue from 'vue'
import App from './App.vue'
import antDesign from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vconsole from 'vconsole'

let vConsole = new Vconsole()
Vue.use(vConsole)
Vue.config.productionTip = false

Vue.use(antDesign);

new Vue({
  render: h => h(App),
}).$mount('#app')
