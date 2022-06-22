<template>
	<div class="catalog-item">
		<router-link class="catalog-item__link" :to="{ name:'product', params: {id:product.id}}">
			<img :src="product.images[0]" alt="" class="catalog-item__img">
			<div class="catalog-item__title">
				{{product.name}}
			</div>
		</router-link>
		
		<div class="catalog-item__price">
			
			<div v-if="product.sale" class="catalog-item__label">
				- {{product.sale}} %
			</div>
			
			<div class="catalog-item__price-old" :class="product.sale ? 'catalog-item__price--strike': ''">
				{{product.price | numberFormat}} ₽
			</div>
			<div class="catalog-item__price-sale" v-if="product.sale">
				{{Number(product.price)  }} ₽
			</div>
		</div>
		<div class="catalog-item__button" @click.stop="someCLick">
			В корзину
		</div>
	
		
<!--		<div class="catalog-item__available">-->
<!--			{{product.availability}}-->
<!--		</div>-->
	</div>
</template>

<script>
	
	import numberFormat from "../helpers/numberFormat";
	
	export default {
		name: "CatalogItem",
		props: ['product'],
		filters: {
			numberFormat
		},
		methods: {
			someCLick() {
				console.log(213)
			}
		},
		computed: {
		
		},
		mounted() {
			var money = 8990; // у нас есть деньги;
			var tallage = money / 100 * 15; // обычная формула вычисления процента от числа - 35%
			console.log(tallage); // результат
		}
	}
</script>

<style lang="scss">
	
	.catalog-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 32px;
		transition: box-shadow 0.3s ease;
		height: 100%;
		
		&:hover {
			box-shadow: 0 5px 25px rgba(30,31,33,.12);
		}
		
		
		&__link {
			display: flex;
			flex-direction: column;
			align-items: center;
			color: $dark;
			text-decoration: none;
			
			&:hover {
				text-decoration: underline;
			}
		}
		
		
		&__img {
			height: 200px;
			width: auto;
			max-width: 100%;
			object-fit: cover;
			margin-bottom: 40px;
		}
		
		
		&__title {
			font-size: 20px;
			line-height: 26px;
			margin-bottom: 20px;
		}
		
		&__price {
			position: relative;
			width: 100%;
			font-weight: 700;
			margin-top: auto;
			margin-bottom: 20px;
		}
		
		&__button {
			align-self: flex-start;
			display: inline-flex;
			align-items: center;
			height: 50px;
			background-color: $green;
			padding-left: 20px;
			padding-right: 20px;
			-webkit-border-radius: 4px;
			-moz-border-radius: 4px;
			border-radius: 4px;
			color: #fff;
			transition: background-color 0.3s ease;
			cursor: pointer;
			
			&:hover {
				background-color: darken($green, 10%);
			}
		}
		
		&__label {
			position: absolute;
			left: -32px;
			top: -20px;
			display: inline-flex;
			align-items: center;
			background-color: red;
			transform: rotate(-10deg);
			color: #fff;
			padding: 0 6px;
			font-size: 11px;
			border-radius: 4px;
			height: 18px;
		}
		
		&__price--strike {
			text-decoration: line-through;
			color: #ccc;
			font-weight: 400;
		}
		
	}
</style>
