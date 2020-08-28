<template>
  <div class="font-roboto text-niagaGray">
    <div class="hidden md:block border-b-2">
      <div class="md:flex justify-between content-start md:h-10 h-16 pt-1 mx-20 md:mx-3 lg:mx-24">
        <a href="#" class>
          <div class="flex font-normal text-xs mb-2 mt-2 lg:mt-0 lg:mb-0">
            <img class="w-5 h-5 mr-3" src="../assets/images/tag.png" alt="tag" />
            <p>Gratis Ebook 9 Cara Cerdas Menggunakan Domain [ x ]</p>
          </div>
        </a>
        <div class="md:flex items-center text-sm">
          <div class="flex mr-5">
            <img class="w-5 h-5 mr-2" src="../assets/images/phone.png" alt="tag" />
            <span>0274-5305505</span>
          </div>
          <div class="flex mr-5">
            <img class="w-5 h-5 mr-2" src="../assets/images/chat.png" alt="tag" />
            <span>Live Chat</span>
          </div>
          <div class="flex">
            <img class="w-5 h-5 mr-2" src="../assets/images/user.png" alt="tag" />
            <span>Member Area</span>
          </div>
        </div>
      </div>
    </div>
    <div class="antialiased border-b-2" id="TopNavbar">
      <nav class="flex items-center justify-between flex-wrap mx-2 md:mx-3 lg:mx-24">
        <div class="flex items-center flex-no-shrink mr-6">
          <router-link to="/">
            <img class="w-24 lg:w-48 mr-2" src="../assets/images/niagahoster-logo.png" alt="tag" />
          </router-link>
        </div>
        <div class="block sm:hidden">
          <button
            @click="toggle"
            class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-gray-900 hover:border-white"
          >
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          :class="open ? 'block': 'hidden'"
          class="w-full flex-grow justify-end sm:flex sm:w-auto"
        >
          <div class="sm:text-sm lg:text-base sm:flex">
            <router-link to="/hosting" class="md:mr-4 block my-auto sm:inline-block">Hosting</router-link>
            <router-link to="/domain" class="md:mr-4 block my-auto sm:inline-block">Domain</router-link>
            <router-link to="/server" class="md:mr-4 block my-auto sm:inline-block">Server</router-link>
            <router-link to="/website" class="md:mr-4 block my-auto sm:inline-block">Website</router-link>
            <router-link to="/afiliasi" class="md:mr-4 block my-auto sm:inline-block">Afiliasi</router-link>
            <router-link to="/promo" class="md:mr-4 block my-auto sm:inline-block">Promo</router-link>
            <router-link to="/pembayaran" class="md:mr-4 block my-auto sm:inline-block">Pembayaran</router-link>
            <router-link to="/review" class="md:mr-4 block my-auto sm:inline-block">Review</router-link>
            <router-link to="/kontak" class="md:mr-4 block my-auto sm:inline-block">Kontak</router-link>
            <router-link to="/blog" class="block my-auto sm:inline-block">Blog</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "#TopNavbar",
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
  },
};
</script>
