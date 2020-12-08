<template>
	<view>
		<view class="search-cont">
			<view class="search-code">
				<image src="../../../static/logo.png" mode="widthFix"></image>
			</view>
			<view class="search">
				<image class="search-img" src="../../../static/logo.png" mode="widthFix"></image>
				<input type="text" value="请输入关键字" disabled="" />
			</view>
			<view class="search-code">
				<image src="../../../static/logo.png" mode="widthFix"></image>
			</view>
		</view>

		<!-- 轮播 -->
		<view>
			<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<block v-for="(item,index) in banner" :key="index">
					<swiper-item>
						<view class="swiper-item" id="swiper-item" @click="localCont()">
							<image :src="item.image" mode="aspectFill" class="imageurl"></image>
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>

	</view>
</template>

<script>
	export default {
		name: 'search',
		props: {
			banner: Array
		},
		data() {
			return {
				// banner: [{
				// 		"image": "cloud://youyouhb-2gw4tg6h4cd5b9e2.796f-youyouhb-2gw4tg6h4cd5b9e2-1304059621/banner/1.jpg"
				// 	},
				// 	{
				// 		"image": "cloud://youyouhb-2gw4tg6h4cd5b9e2.796f-youyouhb-2gw4tg6h4cd5b9e2-1304059621/banner/1.jpg"
				// 	},
				// 	{
				// 		"image": "cloud://youyouhb-2gw4tg6h4cd5b9e2.796f-youyouhb-2gw4tg6h4cd5b9e2-1304059621/banner/1.jpg"
				// 	}
				// ]
			}
		},
	}
</script>

<style scoped>
	.search-code image {
		width: 50upx;
		height: 50upx;
	}

	.search-code {
		width: 50upx;
		height: 50upx;
		padding: 0 15upx;
	}

	.search-img {
		width: 40upx;
		height: 40upx;
		margin: auto 0 auto 20upx;
	}

	.search {
		display: flex;
		flex-direction: flex;
		background-color: #fff7d4;
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		border-top-left-radius: 50upx;
		border-bottom-left-radius: 50upx;
		border-bottom-right-radius: 50upx;
	}

	.search input {
		height: 70upx;
		line-height: 70upx;
		width: 100%;
		font-size: 30upx;

	}

	.search-cont {
		display: flex;
		justify-content: space-between;
		height: 70upx;
		align-items: center;
		background: linear-gradient(to top, #ffe556 10%, #ffd300);
		padding: 30upx 0;
	}

	/* 轮播 */
	.imageurl {
		width: 100%;
		height: 300upx !important;
	}

	swiper {
		height: 300upx !important;
	}
</style>
