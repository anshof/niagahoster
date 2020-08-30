<template>
  <div class="lg:grid lg:grid-cols-12 mx-10 md:mx-32 lg:mx-24 my-10 font-body">
    <div
      v-bind:key="price.id"
      v-for="price in prices"
      class="lg:col-span-3 mb-5 mr-2 border bg-white"
    >
      <div class="border py-2 text-3xl font-bold">{{price.title}}</div>
      <div class="border py-2">
        <p class="line-through">Rp {{price.realPrice}}</p>
        <span>
          Rp
          <span
            class="text-4xl font-bold"
          >{{price.discountPrice.slice(0, (price.discountPrice.length)-3)}}</span>
          <span class="font-semibold">{{price.discountPrice.slice(-4,-1)}}</span>/bln
        </span>
      </div>
      <div class="border py-2">
        <span class="font-semibold font-roboto">{{price.sumUser}}</span> Pengguna Terdaftar
      </div>
      <div class="py-2" v-bind:key="price.others[pri]" v-for="pri in price.others">
        <span class="font-roboto">{{pri}}</span>
      </div>
      <button
        class="my-3 font-semibold border-niagaGray2x rounded-full border-2 px-5 py-2"
      >{{price.discount}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Price",
  props: ["prices"],
};
</script>

<style scoped>
</style>
