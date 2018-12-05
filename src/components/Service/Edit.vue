<template>
<div>
    <div class="card">
        <div class="card-header">
            <h3>Edit Service</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateItem">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="newItem.name"/>
                </div>
                <div class="form-group">
                    <label>Price</label>
                    <input type="number" class="form-control" v-model="newItem.price"/>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select class="form-control" v-model="newItem.type">
                        <option>sport</option>
                        <option>X</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" vaule="Update">
                </div>
            </form>
        </div>
    </div>
</div>
</template>
<script>
import { db } from '../../config/db';
export default {
    components: {
        name: 'ServiceEdit'
    },
    firebase: {
        items: db.ref('service'),
        itemsObj: {
            source: db.ref('service'),
            asObject: true
        }
    },
    data() {
        return {
            newItem: {}
        }
    },
    created() {
        let item = this.itemsObj[this.$route.params.id]
        this.newItem = {
            name: item.name,
            price: item.price,
            type: item.type
        }
    },
    methods: {
        updateItem() {
            this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem);
            alert("Edited Service");
            this.$router.push('/service');
        }
    }
}
</script>