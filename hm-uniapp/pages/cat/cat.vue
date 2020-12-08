<template>
	<view>
		<view class="video_tab">
			<view class="video_tab_title">
				<view class="title_inner">
					<uni-segmented-control
					:values="items.map(v=>v.title)"
					:current="current"
					@clickItem="onClickCat"
					style-type="text"
					active-color="#d4237a"
					>
					</uni-segmented-control>
				</view>
				<view class="video_tab_content">
					<view v-if="current<3">
						<cat-shopping :urlobj="{url:items[current].url}"></cat-shopping>
					</view>
					<view v-if="current === 3">
						<catDetail></catDetail>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { uniSementedControl } from "../../components/uni-segmented-control/uni-segmented-control.vue"
	import catShopping from "./cat-shopping/cat-shopping-all.vue"
	import catDetail from "./cat-shopping/cat-shopping-detail.vue"
	
	export default {
	    data() {
	        return {
				current:0,
				items:[
					{
						title:"全部",
						url:"/cat_all"
					},
					{
						title:"降价",
						url:"/cat_money"
					},
					{
						title:"常买",
						url:"/cat_buy"
					},
					{
						title:"分类",
						url:"/cat_classify"
					}
				]
	        }
	    },
		components:{
			uniSementedControl,
			catShopping,
			catDetail
		},
	 
	    methods: {
			onClickCat(e){
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
