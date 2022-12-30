<template>
  <div style="min-width: 700px">
    <q-card
      class="my-card q-py-md"
      style="background-color: #ffd700ff; border-radius: 20px"
    >
      <q-card-section>
        <div class="row">
          <div class="col-2 text-center">
            <q-img src="~/assets/kebab.png" height="70px" width="50px"></q-img>
          </div>
          <div class="text-center col-8 q-mt-md" style="margin-top: 0px">
            <p class="text-h4" style="margin-bottom: 0px">Hallo Teman Kabobs</p>
            <p class="text-h6" style="margin-bottom: 0px">
              Silakan pilih outlet pilihanmu
            </p>
            <p>(Pesanan akan dikirim dari outlet yang dipilih)</p>
          </div>
          <div class="col-2 text-center">
            <q-img src="~/assets/kebab.png" height="70px" width="50px"></q-img>
          </div>
        </div>
      </q-card-section>

      <q-card-section
        class="q-pt-none"
        style="background-color: #ffd700ff; margin-top: 5%"
      >
        <div class="row q-px-xl" style="width: 100%">
          <div class="col-6" style="padding-right: 20px">
            <q-select
              filled
              v-model="citySelect"
              label="Pilih kota"
              :options="cities"
              option-value="id"
              option-label="name"
              option-disable="inactive"
              bg-color="white"
              emit-value
              map-options
            />
          </div>
          <div class="col-6" style="padding-left: 20px">
            <q-select
              filled
              v-model="outletSelect"
              label="Pilih Outlet"
              :options="outlets"
              option-value="id"
              option-label="name"
              option-disable="inactive"
              bg-color="white"
              emit-value
              map-options
            />
          </div>
        </div>
        <div class="text-center text-h6 q-mb-sm" style="margin-top: 7%">
          Silakan pilih jenis pesanan
        </div>
        <div class="q-px-xl text-center">
          <div>
            <q-btn
              v-for="item in deliveryMethods"
              :key="item"
              :label="item"
              @click="selectedMethod = item"
              :color="selectedMethod === item ? 'red-6' : 'white'"
              :class="selectedMethod === item ? 'text-white' : 'text-black'"
              class="q-mx-sm"
              rounded
              style="width: 100px"
            ></q-btn>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <div class="q-px-xl q-pt-md text-center">
          <div>
            <q-btn
              label="Batal"
              color="red-6 text-white"
              class="q-mx-sm"
              style="width: 120px"
            />
            <q-btn
              :disable="!selectedMethod"
              label="Lanjut"
              color="green-6 text-white"
              class="q-mx-sm"
              style="width: 120px"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  setup() {
    const deliveryMethods = ["delivery", "pick up"];
    const selectedMethod = ref(null);
    const email = ref(null);
    const phone = ref(null);
    const address = ref(null);
    const citySelect = ref(null);
    const outletSelect = ref(null);
    const cities = [
      { id: 1, name: "Kota Bandung" },
      { id: 2, name: "Kab. Sumedang" },
      { id: 3, name: "Kab. Cimahi" },
      { id: 4, name: "Kota Bekasi" },
      { id: 5, name: "Kota Depok" },
    ];
    const dataOutlets = [
      { id: 1, name: "Kabobs Kiara Condong", cityId: 1 },
      { id: 2, name: "Kabobs Dago", cityId: 1 },
      { id: 3, name: "Kabobs Asia Plaza", cityId: 2 },
      { id: 4, name: "Kabobs Griya Sumedang", cityId: 2 },
      { id: 5, name: "Kabobs Cibubur", cityId: 4 },
      { id: 6, name: "Kabobs Depok", cityId: 5 },
      { id: 7, name: "Kabobs Cimahi", cityId: 3 },
    ];
    let outlets = ref([]);

    watch(citySelect, (citySelect, prevCitySelect) => {
      if (citySelect) {
        outlets.value = dataOutlets.filter((v) => v.cityId === citySelect);
        outletSelect.value = null;
        selectedMethod.value = null;
      } else {
        outlets.value = [];
        outletSelect.value = null;
        selectedMethod.value = null;
      }
    });

    return {
      email,
      phone,
      address,
      isPwd: ref(true),
      deliveryMethods,
      selectedMethod,
      cities,
      outlets,
      citySelect,
      outletSelect,
    };
  },
});
</script>
