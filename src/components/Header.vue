<template>
  <div>
    <q-header class="bg-white">
      <q-toolbar
        class="rounded-border q-py-xs"
        style="
          background-color: #ffd700ff;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
        "
      >
        <q-img
          src="~assets/kabobs-logo-md.png"
          spinner-color="white"
          style="width: 50px; margin-left: 3%"
          class="q-my-xs"
        />

        <q-btn
          color="red-6"
          text-color="white"
          style="border-radius: 10px; margin-left: 5%"
          class="q-px-lg"
          @click="showDialogMethod = true"
        >
          Delivery order
        </q-btn>
        <q-btn
          color="red-6"
          text-color="white"
          style="border-radius: 10px; margin-left: 5px"
          class="q-px-lg"
          @click="showPromotion()"
        >
          Get Promotions
        </q-btn>

        <q-space />

        <!-- <q-icon
          name="mdi-qrcode-scan"
          size="28px"
          class="q-mr-sm q-ml-md"
        ></q-icon>
        <q-icon name="mdi-account" size="28px" class="q-mx-sm"></q-icon> -->
        <q-btn flat color="white" @click="showDialogLogin = true">
          {{ user.token ? "Keluar" : "Masuk" }}
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-dialog v-model="showDialogLogin">
      <q-card
        class="my-card"
        style="background-color: #ffd700ff; border-radius: 10px; width: 600px"
      >
        <q-card-section>
          <div class="row">
            <div class="col-2 text-center">
              <q-img
                src="~/assets/kebab.png"
                height="70px"
                width="50px"
              ></q-img>
            </div>
            <div class="text-h4 text-center col-8 q-mt-md">
              Hallo Teman Kabobs
            </div>
            <div class="col-2 text-center">
              <q-img
                src="~/assets/kebab.png"
                height="70px"
                width="50px"
              ></q-img>
            </div>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none" style="background-color: #ffd700ff">
          <q-tabs
            v-model="tab"
            dense
            class="text-white"
            :breakpoint="0"
            align="right"
            active-color="red"
            indicator-color="red"
          >
            <q-tab :ripple="false" name="login" label="Login" />
            <q-tab :ripple="false" name="guest" label="Guest Order" />
          </q-tabs>
          <q-tab-panels
            v-model="tab"
            animated
            style="background-color: #ffd700ff"
          >
            <q-tab-panel name="login">
              <div class="q-pt-md">
                <Login></Login>
              </div>
            </q-tab-panel>

            <q-tab-panel name="guest">
              <div class="q-pt-md">
                <Guest></Guest>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog v-model="showDialogMethod" width="700px">
      <DeliveryOrderVue></DeliveryOrderVue>
    </q-dialog>
    <AlertDialog
      :showDialog="showAlertDialog"
      :title="'YOLO'"
      :message="'YOLOOOOOOOOOOOOOOOOOOOOOOOOO'"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useUserStore } from "../stores/user";
import Login from "./Login.vue";
import Guest from "./Guest.vue";
import DeliveryOrderVue from "./DeliveryOrder.vue";
import AlertDialog from "./AlertDialog.vue";
import { inject } from "vue";

export default defineComponent({
  name: "default",

  components: {
    Login,
    Guest,
    DeliveryOrderVue,
    AlertDialog,
  },

  setup() {
    const user = useUserStore();
    const showDialogLogin = ref(false);
    const showDialogMethod = ref(false);
    const showAlertDialog = ref(false);
    const tab = ref("login");
    const bus = inject("bus");
    return {
      user,
      showDialogLogin,
      tab,
      showDialogMethod,
      showAlertDialog,

      showPromotion() {
        showAlertDialog.value = true;
        console.log("showAlertDialog", showAlertDialog.value);
        // bus.emit("SHOW_ALERT", {
        //   dialogState: true,
        //   message: "Silakan untuk melakukan login terlebih dahulu.",
        //   title: "Alert",
        // });
      },
    };
  },
});
</script>
