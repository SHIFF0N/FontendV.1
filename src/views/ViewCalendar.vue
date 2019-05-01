<template>
  <v-layout row wrap>
    <v-flex>
      <Calendar/>
    </v-flex>
  </v-layout>
</template>
<script>
import Calendar from "@/components/homepage/Calendar";

export default {
  components: {
    Calendar,
  }
};
</script>

