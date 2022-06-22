<template>
	<div id="app">
		<Preloader v-if="LOADING"/>
		<Header/>
		<main class="main">
		  <router-view/>
		</main>
	</div>
</template>

<script>
	import Header from "./components/Header";
	import Preloader from "./components/Preloader";
	import {mapGetters} from "vuex";
	
	export default {
		components: {
			Header,
			Preloader
		},
		computed: {
			...mapGetters([
				'LOADING'
			])
		}
	}
</script>

<style lang="scss">

</style>
