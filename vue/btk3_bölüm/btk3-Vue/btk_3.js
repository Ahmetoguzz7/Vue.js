const app = Vue.createApp({
    template: `
        <div>
            <h2>Başlık: {{Baslik}} </h2>
            <h3>İçerik: {{İçerik}}</h3>
            <p>Yorum Sayısı: {{yorumSayisi}}</p>
        </div>
    `,
    data() {
        return {
           Baslik: 'Vue Dersi',
           İçerik: 'Vue 3 konuları',
           yorumSayisi: 7 // Buraya veri eklemek için uygun bir veri nesnesi dönülmeli.
        }
    }
});

app.mount('.thirdapp');
