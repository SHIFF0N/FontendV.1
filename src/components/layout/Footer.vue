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
        &copy;2018 — <strong>SoftWareEngineering</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ],
      text:"SoftWareEngineering'59",
    })
  }
</script>
<style>
.bg-img {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
}
</style>