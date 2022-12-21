<template>
  <div class="sign-in-area">
    <div class="container p-5">
      <div class="row">
        <h3 class="text-white text-center">
          Sign In Here to Proceed to Our
          <br />
          Awesome Rabbit 🐇 Dashboard <i class="bi bi-speedometer2"></i>
        </h3>
        <div class="col-md-4 mx-auto">
          <form method="post" class="mt-5 p-3">
            <h5 class="sign-in">Sign In</h5>
            <div class="mb-3 mt-3">
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
            <button type="button" class="btn btn-block" @click="loginForm()">
              Got Me In
            </button>
            <span>
              <router-link to="/register" class="login-link ms-3"
                >Register Here &nbsp;<i class="bi bi-arrow-right"></i
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
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

export default {
  name: "LoginView",
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      api_url: "https://event-api.mockup.com.ng/api/signin",
      errorMessage: "",
    };
  },
  setup() {
    const toastBox = useToast();
    return { toastBox };
  },
  methods: {
    loginForm() {
      axios
        .post(this.api_url, this.formData)
        .then((response) => {
          console.log(response.status);
          this.toastBox.info("Login Successfully! Proceed to Dashboard");
          window.location.href = "/";
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            this.errorMessage = error.response.data.message;
            this.toastBox.error(this.errorMessage + " Check your username and password");
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
.sign-in-area {
  background-color: var(--phthalo-green) !important;
  background-color: #333;
  min-height: 100vh;
}
.sign-in {
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
</style>
