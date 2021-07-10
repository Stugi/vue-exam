<template lang="html">
  <h3>Каталог</h3>
  <katalog :allcategory="all_category"></katalog>
  <!-- <p>{{all_category}}</p> -->
</template>

<script>
// import {mapGetters} from 'vuex'
import katalog from "../components/katalog";

export default {
  name:"Catalog",
  computed:{
    all_category(){
      return this.$store.getters.getCategoryies(this.$route.params);
    },


  },
  methods:{
    goToCategory(e){
      console.log(e);
    }
  },
  components: {
    katalog
  }
}
</script>

<style lang="css" scoped>
  .category{
    background-color: #f5f5f5;

  }
  .category:hover{
    background-color: #eeeef7;
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
