<template>
	<view class="video_play">
		<image :src="videoObj.img" mode=""></image>
		<!-- 工具栏开始 -->
		  <view class="video_tool">
		  	 <view @click="hangdleMuted" :class="['iconfont',muted?'icon-jingyin': 'icon-shengyin']"></view>
			 <view class="iconfont icon-zhuanfa">
				 1
				 <button open-type="share"></button>
			 </view>
		  </view>
		<!-- 工具栏结束 -->
		<!-- 视频开始 -->
		<view class="video_wrap">
			<video :muted="muted" :src="videoObj.video" objectFit="fill" controls></video>
		</view>
		<!-- 视频结束 -->
		<!-- 下载开始 -->
		 <view class="download">
		 	<view @click="handleDownload" class="download_btn">
		 		下载高清
		 	</view>
		 </view>
		<!-- 下载结束 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoObj:{},
				muted:false
			}
		},
		onLoad(){
			// console.log(getApp().globalData.video)
			this.videoObj=getApp().globalData.video
		},
		methods: {
			// 下载视频
			async handleDownload(){
				await uni.showLoading({
					title:"下载中"
				});
				// 将远程文件 下载到小程序内存中
				const { temFilePath } =(
				await uni.downloadFile({
					url:this.videoObj.video
				})
				);
				// 将内存中的文件 下载到本地上
				await uni.saveVideoToPhotosAlbum({
					filePath:temFilePath
				});
				uni.hideLoading();
				await uni.showToast({
					title:"下载成功"
				})
			},
			
			
			
			
			// 开关声音
			hangdleMuted(){
				this.muted = !this.muted
			}
		}
	}
</script>

<style lang="less">
// @import url('');
 .video_play{
	 position: relative;
	 image{
	 		 position: absolute;
	 		 width: 100vw;
	 		 height: 100vh;
	 		 z-index: -1;
	 		 // css3 滤镜
	 		 filter: blur(20px);
	 }
	 .video_tool{   
		 height: 80rpx;
		 display: flex;
		 justify-content: flex-end;
		 .iconfont{
			 width: 80rpx;
			 color: #fff;
			 font-size: 40rpx;
			 background-color: #a8a8a8;
			 border-radius: 50rpx;
			 // opacity: 0.2;
			 z-index: 9999;
			 display: flex;
			 justify-content: center;
			 align-items: center;
			 margin-right: 20rpx;
		 }
		 .iconzhuanfa{
			 position: relative;
			 button{
				 position: absolute;
				 width: 100%;
				 height: 100%;
				 opacity: 0;
			 }
		 }
	 }
	 .video_wrap{
		 display: flex;
		 justify-content: center;
		 video{
			 // width:100vw;
			 width: 400rpx;
			 height: 600rpx;
		 }
	 }
	 .download{
		 display: flex;
		 justify-content: center;
		 margin-top: 30rpx;
		 .download_btn{
			 width: 360rpx;
			 height: 80rpx;
			 border-radius: 40rpx;
			 justify-content: center;
			 align-items: center;
			 text-align: center;
			 line-height: 80rpx;
			 color: white;
			 border: 1px solid #fff;
			 background-color: rgba(0,0,0,.6);
		 }
	 }
	 
 }

 

</style>
