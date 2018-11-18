<template>
<div class="container">
    <h1>List Users</h1>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Status</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of items" :key="item['.key']">
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
                <td>{{item.password}}</td>
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

