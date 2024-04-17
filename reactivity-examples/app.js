const app = Vue.createApp({
   data(){
    return{
        search: "",
        itemList : ["elma","armut","kiraz","çilek"],
        // filteredList :[],
    };
   },
   methods:{
    searchlist(){
    //    this.filteredList = this.itemList.filter(i => i.includes(this.search));
    //     console.log(filteredList);
    },
   },
   computed:{
    filteredList(){
      return  this.itemList.filter(i => i.includes(this.search));
    }
   }
}).mount('#app');