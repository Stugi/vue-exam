<template>
<div class="home">
  <section>
    <div class="slides">
      <Slider v-model="number" :min="0" :max="3" class="slider" />
    </div>
  </section>
  <section>
    <div class="">
      Popularity
    </div>
  </section>
</div>
</template>

<script>
import Slider from "../components/slider";

export default {
  name: "App",
  components: {
    Slider
  },
  data(){
    return{
      number:0
    };
  }
};
</script>

<style scoped>
.slides{
  height: 100vh;
  background-color: #eeeeee;
}

</style>
