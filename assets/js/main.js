let app = new Vue({
    el: "#root",
    data: {
        emails: [],
        quantity: null,
        errore: ""
    },
    methods: {
        generateEmail() {
            this.emails = []
            if (isNaN(this.quantity) || this.quantity == null || this.quantity == "") {
                this.errore = "NON HAI INSERITO UN NUMERO"
            } else {
                this.errore = ""
                for (let i = 0; i < this.quantity; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            this.emails.push(response.data.response)
                        });
                }

            }
        }
    },
})