
export const BASE_URL = 'http://deeaarbee.tech/lubdub/api';

export var apiMixin = {
    methods: {
        getData(path, data) {
            const url = `${BASE_URL} + path`;
            return axios.post(url, data).then(response => response.body);
        },
        login(){
            this.$http.post(BASE_URL+'/login',this.user).then( response => {
                    this.response = response.body;
                    if(this.response.status === 'success'){
                        this.$router.push("/");
                    }
                    else{
                        alert(this.response.reason);
                    }},
                error => {
                    console.log(error)
                });
        }

    }
};








// import Vue from 'vue'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// //import VueResource from 'vue-resource';
//
// //Vue.use(VueAxios)
// //Vue.use(VueResource);
//
//
// export {getData,login,isLoggedIn,logout};
//
// function getData(path,data) {
//     const url = `${BASE_URL} + path`;
//     return axios.post(url,data).then(response => response.body);
// }
//
// function isLoggedIn(data) {
//     const url = `${BASE_URL}/api/battles/public`;
//     return axios.post(url,data).then(response => response.body);
// }
//
// function login(data) {
//     const url = `${BASE_URL} + '/login`;
//
//     //this.$http.post(url,data).then( response => console.log(response));
//     console.log(url);
//     return axios.post(url,data).then(response => response.body);
//
// }
//
// function logout(data) {
//     const url = `${BASE_URL}+'/logout`;
//     return axios.post(url,data).then(response => response.body);
// }