<template>
	<view>
		<view class="home">
			<swiper indicator-dots circular>
				<swiper-item v-for="item in swipers" :key="item.id">
					<image :src="item.img"></image>
				</swiper-item>
			</swiper>

			<!-- 导航区域 -->
			<view class="nav">
				<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
					<view :class="item.icon"></view>
					<text>{{item.title}}</text>
				</view>
			</view>

			<!-- 推荐商品 -->
			<view class="hots_goods">
				<view class="tit">推荐商品</view>
				<!--  -->
				<goods-list @goodsItemClick="goGoodsDetail" :goods= "goods"></goods-list>
			</view>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/good-list/good-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				navs: [],
				goods: [],
				curr:10
			}
		},
		onLoad() {
			this.getSwipeers()
			this.getNavs()
			this.getGoods()
		},
		components: {
			"goods-list": goodsList
		},
		methods: {
			// 轮播图
			async getSwipeers() {
				const res = await this.$myRuqest({
					url: "/images"
				})
				// console.log(res)
				this.swipers = res.data
			},
			// 导航栏
			async getNavs() {
				const res = await this.$myRuqest({
					url: "/navs"
				})
				// console.log(res)
				this.navs = res.data
			},
			// 跳转页面
			navItemClick(url){
				uni.navigateTo({
					url
				})
			},
			// 推荐商品
			async getGoods() {
				const res = await this.$myRuqest({
					url: "/goods?_limit="+this.curr
				})
				
				this.goods = res.data
				console.log(this.goods)
			},
			// 导航详情页
			goGoodsDetail(id){
				uni.navigateTo({
					url: '/pages/goods-list/goods-list?id='+id
				})
			}
				
			
		}
	}
</script>

<style lang="less">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;
			image {
				height: 100%;
				width: 100%;

			}
		}
		.nav {
			display: flex;
			.nav_item {
				width: 25%;
				text-align: center;
				view {
					width: 120rpx;
					height: 120rpx;
					background: #b50e03;
					border-radius: 60rpx;
					margin: 10rpx auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}
				.icon-tupian {
					font-size: 45rpx;
				}
				text {
					font-size: 30rpx;
				}
			}
		}
		.hots_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 15rpx;
			.tit{
				height: 50rpx;
				line-height: 50rpx;
				// border-radius: 10rpx;
				color: #B50E03;
				text-align: center;
				letter-spacing: 20px;
				background-color: #fff;
				padding: 15rpx 0 10rpx 0;
				margin-bottom: 7rpx;
				// margin: 0px 0;
			}
		}

	}
</style>
