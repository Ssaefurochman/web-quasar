<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
        label="username"
        bg-color="white"
        dense
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        label="password"
        dense
        lazy-rules
        bg-color="white"
        :rules="[
          (val) =>
            (val !== null && val !== '') || 'Password tidak boleh kosong',
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <q-space></q-space>

      <div class="row wrap items-stretch content-start">
        <div class="col">
          <q-checkbox v-model="remember" label="Ingat saya" />
        </div>
        <div class="col text-right q-mt-sm">
          <a style="color: red"> Reset Password </a>
        </div>
      </div>

      <div align="right">
        <q-btn label="Login" class="full-width" type="submit" color="red" />
      </div>
      <div align="right">
        <a style="color: red"> Daftar sekarang </a>
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
    const password = ref(null);
    const remember = ref(false);

    return {
      name,
      password,
      remember,
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
