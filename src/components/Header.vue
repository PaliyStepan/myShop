<template>
	<div class="header">
		<div class="container">
			<div class="header__inner">
				<router-link to="/" class="header__logo">
					<svg class="icon header__logo-img">
						<use xlink:href="#icon-logo"></use>
					</svg>
				</router-link>
				<div class="header__cart">
					<svg class="icon header__cart-img">
						<use xlink:href="#icon-cart"></use>
					</svg>
					<div class="header__cart-counter">
						2
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header"
	}
</script>

<style lang="scss">
	.header {
		padding-top: 20px;
		padding-bottom: 20px;
		box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
		
		&__inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		
		
		&__logo:hover &__logo-img {
			fill: $green;
		}
		
		&__logo-img {
			width: 40px;
			height: 40px;
			
			
		}
		
		&__cart {
			position: relative;
		}
		
		&__cart-img {
			width: 40px;
			height: 40px;
		}
		
		&__cart-counter {
			position: absolute;
			left: 100%;
			top: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 10px;
			width: 20px;
			height: 20px;
			border-radius: 50%;
			transform: translateX(-10px);
			border: 1px solid $dark;
			background-color: #fff;
		}
		
		
		&__cart:hover &__cart-img {
			fill: $green;
		}
		
		&__cart:hover &__cart-counter {
		}
		
	}
</style>
