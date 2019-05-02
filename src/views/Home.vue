<template>
  <v-content class="bp-img">
    <v-layout row wrap>
      <v-flex>
        <Imageaddform/>
      </v-flex>
    </v-layout>
  </v-content>
</template>
<script>
import Imageaddform from "@/components/homepage/Imageaddform";

export default {
  components: {
    Imageaddform
  }
};
</script>
