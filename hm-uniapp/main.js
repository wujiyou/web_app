import Vue from 'vue'
import App from './App'
import { myRquest } from 'util/api.js'
import iconfont from '@/components/zgwit-iconfont/iconfont.vue'
Vue.prototype.$myRuqest = myRquest

Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})
Vue.component('iconfont',iconfont)
import '@/components/zgwit-iconfont/iconfont.css'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
