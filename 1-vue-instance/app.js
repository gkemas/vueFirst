const app = Vue.createApp({
    data(){
        return{
            title :"Vue js first.",
            content:"Lorem ipsum amit2",           
            eduflow:{
                title: "Vue js org document",
                target: "_blank",
                url: "https://vuejs.org/guide/quick-start",
                alt: "document"
            },
            coords:{
                x:0,
                y:0,
            }
        }; 
    },
    methods:{
        changeTitle(pTitle){
            this.title =pTitle;
           
        },
        updateCoords(message, event){
        console.log(message, event.x, event.y);
        this.coords = {
            x : event.x,
            y: event.y
        },
        this.changeTitle(`${event.x},${event.y}`);
        },
        
    }
}).mount('#app');