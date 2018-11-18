<template>
<div class="container">
    <div class="card">
        <div class="card-header">
            <h3>Edit Users</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateItem">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="newItem.name"/>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="Email" class="form-control" v-model="newItem.email"/>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="text" class="form-control" v-model="newItem.password"/>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="Update Item"/>
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import { db } from '../../config/db'

export default {
    components: {
        name: 'UserEdit'
    },
    firebase: {
        items: db.ref('users'),
        itemsObj: {
            source: db.ref('users'),
            asObject: true
        }
    },
    data() {
        return {
            newItem: {
                status: 'offline'
            } 
        }
    },
    created() {
        let item = this.itemsObj[this.$route.params.id]
        this.newItem =  {
            name: item.name,
            email: item.email,
            password: item.password
        }
    },
    methods: {
        updateItem() {
            this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
            this.$router.push('/user')
        }
    }
}
</script>

