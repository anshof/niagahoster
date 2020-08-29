<template>
  <div class="mx-10 lg:mx-48 my-3 md:my-10 lg:my-16">
    <p class="lg:text-3xl text-xl font-body">Powerful dengan Limit PHP yang Lebih Besar</p>
    <div class="md:grid md:grid-cols-10 gap-5 mt-5 font-roboto">
      <table class="md:col-span-5 w-full mb-5 md:mb-0">
        <tr>
          <td class="border px-5 py-2 flex items-center justify-start md:justify-center text-left">
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt="check"
            />
            <span>max execution time 300s</span>
          </td>
        </tr>
        <tr>
          <td
            class="border-r-2 border-l-2 px-5 py-2 flex items-center bg-gray-200 justify-start md:justify-center text-left"
          >
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt="check"
            />
            <span>max execution time 300s</span>
          </td>
        </tr>
        <tr>
          <td class="border px-5 py-2 flex items-center justify-start md:justify-center">
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt="check"
            />
            php memory 1024 MB
          </td>
        </tr>
      </table>
      <table class="md:col-span-5 w-full">
        <tr>
          <td class="border px-5 py-2 flex items-center justify-start md:justify-center">
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt="check"
            />
            <span>post max size 128 MB</span>
          </td>
        </tr>
        <tr>
          <td
            class="border-r-2 border-l-2 px-5 py-2 flex items-center bg-gray-200 justify-start md:justify-center text-left"
          >
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt
            />
            upload max file size 128 MB
          </td>
        </tr>
        <tr>
          <td class="border px-5 py-2 flex items-center justify-start md:justify-center">
            <img
              src="../assets/images/check-mark.png"
              class="w-5 h-5 relative md:absolute md:-ml-32 lg:-ml-40 mr-3 md:mr-0"
              alt
            />
            max input vars 2500
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
};
</script>

<style scoped>
</style>
