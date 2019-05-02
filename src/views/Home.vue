<template>
  <v-content class="bp-img">
    <v-layout row wrap>
      <v-flex>
        <Home/>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import Home from "@/components/homepage/Home";

export default {
  components: {
    Home,
  }
};
</script>
