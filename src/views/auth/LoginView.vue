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
      email: string().email(),
      password: string().min(8),
    })
  ),
  initialValues: {
    email: "",
    password: "",
  },
});

// methods
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>

<template>
  <form class="w-50" @submit="onSubmit">
    <v-img
      class="mx-auto my-6"
      max-width="228"
      src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
    ></v-img>

    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <div class="text-subtitle-1 text-medium-emphasis">Account</div>
      <v-text-field
        density="compact"
        placeholder="Email address"
        prepend-inner-icon="mdi-email-outline"
        variant="outlined"
        name="email"
        :error-messages="errors.email"
        v-bind="emailAttrs"
        v-model="email"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Password

        <a
          class="text-caption text-decoration-none text-blue"
          href="#"
          rel="noopener noreferrer"
          target="_blank"
        >
          Forgot login password?</a>
      </div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="Enter your password"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        name="password"
        @click:append-inner="visible = !visible"
        :error-messages="errors.password"
        v-bind="passwordAttrs"
        v-model="password"
      ></v-text-field>
      <v-btn
        class="mb-8"
        color="blue"
        size="large"
        variant="tonal"
        block
        type="submit"
      >
        Log In
      </v-btn>

      <v-card-text class="text-center">
        <a
          class="text-blue text-decoration-none"
          href="/auth/register"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </a>
      </v-card-text>
    </v-card>
  </form>
</template>
