
import home from "./pages/home.vue"
import add from "./pages/add.vue"
import updateform from "./pages/updateform.vue"

export default[
    {
        path : "/",
        component : home,
    },
    {
        path : "/add",
        component : add,
    },
    {
        path : "/update/:id",
        name : 'updateData',
        component : updateform,
    }
]