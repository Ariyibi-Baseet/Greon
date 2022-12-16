<template>
  <NavigationBar />
  <FooterSection />
</template>

<script>
import NavigationBar from "@/components/Navbar.vue";
import FooterSection from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: { NavigationBar, FooterSection },
};
</script>
