<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      testData: {
        'a': 'aaa',
        'b': 'bbb',
        'c': 'ccc'
      }
    }
  },
  created() {
    // const result = this.add(2,3,6,7)
    // const result = this.Fibonacci2(1000)
    // console.log(result, 'result')
    // this.testIterator()
    this.testArray()
  },
  methods: {

    testArray() {
      for (let data in this.testData) {
        console.log(data, 'data111')
      }
      for (let data of this.testData) {
        console.log(data, 'data111')
      }
    },

    testIterator() {
      // Number.prototype[Symbol.iterator] = function*() {
      //   let i = 0;
      //   let num = this.valueOf();
      //   while (i < num) {
      //     yield i++;
      //   }
      // }
      // console.log([...5],'testIterator')
      // let map = new Map([
      //   [1, 'one'],
      //   [2, 'two'],
      //   [3, 'three'],
      // ]);
      // let arr = [...map.keys()];
      // console.log(arr,'arr')
      let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 4
      };
      // ES5的写法
      var arr1 = [].slice.call(arrayLike);
      // ES6的写法
      let arr2 = Array.from(arrayLike)
      console.log(arr1,'arr1')
      console.log(arr2,'arr2')
    },
    textAsset() {
      const x = 10
      const arr = [
        ...(x > 0 ? ['a'] : []),
        'b',
      ]
      console.log(arr, 'arr')
    },
    Fibonacci (n) {
      if ( n <= 1 ) {return 1}
      return this.Fibonacci(n - 1) + this.Fibonacci(n - 2);
    },
    Fibonacci2 (n, f1=1, f2=1) {
      if ( n <= 1 ) {return f2}
      return this.Fibonacci2(n - 1, f2, f1 + f2);
    },
    add (...reset) {
      let sum = 0
      for (var item of reset) {
        sum += item
      }
      return sum
    },
    paramsErrorMsg () {
      throw new Error("参数不正确！！")
    },
    test (id = this.paramsErrorMsg()) {
      return id
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
