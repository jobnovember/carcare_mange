<template>
<div class="container">
    <div class="card">
        <div class="card-header">
            <h3>Add Users</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="ชื่อ" v-model="newItem.name"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" placeholder="อีเมล์" v-model="newItem.email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" placeholder="รหัสผ่าน" v-model="newItem.password"/>
                </div>
                <div class="form-group">
                    <label>Re-Password</label>
                    <input type="password" class="form-control" placeholder="ยื่นยันรหัสผ่าน" v-model="re_password"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Add" :disabled="isMatch">
                </div> 
            </form>
        </div>
    </div>
</div>
</template>
<script>
import { db } from './config/db';

export default {
    components: {
        name: 'UserAdd'
    }, 
    firebase: {
        users: db.ref('users')
    },
    data() {
        return {
            newItem: {
                name: '',
                email: '',
                password: '',
                status: 'offline'
            },
            re_password: ''
        }
    },
    method: {
        addItem() {
            this.$firebaseRefs.users.push({
                name: this.newItem.name,
                email: this.newItem.email,
                password: this.newItem.password,
                status: this.newItem.status
            })
            this.newItem.name = '';
            this.newItem.email = '';
            this.newItem.password = '';
            this.re_password = '';
            this.newItem.status = '';
            this.$router.push('/user');
        }
    },
    computed: {
        isMatch() {
            return ((this.re_password != this.newItem.password) && this.re_password != '');
        }
    }
}
</script>
