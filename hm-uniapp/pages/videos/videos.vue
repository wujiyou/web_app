<template>
	<view>
		<view class="video_tab">
			<view class="video_tab_title">
				<view class="title_inner">
					<uni-segmented-control
					:values="items.map(v=>v.title)"
					:current="current"
					@clickItem="onClickItem"
					style-type="text"
					active-color="#d4237a"
					>
					</uni-segmented-control>
				</view>
				<view class="iconfont iconsearch">
					
				</view>
				<view class="video_tab_content">
					<view v-if="current<4">
						<video-main :urlobj="{url:items[current].url,params:items[current].params}"></video-main>
					</view>
					<view v-if="current===4">
						<video-category></video-category>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { uniSementedControl } from "../../components/uni-segmented-control/uni-segmented-control.vue"
	import videoMain from "./video-main/video-main/index.vue"
	import videoCategory from "./video-category/video-category/index.vue"
	
	export default {
	    data() {
	        return {
				current:0,
				items:[
					{
						title:"推荐",
						url:"/video_recommend",
						params:{
							limit:30,
							skip:0,
							order:"hot"
						}
					},
					{
						title:"娱乐",
						url:"/video_recreation",
						params:{
							limit:30,
							skip:0,
							order:"hot"
						}
					},
					{
						title:"最新",
						url:"/video_new",
						params:{
							limit:30,
							skip:0,
							order:"hot"
						}
					},
					{
						title:"热门",
						url:"/video_hot",
						params:{
							limit:30,
							skip:0,
							order:"hot"
						}
					},
					{
						title:"分类",
						url:"/video_classify",
						params:{}
					}
				]
	        }
	    },
		components:{
			uniSementedControl,
			videoMain,
			videoCategory
		},
	 
	    methods: {
			onClickItem(e){
				console.log(e)
				if(this.current !== e.currentIndex){
					this.current = e.currentIndex
				}
			}
	    }
	}
</script>

<style lang="less">
.home_tab{
	.home_tab_title{
		position: relative;
		.title_inner{
			width:30%;
			margin: 0 auto;
		}
		.iconsearch{
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 5%;
		}
	}
	.home_tab_content{
		
	}
}
</style>
