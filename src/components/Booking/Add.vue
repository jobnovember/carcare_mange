<template>
<div>
    <div class="card">
        <div class="card-header">
            <h3>จอง</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div><b>จอง ณ วันที่ </b>: {{date}}</div>
                <div><b>เวลา </b>: {{time}} น.</div>
                <div class="form-group">
                <b> ชื่อ : </b>{{name}}
                </div>
                <div class="form-group">
                    <label>เลือกรถ</label>
                    <select v-model="carname" @change="fetch_service()" class="form-control">
                        <option v-for="(item, index) of cars">{{item.name}}</option>
                    </select>
                </div>
                <button type="button" @click="reset()" class="btn btn-default" style="float:right; margin-bottom:.5em;">Reset</button>
                <table class="table table-bodered">
                    <thead class="thead-dark">
                        <tr style="text-align: center;">
                            <td>...</td>
                            <td>บริการ</td>
                            <td>ราคา</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item of service">
                           <td style="text-align: center;">
                            <input type="checkbox" class="btn btn-default" v-model="orders" :value="item.name" @change="check_price()">
                           </td>
                           <td>{{item.name}}</td>
                           <td style="text-align: right;">{{formatPrice(item.price)}} บาท </td> 
                        </tr>
                        <tr>
                            <td>
                                รวม 
                            </td>
                            <td colspan="2" style="text-align: center;">
                                {{ formatPrice(sum) }}
                                <span>บาท</span>
                            </td>
                        </tr>
                    </tbody>
                </table> 
                <button type="submit" class="btn btn-default" style="float:right;">ยืนยัน</button>
            </form> 
        </div>
    </div>
</div>
</template>
<script>
   import { db } from '../../config/db';
   export default {
       components: {
           name: 'BookingAdd'
       },
       data() {
           return {
               date: '',
               time: '',
               name: '',
               car: '',
               cars:{},
               carname:'',
               service:[],
               type: '',
               orders: [],
               price: [],
               sum:''
           }
       },
       firebase: {
           users: db.ref('users'),
           services: db.ref('service'),
           bookings: db.ref('bookings'),
           a: db.ref('a'),
           b: db.ref('b'),
           c: db.ref('c'),
           d: db.ref('d'),
           e: db.ref('e'),
           f: db.ref('f'),
           g: db.ref('g'),
           h: db.ref('h'),
           i: db.ref('i'),
           j: db.ref('j'),
           k: db.ref('k'),
           l: db.ref('l'),
           m: db.ref('m'),
           n: db.ref('n'),
           o: db.ref('o'),
           p: db.ref('p')
       },
       methods: {
           addItem() {
                this.$firebaseRefs.bookings.push({
                    date: this.date,
                    time: this.time,
                    user_name: this.name,
                    car_name: this.carname,
                    orders: this.orders,
                    sum: this.sum
                });
                switch(this.time){
                    case "8.00": 
                        this.$firebaseRefs.a.push({date:this.date, status: 'waiting'});
                        break;
                    case "8.30":
                        this.$firebaseRefs.b.push({date:this.date, status: 'waiting'});
                        break;
                    case "9.00":
                        this.$firebaseRefs.c.push({date:this.date, status: 'waiting'});
                        break;
                    case "9.30":
                        this.$firebaseRefs.d.push({date:this.date, status: 'waiting'});
                        break;
                    case "10.00":
                        this.$firebaseRefs.e.push({date:this.date, status: 'waiting'});
                        break;
                    case "10.30":
                        this.$firebaseRefs.f.push({date:this.date, status: 'waiting'});
                        break;
                    case "11.00":
                        this.$firebaseRefs.g.push({date:this.date, status: 'waiting'});
                        break;
                    case "11.30":
                        this.$firebaseRefs.h.push({date:this.date, status: 'waiting'});
                        break;
                    case "13.00":
                        this.$firebaseRefs.i.push({date:this.date, status: 'waiting'});
                        break;
                    case "13.30":
                        this.$firebaseRefs.j.push({date:this.date, status: 'waiting'});
                        break;
                    case "14.00":
                        this.$firebaseRefs.k.push({date:this.date, status: 'waiting'});
                        break;
                    case "14.30":
                        this.$firebaseRefs.l.push({date:this.date, status: 'waiting'});
                        break;
                    case "15.00":
                        this.$firebaseRefs.m.push({date:this.date, status: 'waiting'});
                        break;
                    case "15.30":
                        this.$firebaseRefs.n.push({date:this.date, status: 'waiting'});
                        break;
                    case "16.00":
                        this.$firebaseRefs.o.push({date:this.date, status: 'waiting'});
                        break;
                    case "16.30":
                        this.$firebaseRefs.p.push({date:this.date, status: 'waiting'});
                        break;
                }
                this.date = '';
                this.time = '';
                this.name = '';
                this.car = '';
                this.cars = {};
                this.carname = '';
                this.service = [];
                this.type = '';
                this.orders = [];
                this.price = [];
                this.sum = '';
                alert("จองแล้ว");
                this.$router.push('/booking');
           },
           fetch_service() {
               this.type= '';
               this.service= [];
               for(var i=0; i< this.cars.length; i++){
                   if(this.cars[i].name == this.carname) {
                       this.type = this.cars[i].type;
                       break;
                   }
               }

                for(i =0; i< this.services.length; i++) {
                    if(this.services[i].type == this.type) {
                        this.service.push(this.services[i]);
                    }
                }
           },
           check_price() {
               this.price = [];
               for(var i=0; i<this.orders.length; i++) {
                   for(var y=0; y<this.services.length; y++){
                       if(this.orders[i] == this.services[y].name) {
                           this.price.push(this.services[y].price);
                       }
                   }
               }
               this.cal_sum();
           },
           cal_sum() {
               this.sum = 0;
               for(var i=0; i< this.price.length; i++){
                   this.sum += parseInt(this.price[i]);
               }
           },
           reset() {
               this.sum = 0;
               this.price = [];
               this.orders = [];
           },
           formatPrice(value) {
               let val = (value/1).toFixed(2).replace(',','.');
               return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
           }
       },

       created() {
            this.date = this.$route.params.date;
            this.time = this.$route.params.time;
            this.name = this.$route.params.name;
            for(var i =0; i< this.users.length; i++) {
                if(this.name == this.users[i].name) {
                    this.cars = this.users[i].cars;
                    break;
                }
            }

       }
   }     
</script>