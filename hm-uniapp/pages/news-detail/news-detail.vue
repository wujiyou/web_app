<template>
	<view class="news_detail">
		<text class="titles">{{detail.title}}</text>
		<view class="info">
			<text>发表时间：{{detail.add_time | formatDate}}</text>
			<text style="margin-left: 20rpx;">浏览：{{detail.click}}</text>
		</view>
		<view class="content" style="margin-top:30rpx;">
			&ensp;&ensp;<text style="line-height: 50rpx;">{{detail.content}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:2321,
				detail:{},
				title:"",
				add_time:"",
				click:"",
				content:""
				
			};
		},
		methods:{
			async getNewsDetail () {
				const res = await this.$myRuqest({
					url: '/newsdetail?id='+this.id
				})
				// console.log(res)
				this.detail = res.data[0].children[0]
				this.title=(res.data[0].children[0].title)
				this.add_time=res.data[0].children[0].add_time
				this.click=res.data[0].children[0].click
				this.content=res.data[0].children[0].content
	
				// console.log(this.detail[0].title + "++++++++++++")
				// console.log(res.data[0].children[0].title)
				// console.log(res.data[0].children[0].add_time)
				// console.log(res.data[0].children[0].click)
			}
		},
		onLoad(options){
			// console.log(options)
			this.id = options.id
			this.getNewsDetail()
		}
	}
</script>

<style lang="less">
.news_detail{
	font-size: 35rpx;
	padding: 0 20rpx;
	.titles{
		text-align: center;
		width: 720rpx;
		font-weight: bold;
		display: block;
		font-size: 40rpx;
		margin: 20rpx 0;
		.info{
			display: flex;
			justify-content:space-between;
			text{
				padding-left:50rpx;
				display:block;
			}
				
		}
		.content{
			margin-top:30rpx !important;
			text{
				// text-indent: 1rpx;
				// font-size: 30rpx !important;
			}
		}
	}
}
</style>
