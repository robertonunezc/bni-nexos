import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
// use dev env variable to swicth between localhost and production
const baseUrl = "http://localhost:3000/";
export default new Vuex.Store({
	state: {
		loadedMembers: [],	
		user: null,
		error: null,
		loading: false
	},
	/* estos mutation son los metodos q ejecutan acciones a los states como tal */
	mutations: {
		setLoadedMembers (state, payload) {
			state.loadedMembers = payload
		},
	},
	/* estos son los metodos q se llaman desde otros lugares para interactuar con los estados
	* estos metodos internamente para manipular la informacion llaman a los mutation co el commit */
	actions: {
		loadMembers ({commit}) {
			console.log('Loading members')
			axios.get(`${baseUrl}members`)
			.then((response) => {
				const members = [];
				const data = response.data.data;
				data.forEach((member, index) =>{
					members.push({
						id: member['id'],
						owner: member.owner,
						company: member.company,
						digitalCard: member.digitalCard,
						phone: member.phone,						
						email: member.email
					})
				});				
				console.table('Members Loaded', members)
				commit('setLoadedMembers', members)
			})
			.catch(
				(error) => {
					console.log(error)
				})
		},
	},
	getters: {
		getMembers (state) {
			return state.loadedMembers.sort((memberA, memberB) => {
				return memberA.id > memberB.id
			})
		},
		getMember: (state) => (id) => {
			return state.loadedMembers.find(member => member.id == id)
		}		
	}
})
