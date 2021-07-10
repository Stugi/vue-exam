<template>
  <h3>ТОвары</h3>
  <h3>{{currentRouteName}}</h3>
  <!-- <katalog-consists :goods="all_goods"></katalog-consists> -->
</template>

<script>
// import katalogConsists from "../components/katalog_consists";
export default {
   name:"Goods",
   computed: {
    currentRouteName() {
        return this.$route.name;
    }
}
  // computed:{
  //   all_goods(){
  //     return this.$store.getters.getGoods(this.$route.params);
  //   }
  // },
  // components:{
  //   'katalog-consists':katalogConsists
  // }
}
</script>

<style scoped>
</style>
