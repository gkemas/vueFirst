const app = Vue.createApp({
    data(){
        return{
            showContainer: true,
            counter: 0,
        };
    },
    computed:{
        counterBoxClass(){
            return{'bg-success': this.counter > 0, 'bg-danger text-white' : this.counter < 0};
        },
    }
}).mount("#app");