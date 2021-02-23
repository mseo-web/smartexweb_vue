<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h1>Наша команда</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <div>
            <MaterialCard
              color="success"
              :avatar="require('@/assets/images/SM2.png')"
              class="px-5 py-3"
            >
              <v-card-text class="text-center">
                <v-avatar color="info" size="86" class="authors">
                  <v-icon dark size="64">mdi-check-bold</v-icon>
                </v-avatar>

                <div
                  class="text-h5 font-weight-bold primary--text pt-4"
                >
                  Сергей Михайлов
                </div>

                <div class="text-body-1 py-4">
                  WEB DEVELOPER
                </div>

                <div>
                  <v-btn icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-youtube</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </MaterialCard>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <div>
            <MaterialCard
              color="success"
              :avatar="require('@/assets/images/OM1.png')"
              class="px-5 py-3"
            >
              <v-card-text class="text-center">
                <v-avatar color="info" size="86" class="authors">
                  <v-icon dark size="64">mdi-check-bold</v-icon>
                </v-avatar>

                <div
                  class="text-h5 font-weight-bold primary--text pt-4"
                >
                  Оксана Михайлова
                </div>

                <div class="text-body-1 py-4">
                  UX DESIGNER
                </div>

                <div>
                  <v-btn icon>
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-twitter</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-youtube</v-icon>
                  </v-btn>

                  <v-btn icon>
                    <v-icon>mdi-instagram</v-icon>
                  </v-btn>
                </div>
              </v-card-text>
            </MaterialCard>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
  .authors {
    position: relative;
    top: -100px;
    margin-bottom: -100px;
  }
</style>
