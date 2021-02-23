<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          TECHNOLOGIES
        </div>
        <v-list-item-title class="headline mb-1">
          Laravel
        </v-list-item-title>
        <!-- <v-list-item-subtitle>Laravel - это фреймворк для веб-приложений с выразительным элегантным синтаксисом. Мы считаем, что развитие должно быть приятным и творческим опытом, чтобы быть по-настоящему полезным. Laravel пытается снять боль с разработки, упрощая общие задачи, используемые в большинстве веб-проектов.</v-list-item-subtitle> -->
        <p>
          Laravel - это фреймворк для веб-приложений с выразительным элегантным синтаксисом. Мы считаем, что развитие должно быть приятным и творческим опытом, чтобы быть по-настоящему полезным. Laravel пытается снять боль с разработки, упрощая общие задачи, используемые в большинстве веб-проектов.
        </p>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        rounded="4"
        size="80"
        color="grey"
      >
        <img src="require('@/assets/images/SM-logo2.png')">
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
  
  export default {
    name: 'ServiceCard',
  }
</script>

<style lang="scss" scoped>

</style>
