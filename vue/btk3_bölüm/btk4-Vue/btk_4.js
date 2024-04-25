const app = Vue.createApp({
    template: `
        <div>
            <h2>Başlık: {{Baslik}} </h2>
            <h3>İçerik: {{İçerik}}</h3>
            <p>Yorum Sayısı: {{yorumSayisi}}</p>
            <button v-on:click="ekle()"> Ekle</button>
            <p>{{yazi}}</p>
        </div>
    `, //buton kısmında v-on:click ile bir method çağırdık click olunca atanacak.
    //Ekle butonuna basılınca console kısmında gözüküyor.
    data() {
        return {
           Baslik: 'Vue Dersi',
           İçerik: 'Vue 3 konuları',
           //yorumSayisi: 7 // Buraya veri eklemek için uygun bir veri nesnesi dönülmeli.
           yorumSayisi: 0  ,
           yazi:'Yorum eklemek için tıklayın.'      
        }
    },
    methods:{
      ekle(){
        console.log('Ekle metodu çalıştı');
        this.yorumSayisi++; //Ekle butonunca artmasını istiyoruz.
        //this ile yorum satırını arttırabiliriz.
        this.yazi='${this.yorumSayisi} tane yorum girildi.'
      }
    }
});

app.mount('.fourapp');
