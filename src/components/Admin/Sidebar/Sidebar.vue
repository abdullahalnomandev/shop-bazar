<template>
  <div
class="admin-sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" :style='{minHeight: "100vh"}'
  >
    <ul class="list-unstyled">
      <li>
        <router-link to="/">
          <font-awesome-icon :icon="home" />  <span class="ms-1"> Home</span>
        </router-link>
      </li>

      <li>
        <router-link to="/admin/addProducts">
          <font-awesome-icon :icon="addProductIcom" />  <span class="ms-1">Add Product</span>
        </router-link>
      </li>

      <li>
        <router-link to="/admin/manageProduct">
          <font-awesome-icon :icon="manageIcon" /> <span class="ms-1">Manage Product</span>
        </router-link>
      </li>
    </ul>
    <div class="log-out">
      <router-link to="/" class="text-white">
         <font-awesome-icon :icon="logOut" />  <span>Logout</span></router-link
      >
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {  faCogs, faHome, faPlus, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Sidebar",
  data() {
    return {
      addProductIcom: faPlus,
      manageIcon: faCogs,  
      logOut: faSignOutAlt ,
      home: faHome
      };
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.admin-sidebar{
    background-image:linear-gradient(40deg, #1b5e00,#157221);
   
   
}
.admin-sidebar li{
    margin-bottom: 2em;
}
.admin-sidebar li a{
    color:white;
    text-decoration: none;
}
.admin-sidebar li a:hover{
   background-color: #130707;
    padding: 10px;
    color: white;
    border-radius: 5px;
}
.log-out a{
    color: red !important;
    text-decoration: none;
    background: white;
    padding: 10px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 10px;
    transition: .3s;
}
.log-out a:hover{
    background: red;
    color: white !important;
    transition: .3s;
}
</style>