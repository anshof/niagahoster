<template>
  <div class="home">
    <Banner />
    <ThreePanels />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ThreePanels from "../components/ThreePanels";
export default {
  name: "Home",
  components: {
    Banner,
    ThreePanels,
  },
};
</script>
