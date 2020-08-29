<template>
  <div class="border-b-2 mb-10 mt-10 text-center">
    <div class="lg:mx-24 mx-10">
      <hr class="h-1 w-20 border-0 mx-auto bg-gray-400 mt-5 md:mt-0 text-gray-400" />
      <p class="lg:text-3xl text-xl font-body mt-5 md:mt-8">Mendukung Penuh Framework Laravel</p>
      <div class="md:grid md:grid-cols-12 gap-5 mx-4 py-3 md:py-5 lg:py-10">
        <div class="md:col-span-6 text-left text-niagaGray2x flex items-center md:justify-start">
          <div class="font-body">
            <p
              class="text-bae lg:text-lg mb-3 lg:mb-8"
            >Tak perlu menggunakan dedicated server ataupun VPS yang mahal. Layanan PHP hosting murah kami mendukung penuh framework favorit Anda.</p>
            <div class="flex mt-1 lg:mt-3 items-center">
              <img src="../assets/images/check-mark.png" class="w-5 h-5 mr-3" alt />
              <span class="text-sm lg:text-base font-roboto">
                Install Laravel
                <span class="font-semibold">1 klik</span> dengan Softaculous Installer.
              </span>
            </div>
            <div class="flex mt-1 lg:mt-3 items-center">
              <img src="../assets/images/check-mark.png" class="w-5 h-5 mr-3" alt />
              <span class="text-sm lg:text-base font-roboto">
                Mendukung ekstensi
                <span class="font-semibold">PHP MCrypt, phar, mbstring, json</span> dan
                <span class="font-semibold">fileinfo.</span>
              </span>
            </div>
            <div class="flex mt-1 lg:mt-3 items-center mb-4">
              <img src="../assets/images/check-mark.png" class="w-5 h-5 mr-3" alt />
              <span class="text-sm lg:text-base font-roboto">
                Tersedia
                <span class="font-semibold">Composer</span> dan
                <span class="font-semibold">SSH</span> untuk menginstall packages pilihan Anda.
              </span>
            </div>
            <p
              class="text-xs font-roboto"
            >Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis</p>
            <button
              class="font-bold text-white mt-4 text-sm lg:text-base lg:mt-8 rounded-full bg-niagaBlue py-2 px-5"
            >Pilih Hosting Anda</button>
          </div>
        </div>
        <div class="md:col-span-6 mt-3 md:mt-0 flex items-center justify-center">
          <img src="../assets/images/laravel.svg" class="lg:w-full w-4/5" alt="banner-php" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LaravelSupport",
};
</script>

<style scoped>
</style>
