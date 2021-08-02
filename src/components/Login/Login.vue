<template>
  <div class="form">
    <form
      action=""
      @submit="handleSubmit"
      class="text-center text-center pt-5 p-5 mt-5 "
    >
      <input
        type="email"
        class="form-control"
        name="email"
        id="email"
        placeholder="email"
        v-model="email"
        required
      />
      <br />
      <input
        type="password"
        class="form-control"
        name="password"
        id="password"
        placeholder="password"
        v-model="password"
        required
      />
      <br />
      <button class="btn-success px-3 py-2 rounded">Log In</button>
    </form>
    <div class="text-center">
      <button
        @click="handleGoogleSignIn"
        class="btn-primary mx-5 mb-5 px-5 rounded py-2"
      >
        Log In with google
      </button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      this.$store.state.user.email = this.email;
      console.log("store User", this.$store.state.user.email);
      this.$router.push("/");
    },

    //pop up
    handleGoogleSignIn() {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // var credential = result.credential;
          // var token = credential.accessToken;
          // console.log(user,token)
          var user = result.user;
          const loginUser = {
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          };
          console.log(loginUser);
          this.$store.state.user.email = loginUser.email;
          this.$router.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode, email, errorMessage, credential);
        });
    },
  },
};
</script>

<style scoped>
.form {
  width: 500px;
  margin: auto;
  background-color: #ddd;
  border-radius: 10px;
}
</style>
