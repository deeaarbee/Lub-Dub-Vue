<template>
  <div>
    <h1>This is the Profile </h1>
    <center>
      <h3>Age : {{details.age}}</h3>
      <h3>Bllod Group : {{details.bgroup}}</h3>

      <h3>BMI : {{details.bmi}}</h3>

      <h3>Gender : {{details.gender}}</h3>

      <h3>Height : {{details.height}}</h3>

      <h3>Policy Name : {{details.policyname}}</h3>

      <h3>Policy Number : {{details.policynumber}}</h3>

    </center>
  </div>
</template>

<script>
  import {BASE_URL} from "../../main";

  export default {
        name: "profile",
      data(){
        return{
          payload:{
            token:''
          },
          details:{}
        };
      },
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});

        }
        this.getDetails();
      },
      methods:{
          getDetails(){
            this.payload.token = this.$store.state.token;
            this.$http.post( BASE_URL + "getProfile",this.payload).then(response =>{
              console.log(response.body);
              this.details = response.body.data;
            })
          }
      }
    }
</script>

<style scoped>

</style>
