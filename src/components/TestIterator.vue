<template>
    <div>
        <span>{{ msg }}</span>
    </div>
</template>

<script>
export default {
    props: {
        msg: String
    },
    data() {
        return {
            testData: {
                'a': 'aaa',
                'b': 'bbb',
                'c': 'ccc'
            },
            arrayData: [
                'hello',
                'word'
            ]
        }
    },
    created() {
        // this.testIterator()
        // this.testIteratorMap()
        // this.testArray()
        this.testForEach()
    },
    methods: {
        testForEach() {
            this.arrayData.forEach((item,index) => {
                console.log(item, index)
            }) 

        },
        testArray() {
            for (let data in this.testData) {
                console.log(data, 'data111')
            }
            for (let data of this.testData) {
                console.log(data, 'data111')
            }
        },
        testIteratorMap() {
            let map = new Map()
            map.set('name', 'xiaoming')
            map.set('age', 16)
            map.set('sex', '女')
            for (var [name,value] of map) {
                console.log(name + '   ' + value)
            }
        },
        testIteratorString() {
            let test = 'hello word'
            for (var value in test) {
                console.log(value, 'value')
            }
            for (var value of test) {
                console.log(value, 'value222')
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
        }
    },
}
</script>
