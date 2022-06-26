<template>
	
	<div class="container">
		<div class="breadcrumbs">
			<div class="breadcrumbs__list">
				<div class="breadcrumbs__item">
					<router-link to="/" class="breadcrumbs__link">
						Назад
					</router-link>
				</div>
			</div>
		</div>
		<div class="product" v-if="product">
			<div class="product__row">
				<div class="product__left">
					<img :src="product.image" alt="" class="">
				</div>
				<div class="product__right">
					{{product.title}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
	import axios from 'axios';
	import router from '../router';
	import {mapMutations} from 'vuex';
	
	export default {
		name: "ProductPage",
		data(){
			return {
				product: null
			}
		},
		methods:{
			...mapMutations([
				'CHANGE_LOADING'
			])
		},
		created() {
			this.CHANGE_LOADING();

			axios.get(`https://61d4952b8df81200178a8d8a.mockapi.io/test/${Number(this.$route.params.id)}`)
				.then(response => this.product = response.data)
				.then(this.CHANGE_LOADING())
				.catch(() => {router.push('/error')})
		}
	}
</script>

<style lang="scss">
	
	.product {
		
		&__row {
			 display: flex;
			 flex-wrap: wrap;
		}
		
		&__left {
			flex: 0 0 30%;
		}
		
		&__right {
			flex: 0 0 70%;
		}
	}
</style>
