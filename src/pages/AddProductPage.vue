<template>
  <v-container>
    <v-card ref="form">
      <v-card-text>
        <p class="pt-5 pb-5">Please fill in the fields below</p>
        <v-text-field label="Title" clearable v-model="title"></v-text-field>
        <v-text-field label="Type" clearable v-model="type"></v-text-field>

        <v-file-input
          label="Product picture"
          small-chips
          truncate-length="30"
          prepend-icon="mdi-camera"
          v-model="productImg"
          type="file"
          id="primaryImage"
          ref="primaryImage"
          v-on:change="handleFileUpload()"
        ></v-file-input>

        <v-text-field
          label="Price"
          prefix="$"
          clearable
          type="number"
          v-model="price"
        ></v-text-field>

        <v-textarea
          label="Description"
          clearable
          v-model="description"
        ></v-textarea>

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
      title: "",
      type: "",
      productImg: {},
      price: null,
      description: "",
    };
  },
  methods: {
    ...mapActions(["addNewProduct"]),
    onSubmit() {
      if (this.title.length) {
        const newProduct = {
          id: Date.now(),
          title: this.title,
          type: this.type,
          description: this.description,
          productImg: this.productImg,
          price: this.price,
        };

        this.addNewProduct(newProduct);
      }
    },

    handleFileUpload() {
      this.primaryImage = this.$refs.file.files[0];
    },
  },
};
</script>
