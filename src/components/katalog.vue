<template>
<section class="categorys">
  <div v-for="category in allcategory" :key="category.id" class="" @click="goToCategory">

    <!-- <router-link :to="{path:'/catalog'}">Открыть</router-link> -->
    <router-link :to="{name:'Catalog1', params:{parentpath:category.path}}">
      <div class="category">
        <img :src="'../img/'+category.img_path">
      </div>
      <p>{{category.name}}</p>
    </router-link>
    <!-- <router-link :to="{path:'/catalog', params:{id:category.id"}}">Открыть</router-link>  -->
  </div>
</section>
</template>

<script>
export default {
  name: "Katalog",
  props: {
    allcategory: Array
  },
  methods: {
    goToCategory(e) {
      console.log(e.target);
      console.log(this.$router);

      // return this.$router.push(this.$router+'/');
    }
  }
}
</script>

<style lang="css" scoped>
  .category{
    background-color: #f5f5f5;

  }
  .category:hover{
    background-color: #d7def7;
  }

  .categorys{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .categorys div{
    cursor: pointer;
    margin: 10px;
  }
  .categorys div{
    text-align: center;
  }
</style>
