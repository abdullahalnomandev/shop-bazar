<template>
  <b-navbar  class="sticky-top"  toggleable="lg" type="dark" variant="success">
    <div class="container">
      <b-navbar-brand router-link to="/"> <h5>SHOP</h5></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto nav-item" >
          <p class="mt-2 text-info">{{this.$store.state.user.email}}</p>
          <b-nav-item  router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/order">Order</b-nav-item>
          <b-nav-item router-link to="/admin/addProducts">Admin</b-nav-item>
          <b-nav-item  router-link to="/deal">Deal</b-nav-item>

          <router-link v-if="!this.$store.state.user.email" to="/login">
           <button  class="btn-info rounded px-3 py-2 ms-2">Login</button> 
          </router-link>
          
          <router-link v-else to="/login">
           <button @click="signOut"  class="btn-danger rounded px-3 py-2 ms-2">Log Out</button> 
          </router-link>

          

        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar> 
</template>

<script>
export default {
  name: "NavBar",

  methods:{
    signOut(){
      this.$store.state.user.email= null
      this.$router.push("/")
    }
  }
};

</script>

<style scoped>
.nav-item a{
  color: white !important ;
  font-size: 16px;
  transition: .3s;

}
.nav-item a:focus::after{
    display: block;
    content: "";
    width: 100%;
    height: 1px;
    background-color: #66ffdb;
    transition: all .3s;
}
  
.nav-item a:hover{
 background-color: #0a2b0a;
 border-radius: 5px;
 transition: .3s;

}


</style>
