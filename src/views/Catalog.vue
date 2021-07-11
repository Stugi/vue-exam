<template lang="html">
  <div class="main">
    <h3>Каталог</h3>
    <katalog :allcategory="all_category"></katalog>
  </div>
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
.main{
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}
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
