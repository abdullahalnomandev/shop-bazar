<template>
  <div
    class="admin-sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
    :style="{ minHeight: '100vh' }"
  >
    <ul class="list-unstyled">
      <li>
        <router-link to="/">
          <font-awesome-icon :icon="home" /> <span class="ms-1"> Home</span>
        </router-link>
      </li>

      <li>
        <router-link to="/admin/addProducts">
          <font-awesome-icon :icon="addProductIcom" />
          <span class="ms-1">Add Product</span>
        </router-link>
      </li>

      <li>
        <router-link to="/admin/manageProduct">
          <font-awesome-icon :icon="manageIcon" />
          <span class="ms-1">Manage Product</span>
        </router-link>
      </li>
      <li>
        <div @click="handleLogOut" class="text-white log-out">
        <p class="userLog-out"> <font-awesome-icon :icon="logOut" /> <span>Logout</span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCogs,
  faHome,
  faPlus,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Sidebar",
  data() {
    return {
      addProductIcom: faPlus,
      manageIcon: faCogs,
      logOut: faSignOutAlt,
      home: faHome,
    };
  },

  methods: {
    handleLogOut() {
      (this.$store.state.user.email = null), this.$router.push("/login");
    },
  },

  components: {
    FontAwesomeIcon,
  },
};
</script>

<style scoped>
.admin-sidebar {
  background-image: linear-gradient(40deg, #1b5e00, #157221);
}
.admin-sidebar li {
  margin-bottom: 2em;
}
.admin-sidebar li a {
  color: white;
  text-decoration: none;
}
.admin-sidebar li a:hover {
  background-color: #130707;
  padding: 10px;
  color: white;
  border-radius: 5px;
}
.userLog-out {
  color: red !important;
  text-decoration: none;
  background: white;
  padding: 10px;
  font-size: 15px;
  font-weight: 700;
  border-radius: 10px;
  transition: 0.3s;
  width:100px
}
.userLog-out:hover {
  background: red;
  color: white !important;
  transition: 0.3s;
  cursor: pointer;
}
.userLog-out {
  margin-top: 300px;
}
</style>
