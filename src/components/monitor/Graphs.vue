<template>
  <div>
    <h1>This is graph {{ $route.params.graph }}</h1>
    <div id="container" style="min-width: 310px; height: 400px; margin: 0 auto">

    </div>
  </div>
</template>

<script>
  import {BASE_URL } from "../../main.js"

    export default {
      name: "graphs",
      created(){
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
        this.fetchData();
      },
      data(){
        return {
          jsonResponse: null,

        }},

      methods: {


    },

  }

</script>


<style scoped>
</style>
