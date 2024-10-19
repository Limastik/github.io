<template>
  <div>
    <h1>Привіт, {{ message }}!</h1>
    <input v-model="message" placeholder="Введіть ваше ім'я" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'світе'
    };
  }
};
</script>

<style>
input {
  margin-top: 10px;
  padding: 5px;
}
</style>
