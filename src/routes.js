import UserAdd from './components/User/Add.vue'
import UserEdit from './components/User/Edit.vue'
import UserList from './components/User/List.vue'

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
    }
];

export default routes;