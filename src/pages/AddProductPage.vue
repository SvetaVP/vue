<template>
  <v-container>
    <v-card ref="form">
      <v-card-text>
        <p class="pt-5 pb-5">Please fill in the fields below</p>
        <v-text-field label="Title" clearable></v-text-field>
        <v-text-field label="Type" clearable></v-text-field>
        <v-file-input
          label="Product picture"
          small-chips
          truncate-length="30"
          prepend-icon="mdi-camera"
        ></v-file-input>
        <v-text-field label="Price" prefix="$" clearable></v-text-field>
        <v-textarea label="Description" clearable></v-textarea>
        <v-btn type="submit" depressed elevation="2" x-large>Send</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>
