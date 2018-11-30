// -- User
import UserAdd from './components/User/Add.vue'
import UserEdit from './components/User/Edit.vue'
import UserList from './components/User/List.vue'
// -- Car
import CarAdd from './components/Car/Add.vue'
import CarEdit from './components/Car/Edit.vue'
import CarList from './components/Car/List.vue'
// -- Booking 
import BookingAdd from './components/Booking/Add.vue'
import BookingEdit from './components/Booking/Edit.vue'
import BookingList from './components/Booking/List.vue'

const routes = [
    {
        name: 'UserAdd',
        path: '/user/add',
        component: UserAdd
    },
    {
        name: 'UserEdit',
        path: '/user/edit/:id',
        component: UserEdit
    },
    {
        name: 'UserList',
        path: '/user',
        component: UserList
    },
    {
        name: 'CarAdd',
        path: '/car/add',
        component: CarAdd
    },
    {
        name: 'CarEdit',
        path: '/car/edit/:id',
        component: CarEdit
    },
    {
        name: 'CarList',
        path: '/car',
        component: CarList
    },
    {
        name: 'BookingAdd',
        path: '/booking/add',
        component: BookingAdd
    },
    {
        name: 'BookingEdit',
        path: '/booking/edit/:id',
        component: BookingEdit
    },
    {
        name: 'BookingList',
        path: '/booking',
        component: BookingList
    }
];

export default routes;