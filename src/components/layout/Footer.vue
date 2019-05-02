<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class=" flex"
      flat
      tile
    >
      <v-card-actions class="bg-img">
        &copy;2018 — <strong>SoftWareEngineering'59</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      
    })
  }
</script>
<style>
.bg-img {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
}
</style>