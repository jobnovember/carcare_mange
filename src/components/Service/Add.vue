<template>
<div>
    <div class="card">
        <div class="card-header">
            <h3>เพิ่มบริการ</h3>
        </div>
        <div class="card-body">
            <form v-on:submit.prevent="addItem">
                <div class="form-group">
                    <label>ชื่อบริการ</label>
                    <input type="text" class="form-control" placeholder="ชื่อบริการ" v-model="newItem.name"/>
                </div>
                <div class="form-group">
                    <label>ราคา</label>
                    <input type="text" class="form-control" placeholder="ราคา" v-model="newItem.price"/>
                </div>
                <div class="form-group">
                    <label>ประเภท</label>
                    <select v-model="newItem.type" class="form-control">
                        <option>sport</option>
                        <option>X</option>
                        <option>M</option>
                        <option>L</option>
                    </select>
                </div>
                <div class="form-group">
                    <input type="submit" class="btn btn-primary" value="เพิ่ม">
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
            name: 'ServiceAdd'
        },
        firebase: {
            service: db.ref('service')
        },
        data() {
            return {
                newItem: {
                    name: '',
                    price: '',
                    type: ''
                }
            }
        },
        methods: {
            addItem() {
                this.$firebaseRefs.service.push({
                    name: this.newItem.name,
                    price: this.newItem.price,
                    type: this.newItem.type
                })
                this.newItem.name = '';
                this.newItem.price = '';
                this.newItem.type= '';
            }
        }
    }
</script>