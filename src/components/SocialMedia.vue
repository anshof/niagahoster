<template>
  <div class="bg-gray-200 py-5">
    <div class="mx-10 lg:mx-24 font-body">
      <div class="lg:grid lg:grid-cols-12">
        <div
          class="lg:col-span-6 col-span-12 flex justify-center lg:justify-start my-2 lg:my-auto"
        >Bagikan Jika Anda menyukai halaman ini.</div>
        <div class="lg:col-span-2 md:col-span-12 flex justify-center my-2 lg:my-0">
          <img src="../assets/images/facebook.png" class="w-10 h-10 rounded mr-2" alt="fb" />
          <span class="border-2 rounded-lg border-gray-400 flex items-center px-4 mr-0 lg:mr-4">80k</span>
        </div>
        <div class="lg:col-span-2 md:col-span-12 flex justify-center my-2 lg:my-0">
          <img src="../assets/images/twitter.png" class="w-10 h-10 rounded mr-2" alt="fb" />
          <span class="border-2 rounded-lg border-gray-400 flex items-center px-4 mr-0 lg:mr-4">450</span>
        </div>
        <div class="lg:col-span-2 md:col-span-12 flex justify-center my-2 lg:my-0">
          <img src="../assets/images/google-plus.png" class="w-10 h-10 rounded mr-2" alt="fb" />
          <span class="border-2 rounded-lg border-gray-400 flex items-center px-4">1900</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialMedia",
};
</script>

<style scoped>
.speech-bubble {
  position: relative;
  background: transparent;
  border-radius: 0.4em;
  border: 1px solid red;
}

.speech-bubble:after {
  content: "";
  position: absolute;
  left: 67%;
  top: 100%;
  width: 0;
  height: 0;
  border: 10px solid transparent;
  border-right-color: red;
  border-left: 0;
  margin-top: -31px;
  margin-left: -31px;
}
</style>
