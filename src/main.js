import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createStore} from 'vuex'
import googleAuth from 'vue3-google-oauth2'

const gAuthOptions = {clientId: "752522303631-12hja7brh0d0epu0j1o7g7m8klvoqejk.apps.googleusercontent.com", scope:'email', prompt: 'consent', fetch_basic_profile: true}

const store = createStore({
    state() {
        return {
            order: [],
            quantity: [],
            count: 0,
            id_token: '',
            itemsDict: {},
            tipPercent: 0,
            specialInstructions: "",
            review: "",
            paymentOrder: [],
            paymentQuantity: [],
            paymentCount: 0,
            userMode: 0,
            user: '',
            
            //User Mode
                //0 = regular customer
                //1 = child
            userSignedIn: false
    }
},
mutations: {
    increment (state) {
        state.count++;
    }
}
})



const app = createApp(App).use(router).use(store).use(googleAuth, gAuthOptions).mount('#app')
