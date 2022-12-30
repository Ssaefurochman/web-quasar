<template>
  <div align="center" style="margin-top: 11px">
    <q-carousel
      style="width: 95vw; height: auto"
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      :autoplay="true"
    >
      <!-- <q-carousel-slide v-for="(item, i) in items" :key="i" :name="i" /> -->
      <q-carousel-slide
        v-for="(item, i) in items"
        :key="i"
        :name="i"
        class="column no-wrap"
      >
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img
            :src="item"
            class="shadow-2 rounded-borders"
            style="border-radius: 22px"
          />
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div style="width: 70vw" align="center">
      <div
        style="
          margin-top: 8px;
          margin-bottom: 18px;
          color: #b40f0f;
          font-weight: bold;
          font-size: 36pt;
        "
      >
        OUR MENU
      </div>
      <div class="row">
        <div v-for="i in 8" class="col-md-3 col-sm-6 q-px-sm q-my-md" :key="i">
          <q-card style="border-radius: 15px; background-color: #f8f8ff">
            <q-card-section>
              <q-img
                src="~assets/cheesy_mayo.png"
                spinner-color="white"
                style="height: 35%; border-radius: 10px"
                class="q-my-xs"
              />
              <div class="q-mt-xs text-left text-weight-bold">
                Beef Cheesy Mayo Kebab
              </div>
              <div class="q-mt-xs text-left text-weight-bold">Rp. 20.000</div>
              <div align="right">
                <q-btn
                  color="primary"
                  style="width: 100px; border-radius: 10px; margin-top: 5px"
                >
                  Order
                </q-btn>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
      <div class="text-h5 text-red q-my-md">
        <q-btn
          color="red-6"
          style="
            width: 139px;
            height: 41px;
            border-radius: 10px;
            margin-top: 5px;
          "
        >
          Order Now
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

const items = [
  "http://devel.kabobs.id/web_admin/web/img/slider/slide_one.jpg",
  "http://devel.kabobs.id/web_admin/web/img/slider/slide_two.jpg",
  "http://devel.kabobs.id/web_admin/web/img/slider/slide_three.jpg",
  "http://devel.kabobs.id/web_admin/web/img/slider/slide_four.jpg",
];

export default defineComponent({
  name: "IndexPage",
  setup() {
    return {
      slide: ref(1),
      items,
    };
  },
});
</script>
