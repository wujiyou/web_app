<template>
	<view class="goods_list">
		<view class="goods_item" v-for="item in goods" :key="item.id" @click="navigator(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.mark_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['goods'],
		data() {
			return {
				
			}
		},
		methods: {
			navigator (id) {
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="less">
.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		.goods_item {
			background: #fff;
			width: 355rpx;
			margin: 10rpx 0;
			padding: 15rpx;
			border-radius: 10rpx;
			box-sizing: border-box;
			image{
				width: 100%;
				height: 150px;
				border-radius: 10rpx;
				display: block;
				margin: auto;
			}
			.price{
				color: #B50E03;
				font-size: 36rpx;
				margin: 15rpx 5rpx 5rpx 5rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			
			.name {
				font-size: 28rpx;
				line-height: 30rpx;
				margin: 0rpx 5rpx 0rpx 5rpx;
				padding-bottom: 5rpx;
				padding-top:5rpx;
			}
		}
	}
</style>
