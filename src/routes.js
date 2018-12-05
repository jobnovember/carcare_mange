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
// -- Orders 
import OrderList from './components/Order/List.vue'
// -- service
import ServiceAdd from './components/Service/Add.vue'
import ServiceList from './components/Service/List.vue'
import ServiceEdit from './components/Service/Edit.vue'
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
        path: '/booking/add/:date/:time/:name',
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
    },
    {
        name: 'OrderList',
        path: '/Orders',
        component: OrderList
    },
    {
        name: 'ServiceAdd',
        path: '/service/add',
        component: ServiceAdd 
    },
    {
        name: 'ServiceList',
        path: '/service',
        component: ServiceList
    },
    {
        name: 'ServiceEdit',
        path: '/service/edit/:id',
        component: ServiceEdit
    }
];

export default routes;