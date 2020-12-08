<template>
	<view>
		<scroll-view  scroll-y="true" @scrolltolower="handleScrolltolower" class="video_main" enable-flex>
			<view class="video_item">
				<view class="video_img" @click="handleGoVideo(item)" v-for="item in videowp" :key="item.id">
					<image mode="widthFix" :src="item.img"></image>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			urlobj:Object
		},
		watch:{
			urlobj(){
				this.videowp=[]
				this.getList()
				console.log("参数发生了变化")
				console.log(this.urlobj)
			}
		},
		data() {
			return {
				videowp:[],
				hasMore:true
			}
		},
		
		mounted(){
			console.log(this.urlobj)
			this.getList()
		},
		methods: {
			// const res = await this.$myRuqest({
			// 	url:'/goods?_start='+this.pageindex
			// })
			async getList(){
				const res = await this.$myRuqest({
					url:this.urlobj.url,
					data:this.urlobj.params
				})
				console.log(res.data[0].res.videowp.length===0)
				if(res.data[0].res.videowp.length===0){
					this.hasMore = false
					uni.showToast({
						title:"没有更多数据",
						icon:"none"
					});
				}
				this.videowp=[...this.videowp,...res.data[0].res.videowp]
				console.log(this.videowp)

			},
			// 分页效果
			handleScrolltolower(){
				if(this.hasMore){
					this.urlobj.params.skin+=this.urlobj.params.limit;
				}else{
					uni.showToast({
						title:"没有更多数据" ,
						icon:"none"
					});
				}
			},
			handleGoVideo(item){
				// console.log(item)
				// 将数据存到全局共享中
				getApp().globalData.video=item;
				// 页面跳转
				uni.navigateTo({
					url:"/pages/videos/video-play/video-play/index"
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.video_main{
		display: flex;
		// justify-content: space-around;
		flex-wrap: wrap;
		height: calc(100vh - 36px);
		.video_item{
			display: flex;
			width: 100%;
			justify-content:space-between;
			flex-wrap: wrap;
			.video_img{
				width: 32.33%;
				border:3rpx solid #fff;
				// height:400rpx;
				// 
				image{
					width: 100%;
				}
			}
		}
	}
/*  .video_main{
	  display:flex;
	  justify-content: space-around;
	  flex-wrap: wrap;
	  
  }
  .video_item{
  		 width:33.33% !important;
		 display: flex;
		 justify-content: space-around;
		 flex-wrap:wrap;
		 
  		 border:5rpx solid #fff;
  }
  .video_item image{
	  width:100%;
  } */
</style>
