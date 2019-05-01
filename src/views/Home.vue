<template>
  <v-content>
    <v-layout row wrap>
      <v-flex>
        <Imageaddform/>
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
