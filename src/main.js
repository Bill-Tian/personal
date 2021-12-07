/*
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2022-01-12 09:46:12
 * @LastEditors: Mr.Tian
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "./assets/iconfont/iconfont.css"

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import 'github-markdown-css'

createApp(App).use(router).use(ElementPlus).use(mavonEditor).mount('#app');
// createApp(App).use(mavonEditor)
