<template>
  <div class="form-bg">
    <div class="form">
      <form
        action=""
        @submit="handleSUbmit"
        class="text-center text-center pt-5 p-5 mt-5 "
      >
        <p :style="{ color: 'red' }">{{ this.error }}</p>
        <h3 v-if="this.success" :style="{ color: 'green' }">
          Sign Up has been successfull....
        </h3>
        <input
          type="text"
          class="form-control"
          name="name"
          id="name"
          placeholder="Your Name"
          v-model="name"
          required
          v-if="this.isLogin"
        />
        <br />

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

        <div v-if="!this.isLogin">
          <input
            type="submit"
            class="btn-success px-3 py-2 rounded"
            value="Log In"
          />
          <p>
            Don't have account?<span
              @click="handleNameToggle"
              :style="{ cursor: 'pointer' }"
              class="text-primary"
            >
              Sign Up</span
            >
          </p>
        </div>

        <div v-if="this.isLogin">
          <input
            type="submit"
            class="btn-success px-3 py-2 rounded"
            value="Sign Up"
          />
          <p>
            Do you have account?<span
              @click="handleNameToggle"
              :style="{ cursor: 'pointer' }"
              class="text-primary"
            >
              Log In</span
            >
          </p>
        </div>
      </form>

      <div class="text-center">
        <button
          @click="handleGoogleSignIn"
          class="btn-primary mx-5 mb-5 px-5 rounded py-2"
        >
          Contunue In with google
        </button>
      </div>
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
      isLogin: null,
      name: null,
      email: null,
      password: null,
      error: null,
      success: false,
    };
  },
  methods: {
    handleSUbmit(e) {
      e.preventDefault();

      if (this.isLogin && this.email && this.password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed up
            var user = userCredential.user;
            console.log("user", user);
            this.success = true;
            this.error = "";
             this.name=null,
            this.email=null,
            this.password=null
          })
          .catch((error) => {
            var errorMessage = error.message;
            this.error = errorMessage;
            this.success = "";
          });
          

      }

      if (!this.isLogin && this.email && this.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            this.$store.state.user.email = user.email;
            this.$router.push("/");
             this.name=null,
            this.email=null,
            this.password=null
          })
          .catch((error) => {
            var errorMessage = error.message;
            this.error = errorMessage;
            this.success = "";
        
          });

      }
    },

    handleNameToggle() {
      this.isLogin = !this.isLogin;
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
          this.$store.state.user = loginUser;
          this.$router.push("/");
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          this.error = errorMessage;
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
  background-color: #ffffff;
  border-radius: 10px;
}
.form-bg{
  background-color: #f0f2f5;
  padding-top:60px;
  padding-bottom:80px
}
</style>
