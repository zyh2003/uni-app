<template>
	<view class="">
		<view class="my-container rounded-bottom">
			<view class="register mb-3">
				<view class="headPortrait"></view>
				<view class="my-login pl-3">
					<text class="mb-2">立即登录</text>
					<text>登录解锁更多功能</text>
				</view>
			</view>
			<br>
			<view class="my-list py-3 ">
				<view class="">
					<uni-icons class='icons' custom-prefix="iconfont" type="icon-quanbudingdan" size="30"></uni-icons>
					<text class="mt-1">订单</text>
				</view>
				<view class="">
					<uni-icons class='icons' custom-prefix="iconfont" type="icon-xiaoxi2" size="30"></uni-icons>
					<text class="mt-1">消息</text>
				</view>
				<view class="">
					<uni-icons class='icons' custom-prefix="iconfont" type="icon-shoucang2" size="30"></uni-icons>
					<text class="mt-1">收藏</text>
				</view>
				<view class="">
					<uni-icons class='icons' custom-prefix="iconfont" type="icon-diannao1" size="30"></uni-icons>
					<text class="mt-1">在学</text>
				</view>
			</view>
		</view>
		<view class="set px-3">
			<view class="">
				<uni-icons class="icon-s" custom-prefix="iconfont" type="icon-wodeyouhuiquan" size="30"></uni-icons>
				<text class="txt">我的优惠券</text>
				<text class="set-right">></text>
			</view>
			<view class="">
				<uni-icons class="icon-s" custom-prefix="iconfont" type="icon-wenhao" size="30"></uni-icons>
				<text class="txt">常见问题</text>
				<text class="set-right">></text>
			</view>
			<view class="">
				<uni-icons class="icon-s" custom-prefix="iconfont" type="icon-yingyongAPP_o" size="30"></uni-icons>
				<text class="txt">设置</text>
				<text class="set-right">></text>
			</view>
		</view>
	</view>


</template>

<script>
</script>

<style lang="scss">
	.my-container {
		padding: 30rpx 30rpx 100rpx 30rpx;
		background-color: #5ccc84;
		height: 140rpx;

		.register {
			display: flex;
			color: #fff;

			.headPortrait {
				width: 120rpx;
				height: 120rpx;
				background-color: #fff;
				border-radius: 50%;
			}

			.my-login {
				text {
					&:nth-of-type(1) {
						font-size: 34rpx;
						display: block;
					}

					&:nth-of-type(2) {
						font-size: 24rpx;
					}
				}
			}

		}

		.my-list {
			width: 100%;
			margin-top: -30rpx;
			border-radius: 6rpx;
			border: 2rpx solid #efefef;
			box-shadow: 1rpx 1rpx 15rpx #ddd;
			background-color: #fff;
			display: flex;
			justify-content: space-around;

			view {
				display: flex;
				flex-direction: column;

				.icons {
					font-size: 40rpx !important;
					color: #fdc107 !important;
				}

				text {
					color: #6c757d;
					font-size: 24rpx;
				}
			}

		}
	}

	.set {
		margin-top: 100rpx;

		view {
			    padding: 24rpx 0rpx;
			&:nth-of-type(2) {
				border-top: 2rpx solid #ddd;
				border-bottom: 2rpx solid #ddd;
			}

			.icon-s {
				font-size: 40rpx !important;
				color: #1576e1 !important;
			}

			.txt {
				color: #3b4144;
				font-size: 28rpx;
				margin-left: 10rpx;

			}

			.set-right {
				color: rgb(187, 187, 187);
				font-size: 32rpx;
				float: right;
			}

		}
	}
</style>
