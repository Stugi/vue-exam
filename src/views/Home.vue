<template>
<div class="home">
  <section>
    <div class="slides">
      <Slider v-model="number" :min="0" :max="3" class="slider" />
    </div>
  </section>
    <div class="katalog">
      <h3>Популярные категории:</h3>
      <katalog :allcategory="populyarity"></katalog>
    </div>
</div>
</template>

<script>
import Slider from "../components/slider";
import katalog from "../components/katalog";

export default {
  name: "App",
  components: {
    Slider,
    katalog
  },
  data() {
    return {
      number: 0
    };
  },
  computed: {
    populyarity() {
      return this.$store.getters.getCategoryies({parentpath:"populyarity"});
    },
  }
}
</script>

<style scoped>
.slides {
  height: 100%;
  background-color: #eeeeee;
}
.katalog{
  z-index: 50;
  position: absolute;
  background-color: rgba(200, 200, 200, 0.1);
  text-align: center;
  border-radius: 10px;
  top: 25%;
  left:25%;
}
</style>
