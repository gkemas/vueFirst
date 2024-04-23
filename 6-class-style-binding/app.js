const app = Vue.createApp({
    data(){
        return{
            showborder: false,
            boxClass :"border red",
            redBG: false,
            bgColor:"cyan",
        };
    },
    computed : {
        boxClasses(){
            return{border: this.showborder, red: this.redBG};
        }
    }
}).mount('#app');