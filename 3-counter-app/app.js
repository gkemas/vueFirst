const app = Vue.createApp({
    data(){
        return {
           counter: "0", 
           counter2: "0",

        };
    },
    methods: {
        getCounterResult(){
            return this.counter > 5 ? 'High' : 'Low';
        },
        getCounterResult2(){
            return this.counter2 > 5 ? 'High' : 'Low';
        }
    }
//     methods:{
//        inc(){
// this.counter++;
//        }, 
//        dec(){
// this.counter--;
//        },
//     },
}).mount("#app");
