<template lang="html">
  <h3>Войти</h3>
  <form class="" action="/auth" method="post">
    <label for="username">Email</label>
    <input type="text" id ="username" name="username" value="">
    <label for="password">Пароль</label>
    <input type="text" id ="password" name="password" value="">
    <input type="submit" name="" value="Войти">
  </form>
</template>

<script>
export default {
}
</script>

<style scoped>

form {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 0 auto;
}

form input[type="submit"] {
  padding: 10px 30px;
  margin: 5px 10px 5px 0;
  background-color: #5868c7;
  border: 1px solid #ddd;
  color: white;
  cursor: pointer;
  border-radius: 3px;
}
form input[type="submit"]:focus {
  background-color: #324e6d;
}

input[type="text"]{
  display: block;
  padding: 10px;
  margin: 5px 10px 5px 0;
  border-color: #DEE4E7;
  border-style: solid;
  background-color: #FAFDFF;
  color: #333333;
  border: 1px solid #DEE4E7;
  border-radius: 3px;
  vertical-align: middle;


}

input[type="text"]:focus{
  outline: none !important;
  border: 1px solid #5868c7;
  box-shadow: 0 0 3px #324e6d;
}

</style>
