<template>

</template>

<script>
    export default {
        name: "upload",
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
      },
    }
</script>

<style scoped>

</style>
