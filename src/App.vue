<template>
  <div class="container">
    <appHeader></appHeader>
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from './components/HeaderNav.vue';
  export default {
    components:{
      appHeader:HeaderNav
    }
  }
</script>

<style>

</style>
