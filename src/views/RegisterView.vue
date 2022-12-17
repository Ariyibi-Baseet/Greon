<template>
  <div class="container p-5">
    <h2 class="text-center text-white">Join Us today to Enjoy Rabbits 🐇 Benefits</h2>
    <div class="row">
      <div class="col-md-4 mx-auto mt-5 mb-3">
        <form method="post">
          <h5 class="register">Register</h5>
          <div class="mb-3 mt-3">
            <label for="" class="form-label">First Name</label>
            <input
              type="text"
              class="form-control shadow-none"
              v-model="formData.first_name"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Last Name</label>
            <input
              type="text"
              class="form-control shadow-none"
              v-model="formData.last_name"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Email Address</label>
            <input
              type="email"
              class="form-control shadow-none"
              v-model="formData.email"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Password</label>
            <input
              type="password"
              class="form-control shadow-none"
              v-model="formData.password"
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">Confirm Password</label>
            <input
              type="password"
              class="form-control shadow-none"
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

    <!-- Toast to print errors -->
    <div v-if="errorMessage">
      <div v-for="error in errorMessage" :key="error">
        <div
          class="toast position-fixed"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            <img src="" class="rounded me-2" alt="" />
            <strong class="me-auto text-white">Validation Error</strong>
            <small class="text-white">5 sec ago</small>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div class="toast-body text-white mb-2">{{ error }}</div>
        </div>
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
      errorMessage: "",
      api_url: "https://event-api.mockup.com.ng/api/register",
    };
  },
  methods: {
    registerForm() {
      axios
        .post(this.api_url, this.formData)
        .then((response) => {
          console.log(response.status);
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errorMessage = error.response.data.message;
            console.log(this.errorMessage);
          }
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
.register {
  color: #9efd38;
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
.login-link {
  color: rgb(215, 208, 208);
}
.back-home-link {
  color: #9efd38;
}
.toast {
  display: block;
  right: 4px;
  top: 100px;
}
.toast-header {
  background-color: rgb(221, 37, 37);
}
.toast-body {
  background-color: rgb(227, 55, 55);
}
</style>
