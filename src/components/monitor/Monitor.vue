<template>
    <div>
    <h1> Monitor component</h1>
        <router-link v-for= "each in types" :to="'/monitor/'+each" v-bind:key="types" >{{ each }} <br></router-link>
    <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "monitor",
        data(){
            return{
              types:['Bloodsugar','Bloodtest','Urine','Vitd','Cholestrol']
            };
        }
    }
</script>

<style scoped>

</style>
