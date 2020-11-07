<template>
	<c-page ref="page" title="修改信息" type="content">
		<u-form :model="form" ref="uForm" label-width="150">
			<u-form-item label="昵称">
				<u-input v-model="form.nickname" defaultValue="123" :placeholder="$store.state.userinfo.nickname" :clearable="false" />
			</u-form-item>
			<u-form-item label="真实姓名">
				<u-input v-model="form.name" :placeholder="$store.state.userinfo.name" :clearable="false" />
			</u-form-item>
			<u-form-item label="性别">
				<u-radio-group v-model="form.sex" prop="sex">
					<u-radio v-for="(item, index) in sexList" :key="index" :name="item.name" :disabled="item.disabled">
						{{ item.name }}
					</u-radio>
				</u-radio-group>
			</u-form-item>
			<u-form-item label="真实地址">
				<u-input v-model="form.address" :placeholder="$store.state.userinfo.address" :clearable="false" />
			</u-form-item>
			<u-form-item label="收获地址">
				<u-input v-model="form.delivery_address" :placeholder="$store.state.userinfo.delivery_address" :clearable="false" />
			</u-form-item>
			<u-button :loading="submitState.loading" @click="submit" type="primary">{{submitState.text}}</u-button>
			<u-gap height="20"></u-gap>
			<u-button @click="back" app-parameter="false">取消</u-button>
		</u-form>
	</c-page>
</template>

<script>
	export default {
		data() {
			return {
				form: {
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
				},
				sexList: [{
						name: '男',
						disabled: false
					},
					{
						name: '女',
						disabled: false
					},
					{
						name: '保密',
						disabled: false
					}
				],
				submitState:{
					loading: false,//是否显示loading，
					text: "提交",//按钮文字
				}
			}
		},
		methods: {
			submit() {
				this.submitState.loading = true;
				this.submitState.text = "正在提交";
				
				setTimeout(()=>{
					this.submitState.loading = false;
					this.submitState.text = "提交";
					this.$refs.page.messageOpen({title:"提交成功",type:"success"});
				},2000)
			},
			back(){
				uni.redirectTo({
				    url: '/pages/h5-my/h5-myinfo'
				});
			}
		}
	}
</script>

<style>

</style>
