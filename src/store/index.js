import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		products: [],
		isLoading: false
	},
	mutations: {
		SET_PRODUCTS_TO_STATE(state, products) {
			state.products = products
		},
		CHANGE_LOADING(state){
			state.isLoading = !state.isLoading;
		},
	},
	actions: {
		GET_PRODUCTS_FORM_API({commit}){
			axios.get('https://61d4952b8df81200178a8d8a.mockapi.io/test')
				.then(response => {
					commit('SET_PRODUCTS_TO_STATE', response.data)
				})
		}
	},
	getters: {
		PRODUCTS(state){
			return state.products
		},
		LOADING(state) {
			return state.isLoading
		}
	}
})
