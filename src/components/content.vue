<template>
  <div class="continer-fluid">
    <div class="d-flex flex-wrap">
        <div id="card" class="card col-lg-3 p-4 ml-2 mt-3" v-for="(item, index) in studentdata" :key="item.id">
            <P class="d-none">{{index + 1}}</P>
            <p style="font-size:larger"><b>{{item.nama}},</b> {{item.umur + " "}}  years old</p>
            <p>"{{" "+ item.deskripsi_diri + " "}}"</p> 
            <table>
                <tr>
                    <td>Email</td>
                    <td>: {{item.email}}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Soft skill</td>
                    <td>: {{item.soft_skill}}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Hard skil</td>
                    <td>: {{item.hard_skill}}</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td>Interest</td>
                    <td>: {{item.interest}}</td>
                    <td></td>
                    <td></td>
                </tr>
               <br>
                <tr>
                    <td><router-link :to="{ name: 'updateData', params: { id: item.id}}" class="btn btn-sm btn-primary text-white">update <img src="../assets/update.png" alt="" width="23px"></router-link></td>
                    <td><button class="btn btn-sm btn-danger" @click="deletestudentfunc(item.id)">delete <img src="../assets/delete.png" alt="" width="18px"></button></td>
                    <td></td>
                    <td><img src="../assets/male.png" alt="" v-show="item.jenis_kelamin == 'Male'" width="30px"></td>
                    <td><img src="../assets/female.png" alt="" v-show="item.jenis_kelamin == 'Female'" width="30px"></td>
                </tr>
            </table>
        </div>
    </div>
        <succes v-show="succes" :textsucces="textsucces"></succes>
  </div>
</template>

<script>
import studentservice from '../service/studentservice'
export default {
    name: 'contentComponent',
    methods : {
        getStudent(){
            studentservice.getAllstudent()
                .then(response => {
                    this.studentdata = response.data;
                })
                .catch(e =>{
                    console.log(e);
                });
        },
        deletestudentfunc(id){
            let scope = this;
            if(confirm("yakin ingin menghapus data anda?")){
                studentservice.deleteStudent(id)
                    .then(response => {
                        console.log(response.data);
                        //   
                        scope.$emit('deleteEmit');
                    })
                    .catch(e => {
                        console.log(e);
                    });

            }else{
                alert("hapus dibatalkan")
            }
        }
    },
    mounted(){
        this.getStudent();
    },
    data(){
        return{
            studentdata : null,
            textsucces : "submit",
            succes : false
        }
    },
}
</script>

<style scoped>
.btn-danger img{
    margin-left: 4px;
    margin-bottom: 3px;
}


</style>