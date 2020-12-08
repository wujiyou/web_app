<template>
	<view class="pics">
		<scroll-view class="left" scroll-y >
			<view
			@click="leftClickHandle(index,item.id)"
			:class="active===index?'active':''" 
			v-for="(item,index) in cates" 
			:key="item.id">
			  {{item.title}}
			</view>
		</scroll-view>
		
		<scroll-view class="right" scroll-y >
			<view class="item" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length === 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates:[],
				active: 0,
				secondData: []
			}
		},
		methods: {
			async getPicsCate () {
				const res = await this.$myRuqest({
					url: '/message'
				})
				// console.log(res)
				this.cates = res.data
				this.leftClickHandle(0,this.cates[0].id)
			},
			async leftClickHandle(index,id){
				console.log(id,index)
				this.active = index
				// 获取右侧的数据
				// url:'/goods?_start='+this.pageindex
				const res = await this.$myRuqest({
					url:'/detail?id='+id
				})
				
				this.secondData = res.data[0].children
				console.log(this.secondData)
			},
			previewImg(current){
				console.log(current)
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},
		onLoad () {
			this.getPicsCate()
		}
	}
</script>

<style lang="less">
  page{
	  height: 100%;
	  .pics{
		  height: 100%;
		  display: flex;
		  .left{
			  width: 200rpx;
			  height: 100%;
			  border-right: 1px solid #eee;
			  view{
				  height: 60px;
				  line-height: 60px;
				  color: #333;
				  text-align: center;
				  font-size: 30rpx;
				  border-top: 1px solid #eee;
				  
			  }
			  .active{
			  	background: #B50E03;
			  	color: #fff;
			  }
		  }
		  .right{
		  	height: 100%;
		  	width: 520rpx;
		  	margin: 10rpx auto;
		  	.item{
		  		image{
		  			width: 520rpx;
		  			height: 520rpx;
		  			border-radius: 5px;
		  		}
		  		text{
		  			font-size: 30rpx;
		  			line-height: 60rpx;
		  		}
		  	}
		  }
	  }
  }
</style>
