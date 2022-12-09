<template>
  <div class="input">
    <div class="isi" v-show="!succes">
        <form @submit.prevent="inputstudent">
        <div class="text mt-3"><p><center><strong> <h2>{{textstudent}}</h2> </strong></center></p></div>
            <div class="isikonten">
                <div class="satu" >
                    <label for="">Student Name</label>
                        <div class="input-group mb-3">
                            <input v-model="studentdata.nama"
                                 type="text" class="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1" required>
                            </div>
                        <p></p>

                        <div class="dua">
                            <div>
                                <label for="">Student Age</label>
                                <div class="input-group mb-3">
                            <input v-model="studentdata.umur"
                                 type="number" class="form-control" placeholder="Enter Age" aria-label="Username" aria-describedby="basic-addon1" required>
                            </div>
                                <p></p>
                            </div>

                                <div class="gender">
                                    <label for="">Gender</label>
                                    <div class="input-group mb-3">
                                    <select v-model="studentdata.jenis_kelamin"
                                        class="custom-select" id="inputGroupSelect01" required>
                                        <option>--Pilih--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    </div>
                                </div>
                                
                        </div>
                    <div class="tiga">
                        <label for="">Email Student</label>
                        <div class="input-group mb-3">
                            <input v-model="studentdata.email"
                                 type="text" class="form-control" placeholder="Enter Email" required aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                    </div>
                    <p></p>
                </div>


                <div class="empat">
                    <div>
                        <label for="">Soft Skill</label>
                    <div class="input-group mb-3">
                            <input v-model="studentdata.soft_skill"
                                 type="text" class="form-control" required placeholder="Enter Soft Skill" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                    <p></p>
                    </div>
                    <label for="">Hard Skill</label>
                    <div class="input-group mb-3">
                            <input v-model="studentdata.hard_skill"
                                 type="text" class="form-control" required placeholder="Enter Hard Skill" aria-label="Username" aria-describedby="basic-addon1">
                            </div>
                    <p></p>
                    <label for="">Interest</label>
                            <div class="input-group mb-3">
                                    <select v-model="studentdata.interest"
                                        class="custom-select" id="inputGroupSelect01" required>
                                        <option>--Pilih--</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Network">Network</option>
                                        <option value="Web Frontend">Web Frontend</option>
                                        <option value="Web Backend">Web Backend</option>
                                        <option value="Mobile Apps">Mobile Apps</option>
                                    </select>
                                    </div>
                </div>
                </div>

                <div class="text">
                    <label for="">Self Deskripsi</label>
                    <p><textarea
                            v-model="studentdata.deskripsi_diri"
                            type="text" 
                            name="" 
                            id="alamatrumah" 
                            cols="76" rows="6" 
                            placeholder="Enter Self Deskripsi"  
                            required></textarea></p>
                </div>
                <div class="buttonsubmit">
                    <button type="submit" class="buttonValue" role="button">{{ buttonValue }}</button>
                </div>
                </form>
            </div>
            <succes v-show="succes" :textsucces="textsucces"></succes>
    </div>
</template>

<script>
import studentservice from '../service/studentservice.js';
import succes from '../components/succes.vue'
export default {
    name: 'breadcrumbComponent',
    data(){
        return{
            studentdata:{
                "deskripsi_diri" : null,
                "email" : null,
                "hard_skill" : null,
                "interest" : null,
                "jenis_kelamin" : null,
                "nama" : null,
                "soft_skill" : null,
                "umur" : null
            },
            succes : false,
            buttonValue : "Submit",
            textsucces : "submit",
            textstudent : " Add Data Student"
            
        }
    },
    methods : {
        inputstudent(){
            let data = this.studentdata;
            if(this.buttonValue == "Submit"){
                studentservice.create(data)
                    .then(response => {
                        console.log(response.data);
                        this.succes = true
                        this.textsucces = "Submited"
                })
                .catch(e => {
                    console.log(e);
                })
            }else{
                studentservice.updateStudent(data.id, data)
                    .then(response => {
                        console.log(response.data);
                        this.succes = true
                        this.textsucces = "updated"
                    })
                    .catch(e => {
                        console.log(e);
                    });
            }
        },
        getStudentId(id){
            studentservice.getStudentId(id)
            .then(response =>{
                this.studentdata = response.data;
                this.textstudent = "Update Data Student"
            })
            .catch(e =>{
                console.log(e)
            })
        }
    },
    components : {
        succes
    },
    mounted(){
        if(this.$route.name == 'updateData'){
            this.getStudentId(this.$route.params.id);
            this.buttonValue = "update"
        }
    }
}
</script>

<style scoped>
    .isi{
        border: 1px solid aqua;
        width: 700px;
        height: 600px;
        margin-left: 27%;
        border-radius: 5px;
    }
    .isikonten{
        display: flex;
        justify-content: space-around;

    }
    .isikonten input{
        border-radius: 4px;
    }

    .dua{
        display: flex;
    }
    .text {
        margin-left: 43px;
    }
    .gender{
        margin-left: 8px;
    }
    .buttonValue{
        background-color: blue;
        border-radius: 3px;
        margin-left: 55px;
        width: 80px;
        height: 30px;
        color: white;
    }
    .text textarea{
        border-radius: 4px;
    }
    .isikonten select{
        border-radius: 4px;
        width: 100px;
        height: 36px;
    }
</style>