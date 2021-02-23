<template>
  <v-sheet
    class="mx-auto"
    elevation="3"
    max-width="1050"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="success"
      show-arrows
      cycle
    >
      <v-slide-item
        v-for="(item,i) in itemsTechnologies"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : '#FFFFFF'"
          class="ma-4"
          height="50"
          width="150"
          @click="toggle"
        >
          <v-img
            height="50"
            :src="item.src"
          ></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
      itemsTechnologies: [
          {
            src: require('@/assets/images/technologies/vuejs1.png'),
          },
          {
            src: require('@/assets/images/technologies/laravel1.png'),
          },
          {
            src: require('@/assets/images/technologies/october1.png'),
          },
          {
            src: require('@/assets/images/technologies/flutter1.png'),
          },
          {
            src: require('@/assets/images/technologies/swift1.png'),
          },
          {
            src: require('@/assets/images/technologies/kotlin1.png'),
          },
          {
            src: require('@/assets/images/technologies/ReactNative1.png'),
          },
          {
            src: require('@/assets/images/technologies/django1.png'),
          },
        ],
    }),
  }
</script>
