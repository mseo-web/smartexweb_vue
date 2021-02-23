import Vue from "vue";
import { URL_API } from "@/settings/apiConnect";

export default {
	state: {
		projects: [],
    projectById: {},
    projectsByCategory: [],
	},
	mutations: {
		initProjects(state, projects) {
			state.projects = projects
			// console.log(state.projects);
		},
    initProjectById(state, project) {
			state.projectById = project
      // console.log(state.projectById.name);
		},
    initProjectsByCategory(state, projects) {
			state.projectsByCategory = projects
      console.log(state.projectsByCategory);
		}
	},
	actions: {
		async projectsIndex(context) {
			const response = await Vue.axios.get(`${URL_API}projects`);
			let data = response["data"];
			context.commit("initProjects", data.data);
		},
    projectGetById(context, id) {
      console.log(context.state.projects.length);
      var project = {};
      for (var i = 0; i < context.state.projects.length; i++){
        if (context.state.projects[i].id == id) {
          project = context.state.projects[i]
        }
      }
      context.commit("initProjectById", project);
    },
    projectsGetByCategory(context, category) {
      console.log(context.state.projects.length);
      var projects = [];
      if(category=="all"){
        projects = context.state.projects;
      }else {
        for (var i = 0; i < context.state.projects.length; i++){
          for (var n = 0; n < context.state.projects[i].categories.length; n++){
            if (context.state.projects[i].categories[n].description == category) {
              projects.push(context.state.projects[i])
            }
          }
        }
      }
      context.commit("initProjectsByCategory", projects);
    }
	},
	modules: {
	},
	getters: {
		allProjects(state) {
			return state.projects
		},
    getProjectById(state) {
			return state.projectById
		},
    getProjectsByCategory(state) {
			return state.projectsByCategory
		}
	},
}
