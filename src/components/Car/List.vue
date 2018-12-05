<template>
<div>
    <CarAdd></CarAdd>
    <div class="card">
        <div class="card-header">
            <h3>รายการรถ</h3>
        </div>
        <div class="card-body">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>ยี่ห้อรถ</th>
                        <th>ชื่อรุ่นรถ</th>
                        <th>ประเภทของรถ</th>
                        <th colspan="2">การกระทำ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item of items" :key="item['.key']">
                        <td>{{item.brand}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.type}}</td>
                        <td class="action">
                            <router-link :to="{ name: 'CarEdit', params: {id: item['.key']}}" class="btn btn-warning">
                            แก้ไข 
                            </router-link>
                        </td>
                        <td class="action">
                            <button @click="deleteItem(item['.key'])" class="btn btn-danger">
                            ลบ
                            </button>
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
import CarAdd from './Add.vue';

export default {
    components: {
        name: 'CarList',
        'CarAdd': CarAdd
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

