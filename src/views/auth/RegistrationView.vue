<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { object, string } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';

// state
const visible = ref(false);

// effects
const { errors, handleSubmit, defineField } = useForm({
  validateOnMount: false,
  validationSchema: toTypedSchema(
    object({
      firstName: string().min(1, "First name is required"),
      lastName: string().min(1, "Last name is required"),
      avatar: string().min(1, "Avatar is required"),
      email: string().email(),
      password: string().min(8),
      confirmationPassword: string().min(8),
    }).refine(data => data.password === data.confirmationPassword, {
      message: 'Passwords do not match',
      path: ['confirmationPassword'],
    })
  ),
  initialValues: {
    email: "",
    password: "",
    confirmationPassword: "",
    avatar: "",
    firstName: "",
    lastName: "",
  },
});

// methods
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [confirmationPassword, confirmationPasswordAttrs] = defineField("confirmationPassword");
const [avatar, avatarAttrs] = defineField("avatar");
const [firstName, firstNameAttrs] = defineField("firstName");
const [lastName, lastNameAttrs] = defineField("lastName");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form class="w-75" @submit="onSubmit">
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>
    <v-card
      class="mx-auto pa-12 pb-8 w-100"
      elevation="8"
      max-width="620"
      rounded="lg"
    >
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
            :error-messages="errors.firstName"
            v-bind="firstNameAttrs"
            v-model="firstName"
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
            :error-messages="errors.lastName"
            v-bind="lastNameAttrs"
            v-model="lastName"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <v-file-input
            label="File input"
            prepend-icon=""
            prepend-inner-icon="mdi-camera"
            density="compact"
            variant="outlined"
            placeholder="Upload your avatar"
            :error-messages="errors.avatar"
            v-bind="avatarAttrs"
            v-model="avatar"
            accept="image/png, image/jpeg, image/webp"
          />
        </v-col>
        <v-col sm="12">
          <v-switch
            label="I provide services"
            hide-details
            color="primary"
          ></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="24">
          <v-text-field
            name="email"
            label="Email"
            density="compact"
            variant="outlined"
            placeholder="example@mail.com"
            :error-messages="errors.email"
            v-bind="emailAttrs"
            v-model="email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            name="password"
            :error-messages="errors.password"
            v-bind="passwordAttrs"
            v-model="password"
          />
        </v-col>
        <v-col cols="6">
          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Password Confirmation"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
            name="confirmationPassword"
            :error-messages="errors.confirmationPassword"
            v-bind="confirmationPasswordAttrs"
            v-model="confirmationPassword"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="24">
      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        type="submit"
      >
        Sign Up
      </v-btn>
        <v-card-text class="text-center">
          Already have an account?
          <a
            class="text-blue text-decoration-none"
            href="/auth/login"
          >
            Log in
          </a>
        </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </form>
</template>
