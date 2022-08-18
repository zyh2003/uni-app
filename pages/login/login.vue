<template>
	<view>
		<view class="login-content">
			<uni-icons class='getBack' type="back"></uni-icons>
		</view>
		<view class="">
			<text>登录</text>
			<view class="">
				<van-button type="danger">危险按钮</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.login-content {
		height: 220rpx;
		background-image: linear-gradient(120deg, #3bfdaf, #70d6f2);
		padding:30rpx ;
		.getBack{
			font-size: 40rpx !important;
			color: #fff !important;
		}
	}
</style>
