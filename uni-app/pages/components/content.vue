<template>
	<view>
		<scroll-view scroll-x="true" class="scroll" scroll-with-animation="true">
			<view>
				<block v-for="(item,index) in tab" :key="index">
					<!-- @click="tabs(item,item.nav)" -->
					<view class="list-cont"  @click="tabs(index)" :class="{active :index == num}">
						<view>
							<!-- :class="{active :index == num}" -->
							<text class="con-text-a">{{item.name}}</text>
						</view>
						<view>
							<!-- :class="{active :index == num}" -->
							<text class="con-text-b" :class="{activeb :index == num}">{{item.title}}</text>
						</view>
					</view>
				</block>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:"content",
		props:{
			tab:Array
		},
		data() {
			
			return {
				num: 0,
				// contentdata: [{
				// 		title: "推荐",
				// 		lable: "猜你喜欢"
				// 	},
				// 	{
				// 		title: "好景点",
				// 		lable: "周末放空"
				// 	},
				// 	{
				// 		title: "人文",
				// 		lable: "文化之旅"
				// 	},
				// 	{
				// 		title: "海鸟",
				// 		lable: "阳光与沙滩"
				// 	},
				// 	{
				// 		title: "情侣",
				// 		lable: "别样的浪漫"
				// 	},
				// 	{
				// 		title: "网红",
				// 		lable: "最火打卡地"
				// 	}
				// ]
			}
		},
		methods:{
			tabs(index){
				console.log(index)
				this.num=index
			}
		}
	}
</script>

<style scoped>
	.active {
		background-image: linear-gradient(to right, #ccffff 0%, #ffcc00 100%);
		border-top-right-radius: 50upx;
	}

	.activeb {
		color: #292c33 !important;
		font-size: 23upx !important;
	}

	.scroll {
		white-space: nowrap;
		width: 100%;
		position: absolute;
		left: 0;
		right: 0;
		background: #FFFFFF;
		padding: 20upx 0;
	}

	.con-text-b {
		color: #292c33;
		font-size: 30upx;
		font-weight: bold;
	}

	.con-text-b {
		color: #9ea0a5;
		font-size: 23upx;
	}

	.list-cont {
		width: 180upx;
		display: inline-block;
		text-align: center;
	}
</style>
