import http from  "../http-common";

class studentservice {
    create(data){
        return http.post("/Student/insert", data);
    }

    getAllstudent(){
        return http.get("/Student/getAll");
    } 

    deleteStudent(id) {
        return http.delete(`/Student/delete/${id}`);
    }
    
    updateStudent(id, data) {
        return http.put(`/Student/update/${id}`, data);
    }

    getStudentId(id) {
        return http.get(`/Student/getstudentbyId/${id}`);
      }
}
5
export default new studentservice();