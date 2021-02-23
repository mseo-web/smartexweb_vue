import Vue from "vue";
import { URL_API } from "@/settings/apiConnect";

export default {
	state: {
		categories: [],
	},
	mutations: {
		initСategories(state, categories) {
			state.categories = categories
			console.log(state.categories);
		},
	},
	actions: {
		async сategoriesIndex(context) {
			const response = await Vue.axios.get(`${URL_API}categories`);
			let data = response["data"];
			context.commit("initСategories", data.data);
		},
	},
	modules: {
	},
	getters: {
		allСategories(state) {
			return state.categories
		},
	},
}
