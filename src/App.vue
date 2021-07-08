<template>
  <div id="nav">
    <img @click="goHome" src="https://img.icons8.com/ios/50/000000/kiwi-bird.png"/>
    <!-- <router-link to="/"></router-link> -->
    <router-link to="/auth">Авторизация</router-link>
    <router-link to="/catalog">Каталог</router-link>
    <router-link to="/garbage">Корзина</router-link>
  </div>
  <router-view/>
</template>

<script>
export default{
  methods: {
   goHome() {
     return this.$router.push('/');
   }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}

#nav {
  /* padding: 30px; */
  line-height: 80px;
    background-color: #eeeeee;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
}

#nav a{
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-size: 16px;
  flex: 1;
  border-bottom: 4px solid transparent;
}

#nav a:hover {
  border-bottom: 4px solid #5868c7;
}

#nav a.router-link-exact-active , #nav img.router-link-exact-active{
  color: #5868c7;
}

#nav img{
  width: 50px;height: 50px;
  padding-left: 50px;
  padding-right: 50px;
  cursor: pointer;
}

</style>
