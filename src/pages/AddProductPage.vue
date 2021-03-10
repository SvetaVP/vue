<template>
  <v-container>
    <v-card ref="form">
      <v-card-text>
        <p class="pt-5 pb-5">Please fill in the fields below</p>
        <v-text-field
          label="Product name"
          clearable
          v-model="name"
        ></v-text-field>

        <label
          >File
          <input
            type="file"
            id="primaryImage"
            ref="primaryImage"
            v-on:change="handleFileUpload()"
          />
        </label>

        <v-text-field
          label="Price"
          prefix="$"
          clearable
          type="number"
          v-model="price"
        ></v-text-field>

        <v-btn
          type="submit"
          depressed
          elevation="2"
          x-large
          @click="onSubmit()"
        >
          Send
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      name: "",
      primaryImage: "",
      price: null,
    };
  },
  methods: {
    ...mapActions(["addNewProduct"]),
    onSubmit() {
      if (this.name.length) {
        const newProduct = {
          name: this.name,
          primaryImage: this.primaryImage,
          price: this.price,
        };

        this.addNewProduct(newProduct);
      }
    },
    handleFileUpload() {
      this.primaryImage = this.$refs.primaryImage.files[0];
    },
  },
};
</script>
