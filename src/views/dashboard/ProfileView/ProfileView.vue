<script setup>
import { ref } from 'vue';

// components
import EditProfileForm from '../../../components/profile/EditProfileForm.vue';
import EditChampionServices from '@/components/profile/EditChampionServices.vue';


// state
const activeTab = ref(1);

// constants
const tabs = ref([
  {
    id: 1,
    title: 'General Info',
    component: EditProfileForm,
  },
  {
    id: 2,
    title: 'Services',
    component: EditChampionServices,
  },
  {
    id: 3,
    title: 'Reset Password',
    component: null,
  },
]);
</script>

<template>
  <v-container>
    <v-tabs
      v-model="activeTab"
      dark
    >
      <v-tab
        v-for="item in tabs"
        :key="item.id"
        :value="item.id"
      >
        {{ item.title }}
      </v-tab>
    </v-tabs>
    
    <v-tabs-window v-model="activeTab">
      <v-tabs-window-item v-for="(item, index) in tabs" :key="index" :value="item.id">
        <v-container fluid class="pa-4 bg-blue-grey-darken-4">
          <component :is="item.component" />
        </v-container>
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>
