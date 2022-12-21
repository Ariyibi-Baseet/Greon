<template>
  <div class="register-area">
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
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useToast } from "vue-toastification";

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
      successMessage: "",
      api_url: "https://event-api.mockup.com.ng/api/register",
    };
  },
  setup() {
    const toastBox = useToast();
    return { toastBox };
  },
  methods: {
    registerForm() {
      axios
        .post(this.api_url, this.formData)
        .then((response) => {
          console.log(response.status);
          if (response.status === 201) {
            this.toastBox.info("User Registered Successfully!!!");
            window.location.href = "/";
          }
        })
        .catch((error) => {
          if (error.response.status === 422) {
            this.errorMessage = error.response.data.message;
            this.toastBox.error(this.errorMessage);
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

.register-area {
  background-color: var(--phthalo-green) !important;
  background-color: #333;
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
.error-header {
  background-color: rgb(221, 37, 37);
}
.error-body {
  background-color: rgb(227, 55, 55);
}

.success-header {
  background-color: #2ba72b;
}
.success-body {
  background-color: #9efd38;
}
</style>
