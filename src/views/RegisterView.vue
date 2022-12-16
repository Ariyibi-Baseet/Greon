<template>
  <div class="container p-5">
    <h2 class="text-center text-white">Join Us today to Enjoy Rabbits 🐇 Benefits</h2>
    <div class="row">
      <div class="col-md-4 mx-auto mt-5 mb-3">
        <form method="post">
          <div class="mb-3">
            <label for="" class="form-label">First Name</label>
            <input
              type="email"
              class="form-control shadow-none"
              id=""
              v-model="formData.first_name"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control shadow-none"
              id=""
              v-model="formData.last_name"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control shadow-none"
              id=""
              v-model="formData.email"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Password</label>
            <input
              type="password"
              class="form-control shadow-none"
              id=""
              v-model="formData.password"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control shadow-none"
              id=""
              v-model="formData.password_confirmation"
            />
          </div>
          <button type="button" class="btn btn-block" @click="registerForm()">
            Got Me Registered
          </button>
          <span>
            <router-link to="/login" class="login-link ms-3"
              >Login Here &nbsp;<i class="bi bi-arrow-right"></i
            ></router-link>
          </span>
          <p class="mt-3 text-center">
            <router-link to="/" class="back-home-link"
              ><i class="bi bi-arrow-left"></i> &nbsp;Go back Home</router-link
            >
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterView",
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      api_url: "https://event-api.mockup.com.ng/api/register",
    };
  },
  methods: {
    registerForm() {
      axios
        .post(this.api_url, this.formData)
        .then(function (response) {
          console.log(response.status);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
* {
  font-family: var(--ff-chivo);
  text-decoration: none;
  box-sizing: border-box;
}
label {
  color: rgb(215, 208, 208);
}
input,
input:focus {
  background-color: var(--grayish);
  border: none;
  color: #f4f4f4;
  caret-color: #fff;
}
button {
  background: -moz-linear-gradient(82deg, #9efd38 12%, #2ba72b 48%);
  background: -webkit-linear-gradient(82deg, #9efd38 12%, #2ba72b 48%);
  background: -o-linear-gradient(82deg, #9efd38 12%, #2ba72b 48%);
  background: -ms-linear-gradient(82deg, #9efd38 12%, #2ba72b 48%);
  background: linear-gradient(82deg, #9efd38 12%, #2ba72b 48%);
  color: #fff;
  text-shadow: 2px 3px 5px gray;
}
.login-link,
.back-home-link {
  color: rgb(215, 208, 208);
}
</style>
