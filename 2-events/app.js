const app = Vue.createApp({
    data(){
        return{
            fullName: null,
        };
    },
    methods:{
        updateValue(kamil){
 console.log(kamil.target.value);
 this.fullName = kamil.target.value;
        },
    },
}).mount('#app');