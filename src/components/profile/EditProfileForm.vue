<script setup>
</script>

<template>
  <form class="w-50" @submit="onSubmit">
    <v-card
      class="mx-auto pa-8 w-100"
      max-width="620"
      rounded="lg"
    >
      <v-row>
        <v-col sm="24">
          <v-file-input
            label="File input"
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            density="compact"
            variant="outlined"
            placeholder="Upload your avatar"
            accept="image/png, image/jpeg, image/webp"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            name="firstName"
            label="First Name"
            placeholder="John"
            density="compact"
            variant="outlined"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <v-text-field
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            density="compact"
            variant="outlined"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="24">
          <v-text-field
            name="email"
            label="Email"
            density="compact"
            variant="outlined"
            placeholder="example@mail.com"
          />
        </v-col>
      </v-row>
      <v-card-actions class="pa-0">
        <v-btn
          color="blue"
          variant="tonal"
          type="submit"
          block
        >
          Sign Up
        </v-btn>
      </v-card-actions>
    </v-card>
  </form>
</template>
