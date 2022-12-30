<template>
  <q-layout>
    <TheHeader></TheHeader>
    <q-page-container>
      <router-view />
    </q-page-container>
    <TheFooter></TheFooter>
    <!-- <AlertDialog
      :showDialog="showDialog"
      :title="messageTitle"
      :message="messageBody"
    /> -->
  </q-layout>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import { inject } from "vue";

import TheHeader from "src/components/Header.vue";
import TheFooter from "src/components/Footer.vue";
// import AlertDialog from "src/components/AlertDialog.vue";

export default defineComponent({
  name: "default",

  components: {
    TheHeader,
    TheFooter,
    // AlertDialog,
  },

  setup() {
    const bus = inject("bus");
    const messageTitle = ref(null);
    const messageBody = ref(null);
    const showDialog = ref(false);

    onMounted(() => {
      bus.on("SHOW_ALERT", (payload) => {
        showDialog.value = payload.dialogState;
        messageBody.value = payload.message;
        messageTitle.value = payload.title;
      });
    });

    return {
      messageTitle,
      messageBody,
      showDialog,
    };
  },
});
</script>
