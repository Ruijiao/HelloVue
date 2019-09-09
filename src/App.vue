<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <TestIterator msg="Welcome to Your Iterato App"/>
    <TestPromise msg="测试Promise"/>
    <HelloTable msg="测试Table"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TestIterator from './components/TestIterator.vue'
import TestPromise from './components/TestPromise.vue'
import HelloTable from './components/HelloTable.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TestIterator,
    TestPromise,
    HelloTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
