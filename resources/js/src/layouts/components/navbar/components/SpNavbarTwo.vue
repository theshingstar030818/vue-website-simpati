<template>
    <div class="mt-5">
        <!-- <vs-navbar v-model="activeItem" class="p-2" v-if="isShowLogin">

            <div slot="title">
              <a id="logo" href="#">
                <img id="logo-img" src="@assets/images/logo/logo.png" alt="logo" class="mx-auto">
              </a>
            </div>
            SPNavbarTwo
            <vs-navbar-item index="0">
                <a href="/pages/login" class="text-base">Log In</a>
            </vs-navbar-item>
            <vs-navbar-item index="0">
                <a href="/pages/register" class="text-base">Register</a>
            </vs-navbar-item>
        </vs-navbar>
        <div slot="title" v-else>
          <a id="logo" href="#">
            <img src="@assets/images/logo/logo.png" alt="logo" class="mx-auto">
          </a>
        </div> -->
    </div>
</template>

<script>
export default {
    data: () => ({
        activeItem: 0
    }),
    props: {
      isShowLogin: { type: Boolean, default: true },
    }
}
</script>
