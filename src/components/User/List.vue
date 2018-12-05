<template>
<div>
    <UserAdd></UserAdd>
    <div class="card">
        <div class="card-head">
            <h3>รายชื่อลูกค้า</h3>
        </div>
        <div class="card-body">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>ชื่อลูกค้า</th>
                        <th>E-mail</th>
                        <th>สถานะ</th>
                        <th colspan="2">การกระทำ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of items" :key="item['.key']">
                        <td>{{item.name}}</td>
                        <td>{{item.email}}</td>
                        <td>{{item.status}}</td>
                        <td>
                            <router-link :to="{ name: 'UserEdit', params: {id: item['.key']}}" class="btn btn-warning">
                                แก้ไข 
                            </router-link>
                        </td>
                        <td>
                            <button @click="deleteItem(item['.key'])" class="btn btn-danger">ลบ</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
import { db } from '../../config/db';
import UserAdd from './Add.vue';
export default {
    components: {
        name: 'UserList',
        'UserAdd': UserAdd
    },
    data() {
        return {
            item: []
        }
    },
    firebase: {
        items: db.ref('users')
    },
    methods: {
        deleteItem(key) {
            this.$firebaseRefs.items.child(key).remove();
        }
    }
}
</script>

