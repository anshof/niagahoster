<template>
  <div class="mx-10 md:mx-24 text-center">
    <hr class="h-1 w-20 border-0 mx-auto bg-gray-400 mt-5 md:mt-0 text-gray-400" />
    <p class="lg:text-3xl text-xl font-body mt-5 md:mt-8">Semua Paket Hosting Sudah Termasuk</p>
    <div class="md:grid md:grid-cols-12 mt-2 md:mt-5 lg:mt-10 gap-5">
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/php.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">PHP Semua Versi</p>
          <p class="font-roboto text-sm lg:text-base">
            Pilih mulai dari versi PHP 5.3 s/d PHP 7.
            Ubah sesuka Anda!
          </p>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/db.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">MySQL Versi 5.6</p>
          <p class="font-roboto text-sm lg:text-base">
            Nikmati MySQL versi terbaru, terbaru dan
            kaya akan fitur.
          </p>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/cpanel.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">Panel Hosting cPanel</p>
          <p class="font-roboto text-sm lg:text-base">
            Kelola website dengan panel canggih yang
            familiar di hati Anda.
          </p>
        </div>
      </div>
    </div>
    <div class="md:grid md:grid-cols-12 mt-2 md:mt-5 lg:mt-10 gap-5">
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/garansi.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">Garansi Uptime 99.9%</p>
          <p
            class="font-roboto text-sm lg:text-base"
          >Data center yang mendukung kelangsungan website Anda 24/7.</p>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/innodb.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">Database InnoDB</p>
          <p
            class="font-roboto text-sm lg:text-base"
          >Jumlah dan ukuran database yang tumbuh sesuai kebutuhan Anda.</p>
        </div>
      </div>
      <div class="md:col-span-4 flex justify-center mb-6">
        <div>
          <img src="../assets/images/mysql.svg" class="w-24 mx-auto" alt="php" />
          <p class="font-body text-base lg:text-lg font-bold">Wildcard Remote MySQL</p>
          <p
            class="font-roboto text-sm lg:text-base"
          >Mendukung s/d 25 max_user_connection dan 100 max_connections.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Package",
};
</script>

<style scoped>
</style>
