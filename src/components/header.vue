<template>
  <div class="header">
    <router-link type="btn" class="btn">Add Data </router-link>
  </div>
</template>

<script>
export default {
    name: 'headerComponent'

}
</script>

<style scoped>
.btn{
    background-color: blue;
    margin-top: 14px;
    margin-left: 14px;
    width: 90px;
    height: 40px;
    border-radius: 8px;
    color: white;
    font-family:'Segoe UI', Tahoma, ;
}

</style>