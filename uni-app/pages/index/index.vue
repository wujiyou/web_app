<template>
	<view>
		<Indexb :banner="banner"></Indexb>
		<Indexa></Indexa>
		<Classify ></Classify>
		<Content :tab="tab" id="boxFixed" :class="{'is_fixed':isFixed}"></Content>
		<view style="height: 146upx;"></view>
		<Article></Article>
		
	</view>
</template>

<script>
	import Indexa from '../components/indexa/indexa.vue'
	import Indexb from '../components/indexb/indexb.vue'
	import Classify from '../components/classify.vue'
	import Content from '../components/content.vue'
	import Article from '../components/article.vue'
	// 结构
	var {log} = console
	// 引用封装 工业方法
	import {home} from '../../common/cloundfun.js'
	
	export default {
		components: {
			Indexa,
			Indexb,
			Classify,
			Content,
			Article
		},
		data() {
			return {
				isFixed:false,
				rect:'',
				menuTop:"",
				banner:[],
				tab:[]
			}
		},
		created(){
			// 请求轮播
			home()
			.then((res)=>{
				log(res)
			})
			.catch((err)=>{
				log(err)
			})
			
			const db =wx.cloud.database() //指定要操作数据库
			const banner = db.collection('banner') //指定请求那个集合，也就是那个json数据
			banner.get()
			.then((res)=>{
				// console.log(res)
				this.banner=res.data
				// console.log(this.banner)
			})
			.catch((err)=>{
				console.log(err)
			})
			
			
			// tab请求数据
			const tab = db.collection('tab')
			tab.get()
			.then((ress)=>{
				log(ress)
				this.tab =ress.data
				log(this.tab)
				// this.banner=res.data
				// console.log(this.banner)
			})
			.catch((err)=>{
				console.log(err)
			})
		},
		onLoad() {
			// console.log("========")
			const query = wx.createSelectorQuery()
			query.select("#boxFixed").boundingClientRect()
			// query.selectViewport().scrollOffset()
			query.exec((res)=>{
				// console.log(res)
				this.menuTop=res[0].top
			})
		},
		/* 监听页面滚动 */
		onPageScroll(e){
			// console.log(e)
			this.rect = e.scrollTop
		},
		// 计算属性时刻监听数据编号，只要发生变化，计算属性就会重新执行
		computed:{
			// 滑动组件置顶
			namepage(){
				if(this.rect>this.menuTop){
					this.isFixed=true
					console.log("置顶")
				}else{
					this.isFixed=false
					console.log("不置顶")
				}
			}
		}
	
	}
</script>

<style scoped>
	
 .is_fixed{
	 position: fixed;
	 left: 0;
	 right: 0;
	 top: 0;
 }
</style>
