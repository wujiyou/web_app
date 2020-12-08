<template>
	<view>
		<goods-list @goodsItemClick="goGoodsDetail" :goods="goods"></goods-list>
	     <view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from '../../components/good-list/good-list.vue'
	export default {
		data() {
			return {
				goods:[],
				pageindex:1,
				flag: false
			}
		},
		components: {
			"goods-list": goodsList
		},
		
		methods: {
			// 获取商品列表数据
			async getGoodsList(callBack) {
				const res = await this.$myRuqest({
					url:'/goods?_start='+this.pageindex
				})
				console.log(res)
				// [...this.goods,...res.data.message]
				this.goods = [...this.goods,...res.data]
				callBack && callBack()
			},
			goGoodsDetail(id){
				console.log(id)
				uni.navigateTo({
					url: '/pages/goods-list/goods-list?id='+id
				})
			}
		},
		onLoad () {
			this.getGoodsList()
		},
		onReachBottom() {
			console.log("++++++++++++++")
			console.log(this.pageindex++)
			// this.getGoodsList()
			console.log(this.goods.length+"++++++++++++++")
			if(this.goods.length<this.pageindex*10) return this.flag = true
			
			this.pageindex++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log('下拉刷新了')
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
			  this.getGoodsList(()=>{
					uni.stopPullDownRefresh()
				})	
			},1000)
		}
	}
</script>

<style>
.goods_list {
		background: #eee;;
	}
	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
