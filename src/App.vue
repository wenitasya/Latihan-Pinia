<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Latihan</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/todolist">Todo App</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/user">User List</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

