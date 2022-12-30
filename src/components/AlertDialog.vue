<template>
  <q-dialog v-model="showDialog">
    <q-card>
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ message }}
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { toRef } from "vue";

export default {
  setup(props) {
    console.log(props);
    const showDialog = toRef(props, "showDialog");
    const title = toRef(props, "title");
    const message = toRef(props, "message");
    return { showDialog, title, message };
  },
};
</script>
