<template>
  <div class="md:grid md:grid-cols-12 gap-5 mx-4 md:mx-10 lg:mx-24 py-3 md:py-5 lg:py-0 lg:mb-0">
    <div class="md:col-span-6 text-left text-niagaGray2x flex items-center">
      <div>
        <p class="font-body text-xl lg:text-2xl py-2 font-medium lg:mb-2">
          Linux Hosting yang Stabil
          <br />dengan Teknologi LVE
        </p>
        <p class="font-roboto text-sm lg:text-base">
          SuperMicro
          <strong>Intel Xeon 24-Cores</strong> server dengan RAM
          <strong>128</strong>GB dan teknologi
          <strong>LVE CloudLinux</strong> untuk stabilitas server Anda. Dilengkapi dengan
          <strong>SSD</strong> untuk kecepatan
          <strong>MySQL</strong> dan caching, Apache load balancer berbasis LiteSpeed Technologies,
          <strong>CageFS</strong> security,
          <strong>Raid-10</strong> protection dan auto backup untuk keamanan website PHP Anda.
        </p>
        <div class="flex justify-center md:justify-start">
          <button
            class="font-bold hidden md:inline-block text-white mt-4 text-sm lg:text-base lg:mt-8 rounded-full bg-niagaBlue py-2 px-5"
          >Pilih Hosting Anda</button>
        </div>
      </div>
    </div>
    <div class="md:col-span-6 mt-3 md:mt-0 flex items-center justify-center">
      <img src="../assets/images/support.png" class="lg:w-full w-4/5" alt="banner-php" />
    </div>
    <div class="flex justify-center md:justify-start">
      <button
        class="font-bold inline-block md:hidden text-white mt-4 text-sm lg:text-base lg:mt-8 rounded-full bg-niagaBlue py-2 px-5"
      >Pilih Hosting Anda</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinuxHosting",
};
</script>

<style scoped>
</style>
