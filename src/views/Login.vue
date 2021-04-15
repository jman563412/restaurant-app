<template>
<div>
  <!-- <h1>IsInit: {{ Vue3GoogleOauth.isInit }}</h1>
  <h1>IsAuthorized: {{ Vue3GoogleOauth.isAuthorized }}</h1> -->
<div v-if="!this.$store.state.userSignedIn">
  <h5> To continue, please Sign in with your Google account:</h5>
    <button class="google-signin-button" @click="handleClickSignIn" >Sign in</button>
</div>

  <h2 v-if="this.$store.state.userSignedIn">You are signed in as: <br /> {{this.$store.state.user}} <br /> <br /> You can submit your order and pay now!!</h2>
  
</div>
</template>

<script>
import { inject, toRefs } from "vue";

export default {
  name: "Login",
  
  data(){
    return {
      user: '',
    }
  },
  
  methods: {

    mounted(){
      
      //Used for dev purposes, if you want to sign user out on page load
      //handleClickSignOut();
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.Vue3GoogleOauth.isAuthorized);

        this.$store.state.userSignedIn = false;
        this.$store.state.id_token = '';
      } catch (error) {
        console.error(error);
      }
    },

    async handleClickSignIn(){
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        } else{
          this.$store.state.userSignedIn = true;
          this.$router.push('/');
        }
        
        // console.log("googleUser", googleUser);
        this.$store.state.user = googleUser.getBasicProfile().getEmail();
        // console.log("getId", this.user);
        // console.log("getBasicProfile", googleUser.getBasicProfile());
        let getAuthResponse = this.$gAuth.instance.currentUser.get().getAuthResponse();
        this.$store.state.userSignedIn = true;
        this.$store.state.user = getAuthResponse["email"];
        this.$store.state.id_token = getAuthResponse['id_token'];
        console.log("id token stored in state: ", this.$store.state.id_token)

      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    //Here for utility, but we probably won't need since cloud function just needs the id_token field but not auth code
    async handleClickGetAuthCode(){
      try {
        const authCode = await this.$gAuth.getAuthCode();
        console.log("authCode", authCode);
      } catch(error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },

    async handleClickSignOut() {
      try {
        await this.$gAuth.signOut();
        console.log("isAuthorized", this.$store.state.userSignedIn);
        this.user = "";
      } catch (error) {
        console.error(error);
      }
    },
  },

  //Dynamically injecting google login plugin from the 
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};
    return {
      Vue3GoogleOauth,
      handleClickLogin,
    };
  },
};
</script>

<style>
button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  margin-right: 1em;
}
button:disabled {
  background: #fff;
  color: #ddd;
  cursor: not-allowed;
}

.google-signin-button {
  color: white;
  background-color: red;
  height: 50px;
  font-size: 16px;
  border-radius: 10px;
  padding: 10px 20px 25px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>