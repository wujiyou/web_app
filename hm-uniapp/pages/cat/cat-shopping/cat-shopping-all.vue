<template>
	<view class="cart">

		<view class="goods-list">
			<view class="btn-clear">
				<view class="">
					共0件宝贝
				</view>
				<view class="" @click="chooseSwitchover">
					{{adminShow? '完成': '编辑'}}
				</view>
			</view>
			<view class="yh-cart-row">
				<!-- 商品列表 S -->
				<block v-for="(item, index) in cartList" :key="index">
					<view class="carrier">
						<view class="shop">
							<view class="left">
								<image v-if="item.isShop" class="select" src="../../../static/icon/cart-active.png" mode="widthFix" @click="chooseShopSelect(index)"></image>
								<image v-if="!item.isShop" class="select" src="../../../static/icon/cart.png" mode="widthFix" @click="chooseShopSelect(index)"></image>
								<view class="shop-name">
									<image class="icon-shop" src="../../../static/icon/home.png" mode="widthFix"></image>
									<view class="name">
										{{item.shop_name}}
									</view>
								</view>
							</view>
							<image class="right" src="../../../static/icon/member.png" mode="widthFix"></image>
						</view>
						<view class="goods" v-for="(gItem, gIndex) in item.goods" :key="gIndex" v-if="gItem.goods_sold_out == 1">
							<view class="left">
								<image class="select" :src="gItem.selected ? selectPitchOn:selectDefault" mode="widthFix" @click="chooseGoodsSelect(index, gIndex)"></image>
							</view>
							<view class="right">

								<image class="goods-image" src="../../../static/images/mg.png"></image>
								<view class="goods-info">
									<!-- H5展示代码 -->
									<!-- #ifdef H5 -->
									<view class="goods-name">
										{{gItem.goods_name}}
									</view>
									<!-- #endif -->
                                     
									 <!-- 微信小程序展示代码 -->
									<!-- #ifdef MP-WEIXIN -->
									<view class="goods-name-weixin">
										{{gItem.goods_name}}
									</view>
									<!-- #endif -->
									<view class="specification" @click="specificationSelection(index, gIndex)">
										<!-- H5页面展示代码 -->
										<!-- #ifdef H5 -->
										<view class="specification-name">
											{{gItem.goods_specification != ''? gItem.goods_specification: ''}}
										</view>
										<!-- #endif -->
                                        <!-- 微信小程序展示代码 -->
										<!-- #ifdef MP-WEIXIN -->
										<view class="specification-name-weixin">
											{{gItem.goods_specification != ''? gItem.goods_specification: ''}}
										</view>
										<!-- #endif -->

										<block v-if="gItem.goods_specification != ''">
											<image class="specification-image" v-if="isSelection" src="../../../static/icon/member-active.png" mode="widthFix"></image>
											<image class="specification-image" v-if="!isSelection" src="../../../static/icon/member.png" mode="widthFix"></image>
										</block>
									</view>
									<view class="goods-price">
										<view class="price">
											<block v-if="gItem.goods_price != ''">
												<text class="price-symbol">¥</text>
												<!-- #ifdef H5 -->
												<text class="price-marked">{{gItem.goods_price}}</text>
												<!-- #endif -->
												<!-- #ifdef MP-WEIXIN -->
												<text class="price-marked-weixin">{{gItem.goods_price}}</text>
												<!-- #endif -->
											</block>
										</view>
										<view class="amount">
											<view class="num-minus" @click="chooseMinus(index, gIndex)">
												-
											</view>
											<view class="input-price">
												{{gItem.goods_num}}
											</view>
											<view class="num-add" @click="chooseAddNum(index, gIndex)">
												+
											</view>
										</view>
									</view>
								</view>
							</view>

						</view>
					</view>
				</block>
				<!-- 商品列表 E -->
			</view>

			<view class="yh-cart-row">
				<!-- 失效商品列表 S -->
				<!-- 待定代码 -->
				<view class="carrier">
					<view class="carrier-title" v-if="goodsLoseEfficacy.length != 0">
						<text class="goods-lose-efficacy-num">
							失效宝贝1件
						</text>
						<text class="goods-lose-efficacy-operation" @click="chooseLoseEfficacyGoodsEmpty">
							清空失效宝贝
						</text>
					</view>
					<view class="goods" v-for="(gItem, gIndex) in goodsLoseEfficacy" :key="gIndex" v-if="gItem.goods_sold_out == 0">
						<view class="left">
							<!-- <image class="select" :src="selectDefault" mode="widthFix"></image> -->
						</view>
						<view class="right">
							<image class="goods-image" :src="gItem.goods_cover || errirImage"></image>
							<view class="goods-info-s">
								<text class="goods-names">
									{{gItem.goods_name}}
								</text>
								<view class="specification" @click="specificationSelection">

								</view>
								<view class="goods-price">
									<view class="goods-cause">
										{{gItem.cause}}
									</view>
									<view class="goods-similarity">
										找相似
									</view>
								</view>
							</view>
						</view>
						<image class="goods-lose-efficacy-identifying" :src="loseEfficacyImage" mode="widthFix"></image>
					</view>
				</view>
				<!-- 失效商品列表 E -->

			</view>

		</view>

		<!-- 购物车结算 S -->
		<!-- #ifdef H5 -->
		<view class="goods-settle-accounts">
			<view class="left">
				<!-- v-if="isCheckAll"  v-if="!isCheckAll" -->
				<image v-if="isCheckAll" class="select" src="../../../static/icon/member-active.png" mode="widthFix" @click="chooseCheckAll"></image>
				<image v-if="!isCheckAll" class="select" src="../../../static/icon/member.png" mode="widthFix" @click="chooseCheckAll"></image>
				全选
			</view>
			<view class="right">
				<block v-if="!adminShow">
					<view class="goods-price-total">
						<text>合计: </text>
						<text>¥ {{total}}</text>
					</view>
					<view class="goods-count-btn">
						<text style="color: black;" @click="jieMoney">结算</text>
						<!-- <button type="default">结算</button> -->
					</view>
				</block>
				<block v-if="adminShow">
					<view class="goods-enshrine" @click="chooseGoodsEnshrine">
						移至收藏夹
					</view>
					<view class="goods-delete" @click="chooseGoodsDelete">
						删除
					</view>
				</block>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="goods-settle-accounts-weixin">
			<view class="left">
				<!-- v-if="isCheckAll"  v-if="!isCheckAll" -->
				<image v-if="isCheckAll" class="select" src="../../../static/icon/member-active.png" mode="widthFix" @click="chooseCheckAll"></image>
				<image v-if="!isCheckAll" class="select" src="../../../static/icon/member.png" mode="widthFix" @click="chooseCheckAll"></image>
				全选
			</view>
			<view class="right">
				<block v-if="!adminShow">
					<view class="goods-price-total-weixn">
						<text>合计: </text>
						<text>¥ {{total}}</text>
					</view>
					<view class="goods-count-btn">
						<text style="color: black;" @click="jieMoney">结算</text>
						<!-- <button type="default">结算</button> -->
					</view>
				</block>
				<block v-if="adminShow">
					<view class="goods-enshrine" @click="chooseGoodsEnshrine">
						移至收藏夹
					</view>
					<view class="goods-delete" @click="chooseGoodsDelete">
						删除
					</view>
				</block>
			</view>
		</view>
		<!-- #endif -->
		<!-- 购物车结算 E -->

	</view>
</template>

<script>
	export default {
		props: {
			urlobj: Object
		},
		watch: {
			urlobj() {
				// this.videowp=[]
				// this.getList()
				console.log("参数发生了变化")
				console.log(this.urlobj)
			}
		},
		data() {
			return {
				cartList: [{
					shop_name: "惠多多自营",
					isShop: false,
					goods: [ // 购物车数据列表
						{
							goods_name: "小乳酸菌牛奶酸奶饮料整箱饮品早餐酸乳益生菌",
							goods_cover: "",
							goods_price: "520.00",
							goods_num: 1,
							goods_specification: "大小;尺寸",
							goods_sold_out: 1,
							cause: "库存不足",
							selected: false,
						},
						{
							goods_name: "小乳酸菌牛奶酸奶饮料整箱饮品早餐酸乳益生菌",
							goods_cover: "",
							goods_price: "520.00",
							goods_num: 1,
							goods_specification: "大小;尺寸",
							goods_sold_out: 1,
							cause: "库存不足",
							selected: false,
							specification: []
						}
					]
				}, {
					shop_name: "惠多多自营",
					isShop: false,
					goods: [ // 购物车数据列表
						{
							goods_name: "小乳酸菌牛奶酸奶饮料整箱饮品早餐酸乳益生菌",
							goods_cover: "",
							goods_price: "520.00",
							goods_num: 1,
							goods_specification: "大小;尺寸",
							goods_sold_out: 1,
							cause: "库存不足",
							selected: false,
						},
						{
							goods_name: "小乳酸菌牛奶酸奶饮料整箱饮品早餐酸乳益生菌",
							goods_cover: "",
							goods_price: "511.00",
							goods_num: 1,
							goods_specification: "大小;尺寸",
							goods_sold_out: 1,
							cause: "库存不足",
							selected: false,
							specification: []
						}
					]
				}],
				isCheckAll: false, // 购物车全选/反选默认false
				adminShow: false, // 编辑选择默认false
				total: 0, // 选中商品总价
				isStop: false, // 店铺下所有商品全选/取消全选默认false
				isDstop: false,
				isSelection: false,
				goodsLoseEfficacy: [],
				// require('@/static/xmkysc.png')
				selectDefault: require('@/static/icon/member.png'), // 默认图标 
				selectPitchOn: require('@/static/icon/member-active.png'), // 选中图标
			}
		},
		methods: {
			// 结算
			jieMoney() {
				uni.showModal({
					content: "是否" + this.total + "元付款?",
					cancelText: "我再想想",
					cancelColor: "#999999",
					confirmText: "结算",
					confirmColor: "#fa436a",
					success(res) {
						if (res.confirm) {
							console.log('有钱没钱回家过年')
							console.log(this.total)
						} else if (res.cancel) {
							console.log("我再想想")
						}
					},
				})
				// console.log('有钱没钱回家过年')
				// console.log(this.total)
			},
			// 选择规格
			specificationSelection(index, gindex) {
				let cartList = this.cartList;
				console.log(cartList[index].goods[gindex])
				this.isSelection = !this.isSelection
			},
			// 选中商品删除
			chooseGoodsDelete() {
				uni.showModal({
					content: "确认将这" + 1 + "个宝贝删除?",
					cancelText: "我再想想",
					cancelColor: "#999999",
					confirmText: "删除",
					confirmColor: "#fa436a",
					success(res) {
						if (res.confirm) {
							console.log("删除")
						} else if (res.cancel) {
							console.log("我再想想")
						}
					},
				})
			},
			// 选中商品移至收藏夹
			chooseGoodsEnshrine() {
				console.log("收藏")
			},
			// 编辑按钮切换
			chooseSwitchover() {
				this.adminShow = !this.adminShow
			},
			// 增加数量
			chooseAddNum(index, gindex) {
				let cartList = this.cartList; // 购物车商品列表
				let goods_num = cartList[index].goods[gindex].goods_num; // 获取当前数量
				goods_num = goods_num + 1; // 每点击一次加1
				cartList[index].goods[gindex].goods_num = goods_num; // 数量
				this.totalPrice()
			},
			// 减少数量
			chooseMinus(index, gindex) {
				let cartList = this.cartList; // 购物车商品列表
				let goods_num = cartList[index].goods[gindex].goods_num; // 获取当前数量
				if (goods_num <= 1) {
					return
				}
				goods_num = goods_num - 1; // 每点击一次加1
				cartList[index].goods[gindex].goods_num = goods_num;
				this.totalPrice()
			},
			// 计算总价
			totalPrice() {
				let cartList = this.cartList;
				let total = 0;
				let goods_num = 0;
				for (let i = 0; i < cartList.length; i++) {
					for (let j = 0; j < cartList[i].goods.length; j++) {
						if (cartList[i].goods[j].selected) {
							total += cartList[i].goods[j].goods_price * cartList[i].goods[j].goods_num;
							goods_num += cartList[i].goods[j].goods_num;
						}
					}
				}
				this.total = total;
			},
			chooseShopSelect(index) {
				let cartList = this.cartList;
				cartList[index].isShop = !cartList[index].isShop;
				for (let i = 0; i < cartList[index].goods.length; i++) {
					cartList[index].goods[i].selected = cartList[index].isShop
				}
				this.checkAllCondition()
				this.totalPrice()
			},
			// 商品选中反选
			chooseGoodsSelect(index, gindex) {
				console.log(index)
				console.log(gindex)
				console.log('+++++++++++++')
				let cartList = this.cartList;
				let count = 0;
				let goodsList = cartList[index].goods; // 当前店铺下商品列表
				let goods = goodsList[gindex]; // 当前商品数组

				if (goods.selected) {
					cartList[index].goods[gindex].selected = false; // 改变当前商品状态
					cartList[index].isShop = false; // 改变店铺状态
				} else {
					cartList[index].goods[gindex].selected = true;
					// 当店铺选中商品数量与店铺总数相等时, 改变店铺状态
					let shopGoodsNum = cartList[index].goods.length; // 店铺总个数
					let goodsArray = cartList[index].goods;
					let selectedNum = 0;
					for (var i in goodsArray) {
						if (goodsArray[i].selected) {
							selectedNum++
						}
					}
					if (selectedNum == goodsArray.length) {
						cartList[index].isShop = true
					} else {
						cartList[index].isShop = false
					}
				}
				this.checkAllCondition()
				this.totalPrice()
			},
			// 全选条件 店铺全选  反之 
			checkAllCondition() {
				let isCheckAll = this.isCheckAll;
				let cartList = this.cartList; // 购物车列表数据
				let isCheckAllNum = 0;
				for (let i = 0; i < cartList.length; i++) {
					if (cartList[i].isShop == true) {
						isCheckAllNum++
					}
				}
				if (isCheckAllNum == cartList.length) {
					this.isCheckAll = true;
				} else {
					this.isCheckAll = false;
				}
				this.totalPrice()
			},
			// 点击全选
			chooseCheckAll() {
				let cartList = this.cartList;
				let isCheckAll = this.isCheckAll;
				if (isCheckAll) {
					this.isCheckAll = false
				} else {
					this.isCheckAll = true
				}
				for (let i = 0; i < cartList.length; i++) {
					cartList[i].isShop = this.isCheckAll;
					for (let j = 0; j < cartList[i].goods.length; j++) {
						cartList[i].goods[j].selected = this.isCheckAll
					}
				}
				this.totalPrice()
			}
		}
	}
</script>

<style lang="less">
	.rightText {
		font-size: 12rpx;
		padding-top: 3px;
	}

	.empty {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		padding-bottom: 50px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		background-color: #FFFFFFF;

		.icongouwuche {
			width: 190rpx;
		}

		.empty-tips {
			display: flex;
			font-size: 14rpx;
			color: black;

			.navigator {
				margin-left: 16rpx;
			}
		}
	}

	.goods-list {
		.btn-clear {
			display: flex;
			justify-content: space-between;
			margin: 0 30rpx 20rpx;
		}

		.yh-cart-row:last-child {
			margin: 0 30rpx 120rpx;
		}

		.yh-cart-row {
			background-color: #FFFFFF;
			border-radius: 30rpx;
			margin: 0 30rpx 30rpx;

			.carrier:last-child {
				border-bottom: none;
			}

			.carrier {
				border-bottom: 1rpx dashed #EEEEEE;

				.shop {
					display: flex;
					align-items: center;
					padding: 30rpx 30rpx;

					.left {
						display: flex;
						align-items: center;
						// width: 50%  !important;

						.select {
							width: 42rpx;
							// height: auto;
							margin-right: 30rpx;
						}

						.shop-name {
							display: flex;
							align-items: center;

							.icon-shop {
								width: 42rpx;
								margin-right: 30rpx;
							}

							.name {
								font-size: 30rpx !important;
								font-weight: 600;
							}
						}
					}

					.right {
						width: 30rpx;
						margin-left: 10rpx;
					}
				}

				.goods {
					display: flex;
					align-items: center;
					padding: 0 30rpx 40rpx;
					position: relative;

					.goods-lose-efficacy-identifying {
						width: 100rpx;
						height: 100rpx;
						position: absolute;
						z-index: 99;
						right: 0rpx;
						margin-top: -75rpx;
					}

					.left {
						.select {
							width: 40rpx;
							margin-right: 30rpx;
						}
					}

					.right {
						display: flex;
						z-index: 2;

						.goods-image {
							width: 220rpx;
							height: 220rpx;
							margin-right: 20rpx;
						}

						.goods-info {
							width: 340rpx;
							padding-top: 10rpx;

							// H5代码显示
							.goods-name {
								font-size: 12rpx;
							}

							// 微信代码显示
							.goods-name-weixin {
								font-size: 26rpx;
							}

							.specification {
								display: flex;
								align-items: center;
								margin-top: 10rpx;

								// H5代码
								.specification-name {
									font-size: 12rpx;
									color: 12rpx;
								}

								// 微信代码显示
								.specification-name-weixin {
									font-size: 24rpx;
									color: 12rpx;
								}

								.specification-image {
									width: 25upx;
									margin-left: 30rpx;
								}
							}

							.goods-price {
								display: flex;
								justify-content: space-between;
								margin-top: 20rpx;

								.price {
									color: red;

									.price-symbol {
										font-size: 12rpx;
									}
                                     // H5页面展示
									.price-marked {
										font-size: 12rpx;
									}
									// 微信小程序展示
									.price-marked-weixin{
										font-size: 24rpx;
									}
								}

								.amount {
									display: flex;
									align-items: center;
									height: 40rpx;
									border: 1rpx solid gray;

									.num-minus,
									.num-add {
										width: 40rpx;
										text-align: center;
									}

									.num-minus {
										height: 40rpx;
										border-right: 1rpx solid gray;
									}

									.num-add {
										height: 40rpx;
										border-left: 1rpx solid gray;
									}

									.input-price {
										width: 60rpx;
										text-align: center;
									}
								}
							}
						}

						.goods-info-s {
							// 失效商品样式
							width: 400rpx;
							padding-top: 10rpx;

							.goods-names {
								font-size: 12rpx;
								color: gray;
							}

							.specification {
								display: flex;
								align-items: center;
								margin-top: 10rpx;

								.specification-name {
									font-size: 12rpx;
									color: gray;
								}

								.specification-image {
									width: 25rpx;
									margin-left: 30rpx;
								}
							}

							.goods-price {
								display: flex;
								justify-content: space-between;
								margin-top: 20rpx;
								align-items: center;

								.goods-cause {
									// 商品失效原因
									font-size: 12rpx;
									margin-top: 45rpx;
								}

								.goods-similarity {
									font-size: 12rpx;
									color: black;
									padding: 5rpx 10rpx;
									border: 1rpx solid gray;
									margin-top: 45upx;
									border-radius: 20upx;
								}
							}
						}
					}
				}

				.carrier-title {
					display: flex;
					justify-content: space-between;
					padding: 20rpx 30rpx 30rpx;

					.goods-lose-efficacy-num {
						font-size: 12rpx;
						font-weight: 600;
					}

					.goods-lose-efficacy-operation {
						font-size: 12rpx;
						padding-top: 4rpx;
						color: black;
					}
				}
			}
		}
	}

	// 微信底部代码开始
	.goods-settle-accounts-weixin {
		height: 96rpx;
		position: fixed;
		bottom: 0rpx;
		z-index: 99;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		border-top: 1rpx solid gray;

		.left {
			display: flex;
			align-items: center;

			.select {
				width: 40rpx;
				margin-right: 30rpx;
			}
		}

		.right {
			display: flex;
			align-items: center;
             // H5代码显示
			.goods-price-total {
				font-size: 16rpx;
			}

			.goods-price-total text:nth-child(2) {
				font-size: 12rpx;
				padding-top: 4rpx;
				margin-left: 8rpx;
				color: red;
				font-weight: bold;
			}
			
			// 微信小程序代码显示
			.goods-price-total-weixn{
				font-size: 24rpx;
			}
			
			.goods-price-total-weixn text:nth-child(2) {
				font-size: 20rpx;
				padding-top: 4rpx;
				margin-left: 8rpx;
				color: red;
				font-weight: bold;
			}

			.goods-count-btn {
				font-size: 32rpx;
				width: 180rpx;
				background-color: white;
				color: white;
				border-radius: 30rpx;
				height: 66rpx;
				text-align: center;
				line-height: 66rpx;
				margin-left: 20rpx;
			}

			.goods-enshrine {
				color: gray;
				padding: 5rpx 20rpx;
				border: 1rpx solid gray;
				border-radius: 30rpx;
				margin-right: 30rpx;
			}

			.goods-delete {
				color: orange;
				padding: 5rpx 20rpx;
				border: 1rpx solid orange;
				border-radius: 30rpx;
			}
		}
	}

	// 微信底部代码结束

	.goods-settle-accounts {
		height: 96rpx;
		position: fixed;
		bottom: 120rpx;
		z-index: 99;
		width: 100%;
		background-color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		border-top: 1rpx solid gray;

		.left {
			display: flex;
			align-items: center;

			.select {
				width: 40rpx;
				margin-right: 30rpx;
			}
		}

		.right {
			display: flex;
			align-items: center;

			.goods-price-total {
				font-size: 16rpx;
			}

			.goods-price-total text:nth-child(2) {
				font-size: 12rpx;
				padding-top: 4rpx;
				margin-left: 8rpx;
				color: red;
				font-weight: bold;
			}

			.goods-count-btn {
				font-size: 32rpx;
				width: 180rpx;
				background-color: white;
				color: white;
				border-radius: 30rpx;
				height: 66rpx;
				text-align: center;
				line-height: 66rpx;
				margin-left: 20rpx;
			}

			.goods-enshrine {
				color: gray;
				padding: 5rpx 20rpx;
				border: 1rpx solid gray;
				border-radius: 30rpx;
				margin-right: 30rpx;
			}

			.goods-delete {
				color: orange;
				padding: 5rpx 20rpx;
				border: 1rpx solid orange;
				border-radius: 30rpx;
			}
		}
	}
</style>
