<template>
    <div>
        <navbar class="d-none"></navbar>
        <Content class="d-none"></Content>
        <breadcrumb class="mt-4"></breadcrumb>
        <center><copyright></copyright></center>
    </div>
</template>

<script>
import navbar from '../components/navbar.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import Content from '../components/content.vue'
import Copyright from '@/components/copyright.vue'
export default {
    name: 'updatePages',
    components:{
        navbar,
        Breadcrumb,
        Copyright,
        Content
    }
}
</script>

<style scoped>
.mt-4{
    margin-top: 30%;
}

</style>