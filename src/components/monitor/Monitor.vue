<template>
    <div>
    <h1> Monitor component</h1>
        <router-link v-for= "each in types" :to="'/monitor/'+each" v-bind:key="types" >{{ each }} <br></router-link>
    <router-view></router-view>
    </div>
</template>

<script>
  import {BASE_URL} from "../../main";

  export default {
        name: "monitor",
        data(){
            return{
              types:['Bloodsugar','Bloodtest','Urine','Vitd','Cholestrol'],
              payload:{
                token:''
              }
            };
        },
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
        this.gettypes();
      },
      methods:{
          gettypes(){
            this.payload.token = this.$store.state.token;
            this.$http.post( BASE_URL + "monitor",this.payload).then(response =>{
              this.types = response.body.data;
              console.log(response.body);
              })
          }
      }
    }
</script>

<style scoped>

</style>
