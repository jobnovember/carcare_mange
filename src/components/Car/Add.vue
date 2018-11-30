<template>
<div>
    <div class="card">
        <div class="card-header">
            <h3>Add Cars</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div class="form-group">
                    <label>Brand</label>
                    <input type="text" class="form-control" placeholder="ยี่ห้อ" v-model="newItem.brand"/>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" placeholder="ชื่อ" v-model="newItem.name"/>
                </div>
                <div class="form-group">
                    <label>Type</label>
                    <select v-model="newItem.type" class="form-control">
                        <option>sport</option>
                        <option>X</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="add">
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
        name: 'CarAdd',
    },
    firebase: {
        cars: db.ref('cars')
    },
    data() {
        return {
            newItem: {
                brand: '',
                name: '',
                type: ''
            }
        }
    },
    methods: {
        addItem() {
            this.$firebaseRefs.cars.push({
                brand: this.newItem.brand,
                name: this.newItem.name,
                type: this.newItem.type
            })
            this.newItem.brand = '';
            this.newItem.name = '';
            this.newItem.type = '';
            this.$router.push('/car');
        }
    }
}
</script>

