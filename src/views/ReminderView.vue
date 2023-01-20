<template>
  <Navbar />
  <section id="reminder">
    <div class="container mt-5 mb-3">
      <div class="row">
        <div class="col-md-12 pe-3 mb-3">
          <h2 class="text-white fs-2">Rabbit Gestation Period</h2>
          <p class="text-white mt-3">
            <img
              :src="rabbitGestationImg"
              alt=""
              class="img-fluid float-end rounded w-25 h-75 ms-3"
            />
            Rabbit breeds of medium to large size are sexually mature at 4 to 4.5 months,
            giant breeds at 6 to 9 months, and small breeds (such as the Polish Dwarf and
            Dutch) at 3.5 to 4 months of age. The release of eggs in female rabbits is
            triggered by sexual intercourse, not by a cycle of hormones as in humans. The
            rabbit has a cycle of mating receptivity; rabbits are receptive to mating
            about 14 of every 16 days. A doe is most receptive when the vagina is red and
            moist. Does that are not receptive have a whitish pink vaginal color with
            little or no moisture. A veterinarian may be able to feel fetuses in a
            pregnant doe's abdomen 12 days after breeding. False pregnancy, during which
            the rabbit shows signs of pregnancy but is not actually pregnant, is common in
            rabbits.
          </p>
          <p class="text-white">
            Pregnancy lasts about 31 to 33 days. Does with a small litter (usually 4 or
            fewer kits) seem to have longer pregnancies than those that produce larger
            litters. If a doe has not given birth by day 32 of her pregnancy, your
            veterinarian may induce labor; otherwise, a dead litter may be delivered
            sometime after day 34. Occasionally, pregnant does abort or reabsorb the
            fetuses because of nutritional deficiencies or disease.
          </p>
        </div>
        <div class="row">
          <div class="col-md-6 mb-3">
            <h2 class="text-white text-center fs-2 mt-3">Kindling and Age Reminder</h2>
            <p class="text-white mt-3">
              Keep track of your Rabbit kindling and Bunnies Age with our awesome
              reminding platform
            </p>
            <div class="reminder-wrapper mt-5">
              <form method="post">
                <div class="mb-3">
                  <label for="" class="form-label text-white">Rabbit Name</label>
                  <input
                    type="text"
                    class="form-control shadow-none"
                    id=""
                    v-model="reminderDetails.rabbitName"
                    placeholder="Rabbit pet name"
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label text-white">Rabbit Image</label>
                  <input
                    type="text"
                    class="form-control shadow-none"
                    placeholder="not available yet"
                    readonly
                    id=""
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label text-white">Date Of Crossing</label>
                  <input
                    type="date"
                    class="form-control shadow-none"
                    id=""
                    v-model="reminderDetails.rabbitDate"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="getReminderDetails()"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div class="col-md-6 mb-3 ps-3">
            <div
              class="mt-3 alert alert-dismissible fade show alert-success d-flex flex-column"
              role="alert"
            >
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
              <div><i class="bi bi-bell-fill"></i> &nbsp; Rabbit Notification Center</div>
              <div v-if="rabbitDateInfo" class="mt-2">
                <i class="bi bi-calendar2-check-fill"></i> You've crossed your Rabbit
                named <b>{{ rabbitNameDisplay }}</b> on <b>{{ rabbitDateInfo }}</b> a
                reminder will be set to check if the crossing is successfull or not
              </div>
            </div>
            <div class="reminder-wrapper mt-5">
              <form method="post">
                <div class="mb-3">
                  <label for="" class="form-label text-white">Kindled Date</label>
                  <input
                    type="date"
                    class="form-control shadow-none"
                    id=""
                    v-model="reminderDetails.rabbitKindledDate"
                  />
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  @click="calculateBunnyAge()"
                >
                  Kindled Successfully
                </button>
              </form>

              <div
                class="mt-3 alert alert-dismissible fade show alert-success d-flex flex-column"
                role="alert"
              >
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
                <div>
                  <i class="bi bi-bell-fill"></i> &nbsp; Rabbit Notification Center
                </div>
                <div v-if="after30Days" class="mt-2">
                  <i class="bi bi-calendar2-check-fill"></i> Your Bunny is 1day today
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "ReminderView",
  components: { Navbar, Footer },
  data() {
    return {
      rabbitGestationImg: "/img/rabbit-gestation.jpg",
      reminderDetails: {
        rabbitName: "",
        // rabbitImage: "",
        rabbitDate: "",
        rabbitKindledDate: "",
      },
      rabbitDateInfo: "",
      rabbitNameDisplay: "",
      after30Days: "",
    };
  },
  setup() {
    // let currentDate = new Date();
    //   console.log(currentDate);
    //   let dateNow = currentDate.getDate();
    //   console.log(dateNow);
    //   let threeDaysTime = currentDate.setDate(dateNow + 30);
    //   let newDateNow = new Date(threeDaysTime);
    //   console.log(newDateNow);
  },
  methods: {
    getReminderDetails() {
      console.log(this.reminderDetails);
      this.rabbitDateInfo = this.reminderDetails.rabbitDate;
      this.rabbitNameDisplay = this.reminderDetails.rabbitName;
    },
    calculateBunnyAge() {
      let currentDate = new Date(this.reminderDetails.rabbitKindledDate);
      console.log(currentDate);
      let dateNow = currentDate.getDate();
      console.log(dateNow);
      let threeDaysTime = currentDate.setDate(dateNow + 1);
      let newDateNow = new Date(threeDaysTime);
      this.after30days = newDateNow;
      // console.log(newDateNow);
    },
  },
};
</script>
