<template>
  <div v-for="good in goods"  :key="good.id">
    <!-- <router-link :to="{name:'Goods', params:{parentpath:category.path}}"> -->
      <div class="">
        <!-- <img :src="'../img/'+good.img_path"> -->
      </div>
      <p>{{good.name}}</p>
    <!-- </router-link> -->
  </div>
</template>

<script>
export default {
  name: "KatalogConsists",
  props: {
    goods: Array,
  }
}
</script>

<style scoped>
</style>
