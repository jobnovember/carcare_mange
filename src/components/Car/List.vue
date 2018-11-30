<template>
<div>
    <h1>List Cars</h1>
    <table class="table table-sm">
        <thead>
            <tr>
                <th>Brand</th>
                <th>Name</th>
                <th>Type</th>
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of items" :key="item['.key']">
                <td>{{item.brand}}</td>
                <td>{{item.name}}</td>
                <td>{{item.type}}</td>
                <td class="action">
                    <router-link :to="{ name: 'CarEdit', params: {id: item['.key']}}" class="btn btn-warning">
                        Edit
                    </router-link>
                </td>
                <td class="action">
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
        name: 'CarList'
    }, 
    data() {
        return {
            item: []
        }
    },
    firebase: {
        items: db.ref('cars')
    },
    methods: {
        deleteItem(key) {
            this.$firebaseRefs.items.child(key).remove();
        }
    }
}
</script>
<style>
    th {
        text-align: center;
    }
    tr td {
        border-left: solid 1px #ccc; 
    }
    .action {
        text-align: center;
    }
</style>

