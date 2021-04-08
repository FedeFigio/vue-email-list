let app = new Vue({
    el: "#root",
    data: {
        emails: [],
        quantity: null
    },
    methods: {
        generateEmail() {
            this.emails = []
            for (let i = 0; i < this.quantity; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        this.emails.push(response.data.response)
                    });
            }
        }
    },
})