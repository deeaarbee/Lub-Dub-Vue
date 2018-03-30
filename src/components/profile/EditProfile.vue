<template>

</template>

<script>
    export default {
        name: "edit-profile",
      created() {
        if (this.$store.state.token === '') {
          this.$router.push({path: "/login"});
        }
      },
    }
</script>

<style scoped>

</style>
