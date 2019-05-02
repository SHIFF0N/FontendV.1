<template>
<v-content class="bp-img">
  <v-layout row wrap>
    <v-flex >
      <Profile/>
    </v-flex>
  </v-layout>
  </v-content>
</template>
<script>
import Profile from "@/components/homepage/Profile";

export default {
  components: {
    Profile,
  }
};
</script>

