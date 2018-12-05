<template>
<div>
    <serviceAdd></serviceAdd>
    <div class="card">
        <div class="card-header">
            <h3>รายชื่อบริการ</h3>
        </div>
        <div class="card-body">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th>ลำดับ</th>
                        <th>ชื่อ</th>
                        <th>ราคา</th>
                        <th>ประเภท</th>
                        <th colspan="2">การกระทำ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item ,index) of items" :key="item['.key']">
                        <td style="text-align:center;">{{index+1}}</td> 
                        <td>{{item.name}}</td>
                        <td style="text-align:right;">{{formatPrice(item.price)}} บาท</td>
                        <td style="text-align:center;">{{item.type}}</td>
                        <td class="action">
                            <router-link :to="{ name: 'ServiceEdit', params: {id: item['.key']}}" class="btn btn-warning">
                                แก้ไข
                            </router-link>
                        </td>
                        <td class="action">
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
    import ServiceAdd from './Add.vue';
    export default {
        components: {
            name: 'ServiceList',
            'ServiceAdd': ServiceAdd
        },
        data() {
            return {
                item:[]
            }
        },
        firebase: {
            items: db.ref('service')
        },
        methods: {
            deleteItem(key) {
                this.$firebaseRefs.items.child(key).remove();
            },
            formatPrice(value) {
               let val = (value/1).toFixed(2).replace(',','.');
               return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
        }
    }
</script>