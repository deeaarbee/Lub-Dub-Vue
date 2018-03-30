<template>
  <div>
    <h1>This is the home Page</h1>
  </div>
</template>

<script>
    export default {
      name: "home-page",
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
      },
      methods: {
        check() {
          if (this.$store.state.token === '') {
            this.$router.push({path: "/login"});

          }
        }
      }
    }

</script>

<style scoped>

</style>
