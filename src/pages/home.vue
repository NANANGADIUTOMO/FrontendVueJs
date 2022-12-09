<template>
  <div>
    <navbar></navbar>
        <div>
            <router-link to="/add" type="btn" class="btn">Add Data <img src="../assets/148764.png" alt="" width="20px"></router-link>
        </div>
        <Content v-show="!success" @deleteEmit="changeSuccess" class="ctn"></Content>
        <succes v-show="success" textsucces="Deleted"></succes>
    <center><copyright></copyright></center>
  </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import  Content from '../components/content.vue'
import copyright from '../components/copyright.vue'
import succes from '../components/succes.vue'
export default {
    name: 'homepageComponent',
    components:{
        navbar,
        Content,
        copyright,
        succes
    },
    data(){
        return{
            success : false
        }
    },
    methods: {
        changeSuccess(){
            this.success = true;
        }
    }
}
</script>

<style scoped>
.btn{
    background-color: blue;
    margin-top: 14px;
    margin-left: 14px;
    width: 120px;
    height: 40px;
    border-radius: 8px;
    color: white;
    font-family:'Segoe UI', Tahoma, ;
}
.btn img{
    margin-left: 2px;
}
.ctn{
    margin-left: 10px;
}


</style>