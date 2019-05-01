<template>
  <v-layout row wrap>
    <v-flex>
      <CourseRecords/>
    </v-flex>
  </v-layout>
</template>
<script>
import CourseRecords from "@/components/homepage/CourseRecords";

export default {
  components: {
    CourseRecords,
  }
};
</script>

