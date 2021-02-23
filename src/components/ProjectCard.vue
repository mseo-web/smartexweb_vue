<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>

    <v-card-title>Cafe Badilico</v-card-title>

    <v-card-text>
      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        text
        @click="projectDitails"
      >
        Подробнее
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    data: () => ({

    }),

    methods: {
      projectDitails () {

        setTimeout(() => (console.log('projectDitails-click')), 2000)
      },
    },
  }
</script>
