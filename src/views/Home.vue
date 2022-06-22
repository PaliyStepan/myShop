<template>
	<div class="container">
		<div class="main-grid">
			<div class="main-grid__left">
				<AppFilter/>
			</div>
			<div class="main-grid__right">
				<div class="catalog">
					<Preloader  v-if="PRODUCTS.length === 0"/>
					<div class="catalog__row" v-else>
						<div class="catalog__col"
						     v-for="product in PRODUCTS"
						     :key="product.id"
						>
							<CatalogItem :product="product"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import AppFilter from "../components/AppFilter";
	import CatalogItem from "../components/CatalogItem";
	import Preloader from "../components/Preloader";

	import {mapActions, mapGetters, mapMutations} from 'vuex'
	export default {
		name: 'Home',
		components: {
			AppFilter,
			CatalogItem,
			Preloader
		},
		methods: {
			...mapActions([
				'GET_PRODUCTS_FORM_API'
			]),
			...mapMutations([
				'CHANGE_LOADING'
			])
		},
		computed: {
			...mapGetters([
				'PRODUCTS'
			])
		},
		created() {
			this.GET_PRODUCTS_FORM_API();
		}
	}
</script>

<style lang="scss">
	
	.main-grid {
		display: flex;
		flex-wrap: wrap;
		
		&__left {
			flex: 0 0 20%;
		}
		
		&__right {
			flex: 0 0 80%;
		}
	}
	
	.catalog {
		
		&__row {
			display: flex;
			flex-wrap: wrap;
			margin-left: -15px;
			margin-right: -15px;
			margin-bottom: -30px;
		}
		
		&__col {
			flex: 0 0 33.333%;
			padding-left: 15px;
			padding-right: 15px;
			margin-bottom: 30px;
		}
	}
	
</style>
