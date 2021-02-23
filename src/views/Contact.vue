<template>
  <v-container
    id="google-maps"
    fluid
    tag="section"
  >
    <v-row>
      <v-col class="text-center">
        <h1>Контакты</h1>
      </v-col>
    </v-row>
    <v-row>

      <v-col
        cols="12"
        md="6"
      >
        <MaterialCard
          color="success"
          title="Спутниковая карта"
          class="px-5 py-3"
        >
          <v-card-text class="px-0 pb-0">
            <v-sheet>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8182.658543007002!2d76.96528683783558!3d52.28713847593566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1590232255628!5m2!1sru!2skz"
                width="100%"
                height="450"
                frameborder="0"
                style="border:0"
                allowfullscreen
              />
            </v-sheet>
          </v-card-text>
        </MaterialCard>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <div>
          <MaterialCard
            color="success"
            title="Наш адрес"
            class="px-5 py-3"
          >
            <v-card-text class="px-0 pb-0">
              <div class="text-h6">
                Республика Казахстан, г. Павлодар
              </div>
            </v-card-text>
          </MaterialCard>
        </div>
        <div>
          <MaterialCard
            color="success"
            title="Наш Email"
            class="px-5 py-3"
          >
            <v-card-text class="px-0 pb-0">
              <div class="text-h6">
                mihas-ox7-74@mail.ru
              </div>
            </v-card-text>
          </MaterialCard>
        </div>
        <div>
          <MaterialCard
            color="success"
            title="Наш телефон"
            class="px-5 py-3"
          >
            <v-card-text class="px-0 pb-0">
              <div class="text-h6">
                +77088210530
              </div>
            </v-card-text>
          </MaterialCard>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import MaterialCard from '@/components/MaterialCard';
  export default {
    components: {
      MaterialCard
    },
    
  }
</script>

<style lang="scss" scoped>

</style>
