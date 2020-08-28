<template>
  <div class="home">
    <Banner />
    <ThreePanels />
    <Quotes />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ThreePanels from "../components/ThreePanels";
import Quotes from "../components/Quotes";
export default {
  name: "Home",
  components: {
    Banner,
    ThreePanels,
    Quotes,
  },
};
</script>
