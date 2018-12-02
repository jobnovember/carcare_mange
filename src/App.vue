<template>
  <div id="app" class="row">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark col-sm-12">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'UserAdd' }" class="nav-link">Add User</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'UserList' }" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'CarAdd' }" class="nav-link">Add Cars</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'CarList' }" class="nav-link">Cars</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'BookingAdd' }" class="nav-link">Add Booking</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'BookingList'}" class="nav-link">Booking</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'OrderList'}" class="nav-link">Orders</router-link> 
        </li>
      </ul>
    </nav>
    <div class="col-sm-12">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
  #app {
    font-family: 'Varela Round', sans-serif;
  }
</style>
