const app = Vue.createApp({
    template:
    <><div v-if="showInfo">Deneme Yazisi</div>
    <div v-show="showInfo">Deneme Yazisi 2</div>
    <button v-on="toogle">
     <span v-if="!showInfo">Göster</span>
     <span v-else>Gizle</span>
    </button></>,
data(){
    return{
        showInfo:true
    }
 },
 methods:{
    toogle(){
        this.showInfo=!this.showInfo;
    }
 }
});
app.mount('.FiveApp')