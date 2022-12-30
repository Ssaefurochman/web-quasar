<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="Fullname"
        bg-color="white"
        dense
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="email"
        label="Email"
        bg-color="white"
        dense
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="phone"
        label="Phone"
        bg-color="white"
        dense
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />
      <q-input
        filled
        v-model="address"
        label="Addess"
        bg-color="white"
        dense
        lazy-rules
        type="textarea"
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-space></q-space>

      <div align="right">
        <q-btn label="Order now" class="full-width" type="submit" color="red" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const $q = useQuasar();
    const name = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const address = ref(null);

    return {
      name,
      email,
      phone,
      address,
      isPwd: ref(true),

      onSubmit() {
        if (accept.value !== true) {
          $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "You need to accept the license and terms first",
          });
        } else {
          $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Submitted",
          });
        }
      },

      onReset() {
        name.value = null;
        age.value = null;
        accept.value = false;
      },
    };
  },
});
</script>
