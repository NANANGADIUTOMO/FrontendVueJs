<template>
  <div class="alert">
        <h3 class="card-title ">Success!</h3>
        <p class="card-text " >Data Has been {{textsucces}} !</p>
        <router-link v-show="!showButton" to="/" class="btn text-white mb-2">Close </router-link>
        <button v-show="showButton" class="btn text-white" @click="reloadFunc">Back</button>
  </div>
</template>

<script>
export default {
    name: 'succesComponent',
    props: ['textsucces'],
    data(){
        return{
            showButton : false,
        }
    },
    mounted(){
        if(this.$route.path === "/"){
            this.showButton = true;
        }
    },
    methods: {
        reloadFunc(){
            location.reload();
        }
    }
}   
</script>

<style scoped>
.alert{
        margin-top: 3%;
        margin-left: 35%;
        width: 30%;
        height: 150px;
        border: 2px solid green;
    }
    .btn{
        background-color:blue;
        margin-left: 15px;
        width: 90px;
        height: 30px;
        border-radius: 3px;
    }

</style>