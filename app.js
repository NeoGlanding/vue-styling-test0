const app = Vue.createApp({
    data() {
        return {
            box: {},
            box2: {}
        }
    },
    computed: {
        boxg() {
            return {active: this.box.g}
        }
    },
    methods: {
        clickBox(name) {
            this.box[name] = !this.box[name]
        },
        clickBox2(name) {
            this.box2[name] = !this.box2[name]
        },
        logBox() {
            console.log(this.box)
        }
    }
})

app.mount('#root')