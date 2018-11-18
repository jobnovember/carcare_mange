<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom">
      <a class="navbar-brand" href="/">Cars Care</a> 
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'UserAdd' }" class="nav-link">Add User</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'UserList' }" class="nav-link">Users</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
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
 .gap {
   margin-top: 50px;
 }
</style>
