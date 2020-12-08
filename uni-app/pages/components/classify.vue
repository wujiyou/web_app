<template>
	<view>
		<view style="margin: 0 20upx;">
			<view class="conteng">
				<block v-for="(item,index) in tab" :key="index">
					<view>
						<text class="tick">{{item.tick}}</text>
						<text class="nametext">{{item.nametext}}</text>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			// props:{
			// 	tab:tab
			// }
			return{
				tab:[
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					},
					{
						"tick":"旅游事业",
						"nametext":"小行星"
					}
				]
			}
		}
	}
</script>

<style scoped>
	.conteng{
		display: flex;
		width: 100%;
		-webkit-flex-wrap:wrap;
		overflow: hidden;
		border-radius: 10rpx;
	}
	.conteng view{
		width: 25%;
		flex-direction: column;
		align-items: center;
		display: flex;
		box-sizing: border-box;
		padding: 20upx 0;
		
	}
	.conteng view:nth-child(2){
		border-left: 1rpx solid #EEEEEE;
		border-right: 1rpx solid #EEEEEE;
	}
	.conteng view:nth-child(6){
		border-left: 1rpx solid #EEEEEE;
		border-right: 1rpx solid #EEEEEE;
	}
	.conteng view:nth-child(3){
		border-right: 1rpx solid #EEEEEE;
	}
	.conteng view:nth-child(7){
		border-right: 1rpx solid #EEEEEE;
	}
	.conteng view:nth-child(-n+4){
		border-bottom: 1rpx solid #EEEEEE;
	}
	.tick{
		font-size: 30upx;
		color: #333333;
		font-weight: bold;
	}
	.nametext{
		font-size: 23upx;
		color: #686868;
	}
</style>
