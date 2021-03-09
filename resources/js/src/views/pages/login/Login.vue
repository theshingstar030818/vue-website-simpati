<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <login-jwt></login-jwt>
</template>


<script>
import LoginJwt from "./LoginJWT.vue"
import LoginFirebase from "./LoginFirebase.vue"
import LoginAuth0 from "./LoginAuth0.vue"

export default {
  components: {
    LoginJwt,
    LoginFirebase,
    LoginAuth0
  }
}
</script>

<style lang="scss">
</style>
