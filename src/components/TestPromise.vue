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
        }
    },
    created() {
        // console.log('created() 111');
        // this.timeout(5000).then((value) => {
        //     console.log(value);
        // });
        // console.log('created() 222');
        // setTimeout((value) => {
        //     console.log(value, 'setTimeout');            
        // }, 0, 'hello timeout');

        // this.testPromise()
        // this.testAjax()
        this.testTimeoutPromise()
    },
    methods: {
        testTimeoutPromise() {
            const p1 = new Promise(function (resolve, reject) {
                setTimeout(() => reject(new Error('fail')), 3000)
            })
            const p2 = new Promise(function (resolve, reject) {
                setTimeout(() => resolve(p1), 1000)
            })
            p2
            .then(result => console.log(result, 'result'))
            .catch(error => console.error(error, 'error'))
        },
        timeout(ms) {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, ms, 'done');
            });
        },
        testPromise() {
            let promise = new Promise(function(resolve, reject) {
                console.log('Promise');
                resolve();
            });
            promise.then(function() {
                console.log('resolved.');
            });
            console.log('Hi!');
        },
        testAjax() {
            const getJSON = function(url) {
                const promise = new Promise(function(resolve, reject){
                    const handler = function() {
                        if (this.readyState !== 4) {
                            return;
                        }
                        if (this.status === 200) {
                            resolve(this.response);
                        } else {
                            reject(new Error(this.statusText));
                        }
                    };
                    const client = new XMLHttpRequest();
                    client.open("GET", url);
                    client.onreadystatechange = handler;
                    client.responseType = "json";
                    client.setRequestHeader("Accept", "application/json");
                    client.send();

                });
                return promise;
            };
            getJSON("/posts.json").then(function(json) {
                console.log('Contents: ' + json);
            }, function(error) {
                console.error('出错了', error);
            });
        }
    },
}
</script>
