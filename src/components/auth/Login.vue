<template>
    <div>
        <h1>Login Page</h1>
        <form class="navbar-form navbar-left" >
            <div class="form-group">
                <input type="text" class="form-control" placeholder="username" v-model="user.username">
                <input type="text" class="form-control" placeholder="password" v-model="user.password">
            </div>
            <button class="btn btn-default" @click.prevent="login()">Submit</button>
        </form>
    </div>
</template>

<script>
    import {apiMixin} from "../../helperScripts/api";

    export default {
        name: "login",
        mixins:[apiMixin],
        data () {
            return{
                user:{
                    username: '',
                    password: ''
                },
                response:{}
            };
        },
        methods:{

            }
    }
</script>

<style scoped>

</style>