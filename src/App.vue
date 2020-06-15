<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- <TestIterator msg="Welcome to Your Iterato App"/>
    <TestPromise msg="测试Promise"/>
    <HelloTable msg="测试Table"/> -->
    <OpenApp msg="测试外部打开app"/>
    <!-- <RichTextTest /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import OpenApp from './components/OpenApp.vue'
import TestIterator from './components/TestIterator.vue'
import TestPromise from './components/TestPromise.vue'
import HelloTable from './components/HelloTable.vue'
import RichTextTest from './views/richText/RichTextTest'

export default {
  name: 'app',
  components: {
    HelloWorld,
    OpenApp,
    TestIterator,
    TestPromise,
    HelloTable,
    RichTextTest
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
