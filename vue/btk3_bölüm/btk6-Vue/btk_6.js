const app = Vue.createApp({
    template: `
        <div>
            <ul>
                <li v-for="gun in gunler">{{gun}}</li>
            </ul>
        </div>
    `,
    data() {
        return {
            gunler: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]
        }
    },
    methods: {}
});

app.mount('.btk_6App');
