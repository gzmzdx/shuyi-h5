<template>
	<c-page ref="page" title="个人信息">
		<view class="headPortraitBox">
			<view class="headPortraitBox_image">
				<u-avatar @tap="showImg" :src="avatar" size="180"></u-avatar>
			</view>
			<text @tap="chooseAvatar" class="c-link">更换头像</text>
		</view>
		<u-cell-group title="账号信息">
			<navigator url="/pages/h5-my/update/h5-my-update">
				<u-cell-item title="昵称" :value="userinfo.nickname"></u-cell-item>
			</navigator>
			<u-cell-item title="用户名" :arrow="false" :value="userinfo.username"></u-cell-item>
			<u-cell-item title="绑定微信号" :arrow="false" :value="userinfo.weChat"></u-cell-item>
			<u-cell-item title="绑定qq号" :arrow="false" :value="userinfo.qq"></u-cell-item>
		</u-cell-group>
		<u-cell-group title="个人信息">
			<navigator url="/pages/h5-my/update/h5-my-update">
				<u-cell-item title="姓名" :value="userinfo.name"></u-cell-item>
			</navigator>
			<navigator url="/pages/h5-my/update/h5-my-update">
				<u-cell-item title="性别" :value="userinfo.sex"></u-cell-item>
			</navigator>
			<u-cell-item title="手机号" :value="userinfo.phone.hide('*',3,-4)"></u-cell-item>
			<navigator url="/pages/h5-my/update/h5-my-update">
				<u-cell-item title="真实地址" :value="userinfo.address"></u-cell-item>
			</navigator>
			<navigator url="/pages/h5-my/update/h5-my-update">
				<u-cell-item title="收货地址" :value="userinfo.delivery_address"></u-cell-item>
			</navigator>
		</u-cell-group>
	</c-page>
</template>

<script>
	export default {
		name: "h5-myinfo",
		data() {
			return {
				avatar: 'https://cdn.uviewui.com/uview/common/logo.png',
				userinfo:{
					username: "scgs762dgw9",
					nickname: "花晨月夕",
					avatar: "https://cdn.uviewui.com/uview/common/logo.png",
					weChat: "wangming1571356682",
					qq: "1571356682",
					name: "王明",
					sex: "男",
					phone: "15870290085",
					address: "贵州省贵阳市贵安新区党武乡贵州民族大学",
					delivery_address: "贵州省贵阳市贵安新区党武乡贵州民族大学"
				}
			}
		},
		methods: {
			chooseAvatar() {
				this.$u.route({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					params: {
						destWidth: 300,
						rectWidth: 200,
						fileType: 'jpg',
					}
				})
			},
			showImg() {
				uni.previewImage({
					urls: [this.avatar]//预览的图片列表
				})
			}
		},
		created() {
			//监听图片剪裁完后触发的事件并且获取到剪裁结果
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				/* uni.uploadFile({
					url: 'http://www.example.com/upload',
					filePath: path,
					name: 'file',
					complete: (res) => {
						console.log(res);
					}
				}); */
			})
		},
	}
</script>

<style lang="scss" scoped>
	.headPortraitBox {
		text-align: center;
		padding: 30px;

		&_image {
			padding-bottom: 10px;
		}
	}
</style>
