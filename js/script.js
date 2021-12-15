Vue.config.devtools = true;


const app = new Vue(
    {
        el: "#root",
        data:{
            emails:[]
        },
        methods:{
            getRndmEmail: function(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) =>{
                    singleEmail= response.data.response
                    this.emails.push(singleEmail)
                })
            }
        },
        created:function(){
            for (let i=0; i<10; i++){
                this.getRndmEmail();
            }
        }
    }
)