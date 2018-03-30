<template>
    <h1>This is the Reports Tab</h1>
</template>

<script>
    export default {
        name: "reports",
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
      },
    }
</script>

<style scoped>

</style>
