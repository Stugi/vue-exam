<template>
  <!-- <router-link :to="{ name: '', params: {} }"></router-link> -->
<nav>
  <div class="" v-for="p in path.slice().reverse()" :key="p.id" >
    <span class="" @click="goCategory(p.path, path[0].path)">
      {{p.name}}
    </span>
  </div>
</nav>


</template>

<script>
export default {
  props:{
    path:Array
  },
  methods:{
    goCategory(e, lastel){
      if(e!=lastel)
        this.$router.push("/"+e);
    }
  }

}
</script>

<style lang="css" scoped>
div{
    text-decoration: none;
    font-weight: bolder;
    color: #111;
    padding: 0.6em;
    display: inline;
}

div:hover {
    color: #5868c7;
    cursor: pointer;
}
div:last-child {
  text-decoration: none;
  font-weight: bolder;
  background-color: #b5bce6;
  color: white;
  border-radius: 0.5em;
}
div:first-child {
  padding-left: 0;

}
div:last-child:hover {
  cursor:default;
}

nav{
  padding-top: 1em;
}
/*
span::after{
  content: "#"
} */
</style>
