<template>
  <div class="home">
    <Banner />
    <ThreePanels />
    <Quotes />
    <Price v-bind:prices="prices" />
    <Table />
    <Package />
    <LaravelSupport />
    <Modul />
    <LinuxHosting />
    <SocialMedia />
    <Bantuan />
    <Footer />
  </div>
</template>

<script>
import Banner from "../components/Banner";
import ThreePanels from "../components/ThreePanels";
import Quotes from "../components/Quotes";
import Price from "../components/Price";
import Table from "../components/Table";
import Package from "../components/Package";
import LaravelSupport from "../components/LaravelSupport";
import Modul from "../components/Modul";
import LinuxHosting from "../components/LinuxHosting";
import SocialMedia from "../components/SocialMedia";
import Bantuan from "../components/Bantuan";
import Footer from "../components/Footer";
export default {
  name: "Home",
  components: {
    Banner,
    ThreePanels,
    Quotes,
    Footer,
    Bantuan,
    SocialMedia,
    LinuxHosting,
    Modul,
    LaravelSupport,
    Package,
    Table,
    Price,
  },
  data() {
    return {
      prices: [
        {
          id: 1,
          title: "Bayi",
          realPrice: 19900,
          discountPrice: "14900",
          sumUser: 938,
          others: [
            "0.5X RESOURCE POWER",
            "500 MB Disk Space",
            "Unlimited Bandwith",
            "Unlimited Databases",
            "1 Domain",
            "Instant Backup",
            "unlimited SSL Gratis Selamanya ",
          ],
          discount: "Pilih Sekarang",
        },
        {
          id: 2,
          title: "Pelajar",
          realPrice: 46900,
          discountPrice: "23450",
          sumUser: 4168,
          others: [
            "1X RESOUCE POWER",
            "Unlimited MB Disk Space",
            "Unlimited Bandwith",
            "Unlimited POP3 Email",
            "Unlimited Databases",
            "10 Addon Domain",
            "Instant Backup",
            "Domain Gratis Selamanya",
            "Unlimited SSL Gratis Selamanya",
          ],
          discount: "Pilih Sekarang",
        },
        {
          id: 3,
          title: "Personal",
          realPrice: 58900,
          discountPrice: "38900",
          sumUser: 10017,
          others: [
            "2X RESOUCE POWER",
            "Unlimited Disk Space",
            "Unlimited Bandwith",
            "Unlimited POP3 Email",
            "Unlimited Databases",
            "Unlimited Addon Domains",
            "Instant Backup",
            "Domain Gratis Selamanya",
            "Unlimited SSL Gratis Selamanya",
            "Private Name Server",
            "SpamAssasin Mail Protection",
          ],
          discount: "Pilih Sekarang",
        },
        {
          id: 4,
          title: "Bisnis",
          realPrice: 109900,
          discountPrice: "65900",
          sumUser: 3552,
          others: [
            "3X RESOUCE POWER",
            "Unlimited Disk Space",
            "Unlimited Bandwith",
            "Unlimited POP3 Email",
            "Unlimited Databases",
            "Unlimited Addon Domains",
            "Magic Auto Backup & Restore",
            "Domain Gratis Selamanya",
            "Unlimited SSL Gratis Selamanya",
            "Prioritas layanan Support",
            "SpamAssasin Mail Protection",
          ],
          discount: "Diskon 40%",
        },
      ],
    };
  },
};
</script>
