<template>
<div class="container-fluid">
    <div class="row">
      <Sidebar />

      <div class="col-md-10">
        <div class="container">
          <h1>This is Admin Manage Part where we can delete Item</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar/Sidebar.vue'
    export default {
  components: { Sidebar },
        name:'ManageProducts',

    }
</script>

<style scoped>

</style>