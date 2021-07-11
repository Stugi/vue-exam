<template>
  <div>{{ $route.params.id }}</div>
  <h2>{{ book.title }}</h2>
  <div>
    <img :src="book.img">
  </div>
  <p>{{ book.description }}</p>
</template>

<script>
export default {
  name: "Good",
  computed: {
    book(){
      // return this.$store.getters.bookById(this.$route.params.id);
      return {};
    }
  }
}
</script>

<style scoped>
</style>
