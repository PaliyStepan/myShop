<template>
	<div class="filter">
		<h4 class="filter__title">
			Фильтр
		</h4>
		
		<div class="input">
			<input type="text" class="input__field" placeholder="От">
		</div>
		<div class="input">
			<input type="text" class="input__field" placeholder="До">
		</div>
		
	</div>
</template>

<script>

	export default {
		name: "AppFilter",
	}
</script>

<style lang="scss">
	.filter {
		border: 1px solid #ddd;
		border-radius: 4px;
		padding: 16px;
		
		&__title {
			margin-bottom: 20px;
		}
	}
</style>
