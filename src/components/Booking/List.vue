<template>
<div class="container">
    <h1>Booking</h1> 
    {{date}}
    <div style="text-aling:center">
        <input name="date" type="date" v-model="date" class="form-control col-sm-6" @change="checkTime()"> 
    </div>
    <label>ชื่อลูกค้า</label>
    <select v-model="name" class="form-control col-sm-6" placeholder="ชื่อลูกค้า">
        <option value="" disabled selected>เลือกชื่อ</option>
        <option v-for="user of users" :value="user.name" @change="checkTime()"> 
            {{user.name}}
        </option>
    </select>
    <table class="table table-sm">
        <div style="margin: .5em; padding: .5em;">
        </div>
        <thead>
            <tr>
                <th>เวลา</th>
                <th>สถานะ</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in times">
                <td style="text-align:center;">
                    {{item.name}}
                </td>
                <td>
                    <div v-if="(item.status == 'none')||(item.status == '')" style="text-align:center;">
                        <button @click="booking(item.name)" class="col-sm-6 btn btn-secondary" :disabled="validate">
                            จอง
                        </button>
                    </div>
                    <div v-else-if="(item.status == 'waiting')" style="text-align:center;">
                        <h4>กำลังดำเนินการ</h4>
                        <button class="btn btn-success"  style="margin-left:.5em;" @click="finished(item.name, item.key)">
                            เสร็จแล้ว
                        </button>
                    </div>
                    <div v-else-if="(item.status == 'finished')" style="text-align:center;">
                        <h4>ล้างเสร็จแล้ว</h4>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>
<script>
    /* eslint-disable */
    // eslint-disable-next-line
    import { db } from '../../config/db';
    export default {
       components: {
           name: 'BookingList'
       },
       firebase: {
           users: db.ref('users'),
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
           p: db.ref('p'),
       },
        data() {
            return {
                name: "",
                date: "",
                times: { 
                    "a": {
                        name: "8.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "b": {
                        name: "8.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "c": {
                        name: "9.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "d": {
                        name: "9.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "e": {
                        name: "10.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "f": {
                        name: "10.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "g": {
                        name: "11.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "h": {
                        name: "11.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "i": {
                        name: "13.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "j": {
                        name: "13.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "k": {
                        name: "14.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "l": {
                        name: "14.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "m": {
                        name: "15.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "n": {
                        name: "15.30",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "o": {
                        name: "16.00",
                        status: "none",
                        date:"",
                        key: ""
                    },
                    "p": {
                        name: "16.30",
                        status: "none",
                        date:"",
                        key: ""
                    }
                }
            }
       },
        created() {
           this.setDate();
           setTimeout(() => this.checkTime(), 1200);
        },
        computed: {
            validate: function() {
                if(this.date != '' && this.name != '') {return false; } else {return true;}
            }
        }, 
        methods: {
            booking(time) {
                this.$router.push({name:'BookingAdd', params: {date: this.date, time: time, name: this.name}});
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
            checkTime() {
                this.resetTime();
                var date = this.date;
                var i;
                for(i = 0; i <= this.a.length-1; i++) {
                    if(this.a[i].date == date){
                        this.times["a"].key = this.a[i][".key"];
                        this.times["a"].status = this.a[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.b.length-1; i++) {
                    if(this.b[i].date == date){
                        this.times["b"].key = this.b[i][".key"];
                        this.times["b"].status = this.b[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.c.length-1; i++) {
                    if(this.c[i].date == date){
                        this.times["c"].key = this.c[i][".key"];
                        this.times["c"].status = this.c[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.d.length-1; i++) {
                    if(this.d[i].date == date){
                        this.times["d"].key = this.d[i][".key"];
                        this.times["d"].status = this.d[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.e.length-1; i++) {
                    if(this.e[i].date == date){
                        this.times["e"].key = this.e[i][".key"];
                        this.times["e"].status = this.e[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.f.length-1; i++) {
                    if(this.f[i].date == date){
                        this.times["f"].key = this.f[i][".key"];
                        this.times["f"].status = this.f[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.g.length-1; i++) {
                    if(this.g[i].date == date){
                        this.times["g"].key = this.g[i][".key"];
                        this.times["g"].status = this.g[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.h.length-1; i++) {
                    if(this.h[i].date == date){
                        this.times["h"].key = this.h[i][".key"];
                        this.times["h"].status = this.h[i].status;
                        break;
                    }
                }
                for(var c = 0; c <= this.i.length-1; c++) {
                    if(this.i[c].date == date){
                        this.times["i"].key = this.i[c][".key"];
                        this.times["i"].status = this.i[c].status;
                        break;
                    }
                }
                for(i = 0; i <= this.j.length-1; i++) {
                    if(this.j[i].date == date){
                        this.times["j"].key = this.j[i][".key"];
                        this.times["j"].status = this.j[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.k.length-1; i++) {
                    if(this.k[i].date == date){
                        this.times["k"].key = this.k[i][".key"];
                        this.times["k"].status = this.k[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.l.length-1; i++) {
                    if(this.l[i].date == date){
                        this.times["l"].key = this.l[i][".key"];
                        this.times["l"].status = this.l[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.m.length-1; i++) {
                    if(this.m[i].date == date){
                        this.times["m"].key = this.m[i][".key"];
                        this.times["m"].status = this.m[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.n.length-1; i++) {
                    if(this.n[i].date == date){
                        this.times["n"].key = this.n[i][".key"];
                        this.times["n"].status = this.n[i].status;
                        break;
                    }
                }
                for(i = 0; i <= this.o.length-1; i++) {
                    if(this.o[i].date == date) { 
                        this.times["o"].key = this.o[i][".key"]; 
                        this.times["o"].status = this.o[i].status;
                        break;
                    }
                }
                for(i; i <= this.p.length-1; i++) {
                    if(this.p[i].date == date){
                        this.times["p"].key = this.p[i][".key"];
                        this.times["p"].status = this.p[i].status;
                        break;
                    }
                }
            },
            resetTime() {
                this.times["a"].status = "";
                this.times["b"].status = "";
                this.times["c"].status = "";
                this.times["d"].status = "";
                this.times["e"].status = "";
                this.times["f"].status = "";
                this.times["g"].status = "";
                this.times["h"].status = "";
                this.times["i"].status = "";
                this.times["j"].status = "";
                this.times["k"].status = "";
                this.times["l"].status = "";
                this.times["m"].status = "";
                this.times["n"].status = "";
                this.times["o"].status = "";
                this.times["p"].status = "";
            },
            finished(time,key) {
                switch(time){
                    case "8.00": 
                        this.times["a"].date = this.date;
                        this.times["a"].status = "finished";
                        this.$firebaseRefs.a.child(key).set(this.times["a"]);
                        break;
                    case "8.30":
                        this.times["b"].date = this.date;
                        this.times["b"].status = "finished";
                        this.$firebaseRefs.b.child(key).set(this.times["b"]);
                        break;
                    case "9.00":
                        this.times["c"].date = this.date;
                        this.times["c"].status = "finished";
                        this.$firebaseRefs.c.child(key).set(this.times["c"]);
                        break;
                    case "9.30":
                        this.times["d"].date = this.date;
                        this.times["d"].status = "finished";
                        this.$firebaseRefs.d.child(key).set(this.times["d"]);
                        break;
                    case "10.00":
                        this.times["e"].date = this.date;
                        this.times["e"].status = "finished";
                        this.$firebaseRefs.e.child(key).set(this.times["e"]);
                        break;
                    case "10.30":
                        this.times["f"].date = this.date;
                        this.times["f"].status = "finished";
                        this.$firebaseRefs.f.child(key).set(this.times["f"]);
                        break;
                    case "11.00":
                        this.times["g"].date = this.date;
                        this.times["g"].status = "finished";
                        this.$firebaseRefs.g.child(key).set(this.times["g"]);
                        break;
                    case "11.30":
                        this.times["h"].date = this.date;
                        this.times["h"].status = "finished";
                        this.$firebaseRefs.h.child(key).set(this.times["h"]);
                        break;
                    case "13.00":
                        this.times["i"].date = this.date;
                        this.times["i"].status = "finished";
                        this.$firebaseRefs.i.child(key).set(this.times["i"]);
                        break;
                    case "13.30":
                        this.times["j"].date = this.date;
                        this.times["j"].status = "finished";
                        this.$firebaseRefs.j.child(key).set(this.times["j"]);
                        break;
                    case "14.00":
                        this.times["k"].date = this.date;
                        this.times["k"].status = "finished";
                        this.$firebaseRefs.k.child(key).set(this.times["k"]);
                        break;
                    case "14.30":
                        this.times["l"].date = this.date;
                        this.times["l"].status = "finished";
                        this.$firebaseRefs.l.child(key).set(this.times["l"]);
                        break;
                    case "15.00":
                        this.times["m"].date = this.date;
                        this.times["m"].status = "finished";
                        this.$firebaseRefs.m.child(key).set(this.times["m"]);
                        break;
                    case "15.30":
                        this.times["n"].date = this.date;
                        this.times["n"].status = "finished";
                        this.$firebaseRefs.n.child(key).set(this.times["n"]);
                        break;
                    case "16.00":
                        this.times["o"].date = this.date;
                        this.times["o"].status = "finished";
                        this.$firebaseRefs.o.child(key).set(this.times["o"]);
                        break;
                    case "16.30":
                        this.times["p"].date = this.date;
                        this.times["p"].status = "finished";
                        this.$firebaseRefs.p.child(key).set(this.times["p"]);
                        break;
                }
                this.checkTime();
            },

       }
   }
</script>
<style>
    table {
        margin-top: .5em;
    }
</style>