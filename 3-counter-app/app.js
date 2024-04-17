const app = Vue.createApp({
    data(){
        return {
           counter: "0", 
           counter2: "0",

        };
    },
    methods: {
        // getCounterResult(){
        //     console.log("Counter1 çalıştı");
        //     return this.counter > 5 ? 'High' : 'Low';
        // },
        // getCounterResult2(){
        //     console.log("Counter2 çalıştı");
        //     return this.counter2 > 5 ? 'High' : 'Low';
        // }
    },
    computed: { // sadece değişiklik olan yer günceller reactivity. bir değer dönmek zorunda
        // birden fazla değer inceleyebilir.
        getCounterResult(){
            console.log("Counter1 çalıştı");
            return this.counter > 5 ? 'High' : 'Low';
        },
        getCounterResult2(){
            console.log("Counter2 çalıştı");
            return this.counter2 > 5 ? 'High' : 'Low';
        }
    },
    watch : {// bir değer dönmek zorunda değil değişim olduğunda döner. Tek değer inceler
        counter(newValue, oldValue){
            console.log("Counter",oldValue, "=>", newValue);
        },
        getCounterResult(newValue, oldValue){
            
            console.log("Result",oldValue, "=>", newValue);
        },
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
