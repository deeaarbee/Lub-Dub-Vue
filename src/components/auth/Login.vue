<template>
    <div>
        <h1>Login Page</h1>
        <form class="navbar-form navbar-left" >
            <div class="form-group">
                <input type="text" class="form-control" placeholder="username" v-model="user.username">
                <input type="text" class="form-control" placeholder="password" v-model="user.password">
            </div>
            <input class="btn btn-default" @click="login()" type="button" value="Submit"/>
        </form>
    </div>
</template>

<script>
    import {apiMixin} from "../../helperScripts/api";
    import {BASE_URL} from "../../main";
    export default {
        name: "login",
        mixins:[apiMixin],
        data () {
            return{
                user:{
                    username: '',
                    password: ''
                },
                response:{}
            };
        },
      created(){
          this.$store.state.token = '';
      },
        methods:{
          login(){
            this.$http.post( BASE_URL + "login",this.user).then(response =>{
              console.log(response.body);
              if(response.body.status === 200){
                this.$router.push({path:"/"});
                this.$store.state.token = response.body.token;
                console.log(this.$store.state.token);
              }

          })
          }
            }
    }
</script>

<style scoped>

</style>
