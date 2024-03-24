<template>
  <v-btn>
    Button
  </v-btn>
  <v-chip append-icon="$vuetify">
  Chip
</v-chip>
<v-tooltip text="Tooltip">
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props">Tooltip</v-btn>
  </template>
</v-tooltip>
<v-text-field label="Label"></v-text-field>
<v-date-picker multiple="range" width="400"></v-date-picker>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
