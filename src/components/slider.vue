<template>
<div id = "#im">
  <transition-group name="fade" tag="div">
    <div v-for="i in [currentIndex]" :key="i" class="slide">
      <img :src="currentImg" class="slide">
    </div>
  </transition-group>

  <!-- <a class="prev" @click="prev" href="#">&#10094; Previous</a> -->
  <!-- <a class="next" @click="next" href="#">Next &#10095;</a> -->
</div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        "../img/logo1.png",
        "../img/logo2.png",
        "../img/logo3.png"
      ],
      texts: [
        "Мыши и клавиатуры",
        "Гарнитура",
        "Мыши"
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>


<style scoped>
img {
  max-width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.5s;

  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  /* visibility: hidden; */
  width: 100%;
  opacity: 0;
}
#im{
position: absolute;
background-color: #eeeeee;
}
.catalog{
  top: 50%;
  position:relative;
}
</style>
