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
		successMsg:"",
		error: null,
		loading: false
	},
	/* estos mutation son los metodos q ejecutan acciones a los states como tal */
	mutations: {
		setLoadedMembers (state, payload) {
			state.loadedMembers = payload
		},
		setSuccessMsg(state,payload) {
			state.successMsg = payload;
		},
		setUser(state,payload) {
			state.user = payload;
		},
		setMember(state,payload) {
			state.loadedMembers.push(payload);
		}
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
				console.table('Members Loaded', members);
				commit('setLoadedMembers', members);
			})
			.catch(
				(error) => {
					console.log(error)
				})
		},		
		registerUser({commit, getters}, payload){
			console.log('Register user')
			const email = payload.email;
			//TODO revisar como hacer hash de esto primero o usar ssl en el server
			const password = payload.password;
			const data = {
				'email': email,
				'password': password
			}
			axios.post(`${baseUrl}register`,data)
			.then( response =>{
				if(response.data.code == 200){
					console.log("Registerd user",response)
					return alert('Usuario creado correctamente');				
				}
				return alert('Error al crear usuario')
			}).catch(
				(error) => {
					console.log(error)
				})
		},				
		registerMember({commit}, payload){
			console.log('Register member')
			const memberData = payload;
		
			axios.post(`${baseUrl}members/add`,memberData)
			.then( response =>{
				if(response.data.code == 200){					
					const memberData = response.data.data;
					console.log("Registerd member",response.data);
					commit('setMember', memberData);
					commit('setSuccessMsg', "Miembro creado correctamente");		
					return;			
				}
				return alert('Error al crear miembro')
			}).catch(
				(error) => {
					console.log(error)
				})
		}
	},
	getters: {
		getMembers (state) {
			return state.loadedMembers.sort((memberA, memberB) => {
				return memberA.id > memberB.id
			})
		},
		getMember: (state) => (id) => {
			return state.loadedMembers.find(member => member.id == id)
		},
		getUser: (state) => {
			return state.user
		},
		getSuccessMsg: (state) => {
			return state.successMsg
		}
	}
})
