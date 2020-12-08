<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{money.sell_price}}</text>
				<text>￥{{money.market_price}}</text>
			</view>
			<view class="goods_name">{{money.title}}</view>
		</view>
		<view class="line"></view>
		<view class="box2">
			<view>货号：{{money.goods_no}}</view>
			<view>库存：{{money.stock_quantity}}</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">详情介绍</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from "../../components/uni-goods-nav/uni-goods-nav.vue"
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				money:{},
				sell_price: "",
				market_price: "",
				title: "",
				goods_no: "",
				stock_quantity: "",
				content: "",
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺'
				}, {
					icon: 'cart',
					text: '购物车',
					info: 12
				}, ],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]

			}
		},
		methods: {
			async getSwipers() {
				const res = await this.$myRuqest({
					url: "/getthumimages?id=" + this.id
				})
				console.log(res)
				this.swipers = res.data[0].item
			},
			onClick(e) {
				// uni.showToast({
				// 	title: `点击${e.content.text}`,
				// 	icon: 'none'
				// })
				console.log(e)
			},
			async getDetailInfo() {
				const res = await this.$myRuqest({
					url: "/infro?id=" + this.id
				})
				console.log(res)
				this.money=res.data[0].item[0]
				this.sell_price = res.data[0].item[0].sell_price
				this.market_price = res.data[0].item[0].market_price
				this.title = res.data[0].item[0].title
				this.goods_no = res.data[0].item[0].goods_no
				this.stock_quantity = res.data[0].item[0].stock_quantity

				// this.swipers = res.data[0].item
			},
			async getDetailContent() {
				const res = await this.$myRuqest({
					url: "/content?id=" + this.id
				})
				console.log(res)
				this.content = res.data[0].item[0].content
			},
			buttonClick (e) {
				console.log(e,+"=====================")
				// this.options[2].info++
			}
		},
		onLoad(options) {
			console.log(options)
			this.id = options.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		},
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="less">
	.goods_detail {

		// height: 1000rpx;
		swiper {
			height: 700rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.box1 {
			padding: 10px;

			.price {
				font-size: 35rpx;
				color: #B50E03;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}

		.box2 {
			padding: 0 10px;
			font-size: 32rpx;
			line-height: 70rpx;
		}

		.box3 {
			padding-bottom: 50px;

			.tit {
				font-size: 32rpx;
				padding-left: 10px;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}

			.content {
				padding: 10px;
				font-size: 28rpx;
				color: #333;
				line-height: 50rpx;
			}
		}
	}

	.goods_nav {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.line {
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>
