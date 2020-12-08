<template>
	<view>
		<view class="ticket">
		<!-- 	<block v-for="(item,index) in img" :key="index">
				 <view>
				 	<image :src="item.url" mode="widthFix"></image>
				     <text>{{item.text}}</text>
				 </view>
			</block> -->
			<!-- http://vue.thexxdd.cn/media/goods/images/banner01_CxlIK3v.jpg -->
			<view>
				<image src="../../../static/logo.png" mode="widthFix"></image>
			     <text>机票</text>
			</view>
			<view>
				<image src="../../../static/logo.png" mode="widthFix"></image>
			     <text>机票</text>
			</view>
			<view>
				<image src="../../../static/logo.png" mode="widthFix"></image>
			     <text>机票</text>
			</view>
			<view>
				<image src="../../../static/logo.png" mode="widthFix"></image>
			     <text>机票</text>
			</view>
			<view>
				<image src="../../../static/logo.png" mode="widthFix"></image>
			     <text>机票</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"ticket",
		data() {
			return {
				// img:[
				// 	{
				// 		"url":"../../../static/logo.png",
				// 		"text":"机票"
				// 	},
				// 	{
				// 		"url":"../../../static/logo.png",
				// 		"text":"机票"
				// 	},
				// 	{
				// 		'url':"../../../static/logo.png",
				// 		"text":"机票"
				// 	},
				// 	{
				// 		"url":"../../../static/logo.png",
				// 		"text":"机票"
				// 	},
				// 	{
				// 		"url":"../../../static/logo.png",
				// 		"text":"机票"
				// 	}
				// ]
			}

		},
		methods: {
		  
		}
	}
</script>

<style scoped>
	.ticket image{
		width: 90upx;
		height: 90upx;
	}
	.ticket{
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin: 30upx 0;
	}
	.ticket text{
		font-size: 30upx;
		display: block;
		text-align: center;
	}
</style>
