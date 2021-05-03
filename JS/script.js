const app = new Vue({
    el: '#app',
    data: {
       email: []
    },
    created(){
        for (let i = 0; i <= 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(result => {
                console.log(result.data);
                this.email = result.data.response;
            })
            .catch(error => {
                console.log('Error', error);
            });
        };
    },
});