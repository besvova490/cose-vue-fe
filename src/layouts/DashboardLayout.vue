
<script setup>
import { ref } from 'vue'

const drawer = ref(true);
const rail = ref(false);

const SERVICE_CHAMPION_LINKS = [
  { title: "Pick Up Order", icon: "mdi-invoice-text-plus-outline", to: "/dashboard/orders" },
  { title: "Requests", icon: "mdi-receipt-clock-outline", to: "/dashboard/requests" },
  { title: "Reports", icon: "mdi-file-check-outline", to: "/dashboard/reports" },
  { title: "Profile", icon: "mdi-account-edit", to: "/dashboard/profile" },
];

</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="link in SERVICE_CHAMPION_LINKS"
            :key="link.title"
            link
            :prepend-icon="link.icon"
            :title="link.title"
            :to="link.to"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="min-height: 100vh;">
        <div class="pa-6">
          <router-view/>
        </div> 
      </v-main>
    </v-layout>
  </v-card>
</template>
