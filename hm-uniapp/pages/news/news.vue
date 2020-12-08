<template>
	<view class="news">
		<news-item @itemClick="goDetail" :list="newsList"></news-item>
	</view>
</template>

<script>
	import newsItem from '../../components/new-item.vue'
	export default {
		data() {
			return {
			  newsList: []
			}
		},
		methods: {
			async getNews () {
				const res = await this.$myRuqest({
					url: '/news'
				})
				this.newsList = res.data
				console.log(this.newsList)
			},
			goDetail(id){
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		components: {"news-item":newsItem},
		onLoad(){
			this.getNews()
		}
	}
</script>

<style>

</style>
