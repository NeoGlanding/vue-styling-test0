const app = Vue.createApp({
    data() {
        return {
            box: {}
        }
    },
    watch :{
        box(value) {
            console.log(value)
        }
    },
    methods: {
        clickBox(name) {
            this.box[name] = true
        }
    }
})

app.mount('#root')