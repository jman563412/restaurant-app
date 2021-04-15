import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            order: [],
            quantity: [],
            count: 0,
            tipPercent: 0,
            specialInstructions: "                                      "
    }
},
mutations: {
    increment (state) {
        state.count++;
    }
}

})



const app = createApp(App).use(router).use(store).mount('#app')

