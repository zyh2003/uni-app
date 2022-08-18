<template>
	<view class="container">
		<!-- 搜索 -->
		<view class="search-bar py-2 px-1 ">
			<uni-search-bar placeholder="请输入搜索关键词" readonly bgColor="#EEEEEE" cancelButton="none" />
		</view>
		<!-- 轮播图 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<view class="swiper-item">
					<image class="image-container" :src="item.src"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 商品 -->
		<view class="icon py-2">
			<view class="icon-item" v-for="(item,index) in iconList">
				<image :src="item.src" mode=""></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 优惠券 -->
		<scroll-view scroll-x="true" class="scroll-row">
			<view class="coupon">
				<view class="coupon-item" v-for="(item,index) in couponList" :key="item.goods_id">
					<view class="coupon-item-left">
						<h4>￥{{item.price}}</h4>
						<text>适用课程{{item.value.title}}</text>
					</view>
					<view class="coupon-item-right">领取</view>
				</view>
			</view>
		</scroll-view>
		<!-- 拼单 -->
		<scroll-view scroll-x="true" class="scroll-row group-border">
			<text>拼团</text>
			<view class="group">
				<view class="group-item" v-for="(item,index) in groupList" :key="item.group_id">
					<image :src="item.cover"></image>
					<h4>{{item.title}}</h4>
					<view>
						￥{{item.price}}
						<text>￥{{item.t_price}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 列表 -->
		<view class="listDatas">
			<view class="listDatas-top py-3">
				最新列表<text>查看更多</text>
			</view>
			<view class="listDatas-container" v-for="(item,index) in listData" :key="item.id">
				<view class="listDatas-item">
					<view class="listDatas-item-left">
						<image :src="item.cover" mode=""></image>
					</view>
					<view class="listDatas-item-right">
						<h4>{{item.title}}</h4>
						<view>
							￥{{item.price}}
							<text>￥{{item.t_price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部图片 -->
		<view class="image-bottom">
			<image class="img-bottom" :src="imgBottom" mode="aspectFill"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 轮播图数据
				swiperList: [],
				// 商品数据
				iconList: [],
				// 优惠券数据
				couponList: [],
				// 拼单数据
				groupList: [],
				// 列表数据
				listData: [],
				// 底部图片
				imgBottom: ''
			}
		},
		onLoad() {
			this.getIndexList()
			this.getCoupon()
			this.getGroup()
		},
		methods: {
			// 获取主页数据
			getIndexList() {
				this.$request('/index', {
					// headers:{
					// 	appid:'bd9d01ecc75dbbaaefce'
					// }
					// 传参参数名：参数值,如果没有，就不需要传
					// "username": "john",
					// "key": this.searchValue
				}).then(res => {
					// 打印调用成功回调
					console.log(res)
					this.imgBottom = res.data[1].data[0].src
					this.listData = res.data[5].data
					this.swiperList = res.data[1].data;
					this.iconList = res.data[2].data
				})
			},
			// 获取优惠券
			getCoupon() {
				this.$request('/coupon', {

				}).then(res => {
					// console.log(res)
					this.couponList = res.data
				})
			},
			// 获取拼单数据
			getGroup() {
				this.$request('/group').then(res => {
					// console.log(res)
					this.groupList = res.data.rows
				})
			}

		}
	}
</script>

<style>
	.swiper-container {
		height: 310rpx;
		width: 100%;
	}

	.swiper-item {
		width: 720rpx;
		height: 300rpx;
		margin: auto;
		border-radius: 10rpx;
	}

	.image-container {
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
		
	}

	.icon {
		/* width: 720rpx; */
		width: 100%;
		height: 310rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.icon-item {
		height: 131rpx;
		width: 24%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

	}

	.icon image {
		width: 72rpx;
		height: 72rpx;
	}

	.icon text {
		font-size: 24rpx;
		color: #6c757d;
		margin-top: 6rpx;
	}

	.coupon {
		display: flex;
	}

	.coupon-item {
		width: 580rpx;
		height: 116rpx;
		margin-right: 30rpx;
		display: flex;
		color: #fff;
		text-align: center;
	}

	.coupon-item-left {
		background-color: #d39e00;
		width: 460rpx;
		padding: 20rpx 30rpx;
	}

	.coupon-item-left .h4 {
		font-size: 26rpx;
	}

	.coupon-item-left text {
		font-size: 24rpx;
	}

	.coupon-item-right {
		width: 120rpx;
		line-height: 116rpx;
		background-color: #fec107;
		border-left: 6rpx dashed #fff;
		font-size: 32rpx;
	}

	.group {
		display: flex;
		width: 100%;
	}

	.group-border {
		border-top: 14rpx solid #f5f5f3;
		border-bottom: 14rpx solid #f5f5f3;
	}

	.group-item {
		width: 340rpx;
		height: 280rpx;
		margin-left: 20rpx;
		margin-bottom: 20rpx;
	}

	.group-item image {
		width: 340rpx;
		height: 180rpx;
	}

	.group-item h4 {
		font-size: 34rpx;
		/* 设置文本不进行换行 */
		white-space: nowrap;
		/* 让超出部分省略 */
		overflow: hidden;
		/* 超出部分使用省略号 */
		text-overflow: ellipsis;

	}

	.group-item view {
		font-size: 34rpx;
		color: #fc011a;

	}

	.group-item view text {
		font-size: 24rpx;
		color: #a9a5a0;
	}

	.listDatas {
		width: 100%;
		border-bottom: 14rpx solid #f5f5f3;
	}

	.listDatas-top {
		font-weight: 700;
		display: flex;
		justify-content: space-between;
	}

	.listDatas-top text {
		font-weight: normal;
		font-size: 24rpx;
	}

	.listDatas-item {
		width: 700rpx;
		height: 210rpx;
		padding: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.listDatas-item-left {
		width: 300rpx;
		height: 170rpx;
		margin-right: 20rpx;
	}

	.listDatas-item-left image {
		width: 300rpx;
		height: 170rpx;
	}

	.listDatas-item-right {
		height: 390rpx;
	}

	.listDatas-item-right h4 {
		width: 80%;
		/* 设置文本不进行换行 */
		white-space: nowrap;
		/* 让超出部分省略 */
		overflow: hidden;
		/* 超出部分使用省略号 */
		text-overflow: ellipsis;
		margin-bottom: 80rpx;
	}

	.listDatas-item-right view {
		font-size: 34rpx;
		color: #fc011a;
	}

	.listDatas-item-right view text {
		color: #a9a5a0;
		font-size: 24rpx;
	}

	.image-bottom {
		height: 300px;
	}

	.img-bottom {
		width: 100%;
		height: 180px;
	}
</style>
