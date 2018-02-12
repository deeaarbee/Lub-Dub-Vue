<template>
  <div>
    <h1>This is the home Page</h1>
  {{ token }}
  </div>
</template>

<script>
    export default {
      name: "home-page",
      computed: {
        token() {
          return this.$store.state.token;
        }
      }
    }
</script>

<style scoped>

</style>
