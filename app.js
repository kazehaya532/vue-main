const app = Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
            result: 0
        }
    },
    methods: {
        add() {
            this.result = this.num1 + this.num2;
        },
        subtract() {
            this.result = this.num1 - this.num2;
        },
        multiply() {
            this.result = this.num1 * this.num2;
        },
        divide() {
            if (this.num2 !== 0) {
                this.result = this.num1 / this.num2;
            } else {
                this.result = 'Cannot divide by zero';
            }
        }
    }
});

app.mount('#app');