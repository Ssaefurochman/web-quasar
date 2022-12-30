<template>
  <q-footer bordered style="background-color: #ffd700ff" class="text-black">
    <div style="margin-left: 5%; margin-top: 16px" class="row">
      <div class="col-11">
        <div class="text-h6">KABOBS DELIVERY ORDER</div>
        <div class="row q-mt-sm">
          <q-icon name="mdi-whatsapp" size="sm"></q-icon>
          +6285749729115
          <q-icon name="mdi-at" size="sm" class="q-ml-md"></q-icon>
          administrator@kabobs.id
          <q-img
            src="~assets/youtube.png"
            style="width: 25px"
            class="q-ml-lg"
          ></q-img>
          <q-img
            src="~assets/instagram.png"
            style="width: 25px"
            class="q-ml-xs"
          ></q-img>
          <q-img
            src="~assets/facebook.png"
            style="width: 25px"
            class="q-ml-xs"
          ></q-img>
          <q-img
            src="~assets/tiktok.png"
            style="width: 25px"
            class="q-ml-xs"
          ></q-img>
        </div>
        <div style="margin-top: 10px; margin-bottom: 20px">
          About | Kebijakan Privasi | Syarat dan Ketentuan | Copy Right Kabobs
          Premium Kebab. All Right Reserved.
        </div>
      </div>
      <div class="col-1">
        <q-img
          src="~assets/halal.png"
          style="width: 60px; height: auto; margin-top: 26%"
        ></q-img>
      </div>
    </div>
  </q-footer>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "default",

  components: {},

  setup() {
    return {};
  },
});
</script>
