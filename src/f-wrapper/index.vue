<style lang="less">
	.f-wrapper-wrapper {
		height: 100%;
		display: flex;
		flex-direction: column;
		.top-wrapper {
			height: 80px;
			flex-shrink: 0;
			box-shadow: 0 0 5px #888;
			padding: 0 30px;
			display: flex;
			align-items: center;
			background: #333;
			color: #fff;
			justify-content: space-between;
			.logo {
				font-size: 22px;
			}
		}
		.content-wrapper {
			flex: 1;
			overflow: auto;
		}
	}
</style>

<template>
	<div class="f-wrapper-wrapper">
		<div class="top-wrapper" v-if="isShowTop">
			<div class="logo">MobileX</div>
			<div class="username">{{$store.state.$common.username}}</div>
		</div>
		<div class="content-wrapper">
			<router-view/>
		</div>
	</div>
</template>

<script>
	// import * as monaco from 'monaco-editor';
	import axios from "axios"
	export default {
		data() {
			return {
				isShowTop: true
			}
		},
		created() {
			this.showTop()
		},
		watch: {
			$route() {
				this.showTop()
			}
		},
		methods: {
			showTop() {
				const hideList = ["editor", "register", "login"]
				if (hideList.indexOf(this.$route.name) == -1) {
					this.isShowTop = true
				} else {
					this.isShowTop = false
				}
			}
		}
	}
</script>

