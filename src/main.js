/*
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-12-02 11:34:07
 * @LastEditors: Mr.Tian
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/iconfont/iconfont.css"

createApp(App).use(router).use(ElementPlus).mount('#app');
// createApp(App).use(ElementPlus)
