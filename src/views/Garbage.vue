<template lang="html">
  <main>
    <div class="" v-show="garbage.length>0">
      <h3>Товаров: {{garbagecount.count}} На сумму: {{garbagecount.summ}}</h3>
    </div>
    <h3>Корзина</h3>
  <div v-for="good in garbage" :key="good.id"  class="good">
    <div class="col-2">
        <router-link :to="{name:'Good', params:{id:good.id}}">
          <img :src="'../img/'+good.imgs_description[0]">
        </router-link>
      </div>
      <div class="col-7 descr">
        <router-link :to="{name:'Good', params:{id:good.id}}">
          {{good.name}}
        </router-link>
        <span>Описание: </span>
        <p class="descr">{{good.description}}</p>
      </div>
      <div class="butt">
        <button type="button" name="button" @click="remove(good)">Убрать</button>
        <h4>{{good.count}} X {{good.price}}  ₽</h4>
        <h4>{{good.count*good.price}}</h4>
      </div>
    </div>
    <div class="" v-show="garbage.length===0">
      <p>Корзина пуста</p>
    </div>

  </main>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  computed: {
    garbage() {
      return this.$store.getters.getGarbage();
    },
    garbagecount(){
      return this.$store.getters.garbageCount('qr');
    }
  },
  methods: {
    ...mapMutations(['removeFromGarbage']),
    remove({id}) {
      this.removeFromGarbage(id);
    }
  }
}
</script>

<style scoped>
main {
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
}

.good {
  border-radius: 4px;
  background-color: #fff;
  color: rgba(0, 0, 0, .87);
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  border: thin solid rgba(0, 0, 0, .12);
  display: flex;
  max-width: 100%;
  outline: none;
  text-decoration: none;
  transition-property: box-shadow, opacity;
  white-space: normal;
  font-size: 16px;
  margin: 5px;
}

.good img {
  margin: 5px;
  width: 100%;
}

.good span {
  color: #30547b;
}

.good p {}

.good a {
  display: block;
  text-decoration: none;
  font-weight: bolder;
  color: #111;
}

.good a:hover {
  color: #5868c7;
}

.descr {
  margin: 10px;
}

.good button {
  padding: 10px 30px;
  display: block;
  margin-right: 1em;
  margin-top: 1em;
  background-color: #ddd;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  border-radius: 10px;
}

.good button:hover {
  background-color: #5868c7;
}

.good .butt {
  margin-left: auto;
}

.col-2 {
  -ms-flex: 0 0 16.666667%;
  flex: 0 0 16.666667%;
  max-width: 16.666667%;
}

.col-3 {
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  -ms-flex: 0 0 33.333333%;
  flex: 0 0 33.333333%;
  max-width: 33.333333%;
}

.col-5 {
  -ms-flex: 0 0 41.666667%;
  flex: 0 0 41.666667%;
  max-width: 41.666667%;
}

.col-6 {
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  -ms-flex: 0 0 58.333333%;
  flex: 0 0 58.333333%;
  max-width: 58.333333%;
}

h4 {
  font-weight: 700;
  white-space: nowrap;
  color: #001a34;
  display: block;
  font-family: GTEestiPro, arial, sans-serif;
  display: block;
}
</style>
