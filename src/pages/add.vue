<template>
    <div>
        <navbar></navbar>
        <div>
            <router-link to="/" class="btn"><img src="../assets/340.png" alt="" width="20px"></router-link>
        </div>
        <breadcrumb class="bread"></breadcrumb>
        <center class="copy"><copyright></copyright></center>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import breadcrumb from '../components/breadcrumb.vue'
import copyright from '../components/copyright.vue'
export default {
    name: 'addComponent',
    components :{
        navbar,
        breadcrumb,
        copyright
    }
}
</script>

<style scoped>
.copy{
    margin-top: 3%;
}
.bread{
    margin-top: 3%;
}
.btn{
    background-color: blue;
    margin-top: 3px;
    margin-left: 14px;
    width: 70px;
    height: 40px;
    border-radius: 8px;
    color: white;
    font-family:'Segoe UI', Tahoma, ;
}
.btn img{
    margin-left: 2px;
    margin-bottom: 3px;
}

</style>