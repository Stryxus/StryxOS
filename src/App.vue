<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-auto">
        <img alt="Logo" src="@/assets/img/logo.svg" width="125" height="125" />
      </div>
      <div class="col-auto">
        <nav>
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <RouterView />
      </div>
    </div>
  </div>
</template>
