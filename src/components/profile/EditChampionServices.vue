<script setup>
</script>

<template>
  <v-row>
    <v-col cols="3">
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
          class="align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
          cover
        >
          <v-card-title class="text-white">
            Service Name
          </v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            block
            flat
            variant="tonal"
            color="success"
          >
          Connect
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
