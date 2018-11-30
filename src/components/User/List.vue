<template>
<div>
    <h1>List Users</h1>
    <table class="table table-sm">
        <thead>
            <tr>
                <th>User </th>
                <th>Status</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of items" :key="item['.key']">
                <td>{{item.name}} | {{item.email}}</td>
                <td>{{item.status}}</td>
                <td>
                    <router-link :to="{ name: 'UserEdit', params: {id: item['.key']}}" class="btn btn-warning">
                        Edit
                    </router-link>
                </td>
                <td>
                    <button @click="deleteItem(item['.key'])" class="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
import { db } from '../../config/db'

export default {
    components: {
        name: 'UserList'
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

