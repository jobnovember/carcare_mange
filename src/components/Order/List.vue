<template>
<div>
    <div class="card">
        <div class="card-header">
            <h1>ออเดอร์</h1>
        </div>
        <div class="card-body">
            <div style="text-aling:center">
                <input name="date" type="date" v-model="date" class="form-control col-sm-6" @change="fetch_order()"> 
            </div>
            <div class="alert alert-primary" v-if="order_date == ''">
                <h4>ยังไม่มีออเดอร์</h4>
            </div>
            <table class="table table-bordered" v-for="(order, i) of order_date" :key="order['.key']">
                <thead class="bg-dark">
                    <tr>
                        <td style="color:white;"><b style="font-size:1.5em;">ชื่อ </b>{{order.user_name}}</td>
                        <td>
                            <button class="btn btn-danger; bg-danger" @click="deleteItem(order['.key'])">
                                ลบรายการออเดอร์
                            </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>วันที่</td>
                        <td>{{order.date}}</td>
                    </tr>
                    <tr>
                        <td>เวลา</td>
                        <td>{{order.time}}</td>
                    </tr>
                    <tr> 
                        <td>ยี่ห้อรถ</td>
                        <td>{{order.car_name}}</td>
                    </tr>
                    <tr>
                        <td>บริการ</td>
                        <td>
                            <tr v-for="(item , index) of order.orders" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{item}}</td>
                            </tr>
                        </td>
                    </tr>
                    <tr>
                        <td><h2>ราคา</h2></td>
                        <td><h3>{{formatPrice(order.sum)}} บาท</h3></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
</template>
<script>
    import { db } from '../../config/db';
    export default {
        coponents: {
            name: 'OrderList'
        },
        firebase: {
            orders: db.ref("bookings")        
        },
        data() {
           return {
               date: '',
               order_date: []
           } 
        },
        created() {
            this.setDate();
            setTimeout(() => this.fetch_order(), 1400);
        },
        methods: {
            formatPrice(value) {
               let val = (value/1).toFixed(2).replace(',','.');
               return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            setDate() {
                var d = new Date();
                var day = d.getDate()+"";
                if(day.length < 2) {
                    day = "0"+day;
                }
                var month = d.getMonth();
                var year = d.getFullYear();
                var data = year+"-"+(month+1)+"-"+day;
                this.date = data;
            },
            fetch_order() {
                this.order_date = [];
                for(var i =0; i< this.orders.length; i++) {
                    if(this.orders[i].date == this.date) {
                        this.order_date.push(this.orders[i]);
                    }
                }
            },
            splite_number(number){
                number = number.replace('.','');
                return ""+number; 
            },
            deleteItem(key) {
                this.$firebaseRefs.orders.child(key).remove();
                this.fetch_order();
            }
        },

    }
</script>