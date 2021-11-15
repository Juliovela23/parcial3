


<script>
import createPost from '../graphql/createPost.gql'

export default {
    name: 'AddMenu',
    data() {
        return {
        name: 'Prueba',
        notes: 'Probanod'
        }
    },
    created(){
        this.createPost()

    },
    methods:{
        createPost(){
            this.$apollo.mutate({
                mutation: createPost,
                variables: {
                    input:{
                        name: this.name,
                        notes: this.notes,
                    }
                }
            })
            .then(r=> console.log(r))
            .catch(e=> console.log(e))
        }
    }

}

</script>


