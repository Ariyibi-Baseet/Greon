<template>
  <p class="text-center text-white">You gat to register first before moving on...</p>

  <form class="mt-5" method="post">
    <input type="text" placeholder="Email address" v-model="formData.email" />
    <br />
    <input type="text" placeholder="Password" v-model="formData.password" />
    <br />
    <button type="button" @click="loginForm()">Register Me!</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      api_url: "https://event-api.mockup.com.ng/api/signin",
    };
  },
  methods: {
    loginForm() {
      axios
        .post(this.api_url, this.formData)
        .then(function (response) {
          console.log(response.status);
          console.log("Login successfully!!!");
          //   router.push({ name: "home" });
          window.location.href = "/";
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
