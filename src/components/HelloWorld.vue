<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
      
    }
  },
  created() {
    // const result = this.add(2,3,6,7)
    const result = this.Fibonacci2(1000)
    console.log(result, 'result')
  },
  methods: {
    textAsset() {
      const x = 10
      const arr = [
        ...(x > 0 ? ['a'] : []),
        'b'
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
