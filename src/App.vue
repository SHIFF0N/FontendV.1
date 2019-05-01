<template>
  <v-app> 
    <NavMain/>
    <router-view></router-view> 
    <Footer/> 
  </v-app>
</template>

<script>
import NavMain from "@/components/layout/NavMain";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",
  components: {
    NavMain,
    Footer
  }
};
</script>