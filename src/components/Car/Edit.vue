<template>
<div>
    <div class="card">
        <div class="card-header">
            <h3>Edit Cars</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="updateItem">
                <div class="form-group">
                    <label>Brand</label>
                    <input type="text" class="form-control" v-model="newItem.brand"/>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="newItem.name"/>
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
                    <input type="submit" class="btn btn-primary" value="Update">
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
        name: 'CarEdit'
    },
    firebase: {
        items: db.ref('cars'),
        itemsObj: {
            source: db.ref('cars'),
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
            brand: item.brand,
            name: item.name,
            type: item.type
        }
    },
    methods: {
        updateItem() {
            this.$firebaseRefs.items.child(this.$route.params.id).set(this.newItem)
            this.$router.push('/car')
        }
    }
}
</script>

