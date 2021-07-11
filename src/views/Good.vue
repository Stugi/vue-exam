<template>
<main>
  <h2>{{good.name}}</h2>
  <div class="panel">
    <div class="">
      <div v-for="i in good.imgs_description" :key="i">
        <img :src="'../img/'+i" v-show="good.imgs_description.indexOf(i)==currentIndex">
      </div>
      <div class="dots">
        <span v-for="i in good.imgs_description" :key="i">
          <span style='font-size:50px;' :class="{'active':good.imgs_description.indexOf(i)==currentIndex}" @click="currentIndex = good.imgs_description.indexOf(i)">&#8226;</span>
        </span>
      </div>
    </div>
    <div class="">
      <h3>{{good.price}} ₽</h3>
      <button type="button" name="button" @click='add(good)'>В корзину</button>
      {{good.description}}
    </div>
  </div>
</main>
</template>

<script>
// import breadcrumbs from "../components/breadcrumbs";
export default {
  name: "Good",
  computed: {
    good() {
      return this.$store.getters.goodById(this.$route.params.id);
    }

  },
  data() {
    return {
      currentIndex: 0
    }
  },
  components: {
    // breadcrumbs
  },
  methods:{
     // ...mapMutations(['addToGarbage']),
     add(good){
       this.$store.commit('addToGarbage',good);

     }
  }
}
</script>

<style scoped>
main {
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.panel {
  display: flex;
  flex-direction: row;
  /* align-items:baseline; */
}

.panel>* {
  margin: 1em;
}

button {
  padding: 10px 30px;
  display: block;
  margin-right: 1em;
  margin-top: 1em;
  background-color: #5868c7;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  margin-bottom: 1em;
}

.dots .active {
  color: #5868c7;

}

.dots {
  color: #ddd;
  text-align: center;
}

.dots>span>span {
  cursor: pointer;
}

h3 {
  font-weight: 700;
  white-space: nowrap;
  color: #001a34;
  display: inline-block;
  font-family: GTEestiPro, arial, sans-serif;
  display: inline;
}
</style>
