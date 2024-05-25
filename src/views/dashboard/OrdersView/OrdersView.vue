<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { GoogleMap, Marker } from 'vue3-google-map';

// state
const isModalOpen = ref(false);
const isShowMap = ref(true);
const mapRef = ref(null);
const orders = ref([]);

// hooks
onMounted(() => {
  axios.get("http://localhost:8080/api/v1/orders").then((response) => {
    orders.value = response.data;
  });
})

// methods
const center = { lat: 40.689247, lng: -74.044502 }
const TABLE_COLUMNS = [
  { title: 'Title', key: 'title' },
  { title: 'Date', key: 'orderDate' },
  { title: 'Service', key: 'service.name' },
  { title: 'Price', key: 'price' },
  { title: 'Payment Type', key: 'paymentType' },
  { title: null, key: 'pickUp' },
];

const onBoundsChanged = () => {
  const map = mapRef.value.map;

  const bounds = map.getBounds();
  const ne = bounds.getNorthEast();
  const sw = bounds.getSouthWest();

  console.log('Bounds changed', {
    ne: { lat: ne.lat(), lng: ne.lng() },
    sw: { lat: sw.lat(), lng: sw.lng() },
  });

  // fetch data
  axios.get(`http://localhost:8080/api/v1/orders?coordinatesFrom=${ne.lat()}|${ne.lng()}&coordinatesTo=${sw.lat()}|${sw.lng()}`).then((response) => {
    orders.value = response.data;
  });
}
</script>

<template>
  <TransitionGroup name="grid" tag="div" class="grid">
    <div class="grid-item" key="table">
      <v-card>
        <v-card-title class="text-h6 text-md-h5 text-lg-h4">
          Pick Up Order
        </v-card-title>
        <v-divider></v-divider>
        <v-switch label="Show Map" v-model="isShowMap" color="primary" />
        <v-card-text>
          <v-data-table :headers="TABLE_COLUMNS" :items="orders" density="compact" item-key="name">
            <template v-slot:[`item.name`]="{ item }">
              <u @click="isModalOpen = true" style="cursor: pointer">
                {{ item.name }}
              </u>
            </template>
            <template v-slot:[`item.pickUp`]>
              <v-btn color="success" variant="tonal" size="small" prepend-icon="mdi-check-bold">
                Pick Up
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </div>
    <div class="grid-item grid-item-map" v-if="isShowMap" key="map">
      <GoogleMap
          api-key=""
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="10"
          ref="mapRef"
          stylers=""
          @dragend="onBoundsChanged"
          @zoom_changed="onBoundsChanged"
          @after-init="onBoundsChanged"
        >
          <Marker
            v-for="order in orders"
            :key="order.id"
            :options="{ position: {
              lat: +order.latitude,
              lng: +order.longitude
            } }"
          />
        </GoogleMap>
    </div>
  </TransitionGroup>

  <v-dialog v-model="isModalOpen" width="auto">
    <v-card max-width="400" prepend-icon="mdi-update"
      text="Your application will relaunch automatically after the update is complete." title="Update in progress">
      <template v-slot:actions>
        <v-btn class="ms-auto" text="Ok" @click="dialog = false"></v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
.grid {
  display: flex;
  width: 100%;

  .grid-item {
    flex: 1 1 50%;
    transition: all 1s ease;
  }
  
  .grid-item-map {
    min-height: 80vh;
  }
}

.grid-enter-active, .grid-leave-active {
  transition: all .2s ease;
}
.grid-enter, .grid-leave-to /* .grid-leave-active in <2.1.8 */ {
  opacity: 0;
  flex: 0 0 0 !important;
}
.grid-enter-active {
  opacity: 0;
  flex: 0 0 0 !important;
  width: 0;
  transition: opacity .2s, transform .2s;
}

.grid-leave-active {
  transition: opacity .2s, transform .2s;
}
.grid-leave-to {
  opacity: 0;
}
</style>
