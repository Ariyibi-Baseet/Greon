import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faAngleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUser, faAngleRight, faArrowRight)


createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')


