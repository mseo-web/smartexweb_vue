<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="text-center">
          <h1>Используем технологии</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4" v-for="(item,i) in itemsServices" :key="i">
          <!-- <ServiceCard
            v-for="(item,i) in itemsServices"
            :key="i"
          >
          </ServiceCard> -->
          <v-card 
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4 primary--text">
                  TECHNOLOGIES
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ item.title }}
                </v-list-item-title>
                <!-- <p>
                  {{ item.description }}
                </p> -->
              </v-list-item-content>

              <v-list-item-avatar
                class="mt-n4"
                rounded
                size="80"
                color="secondary"
              >
                <img :src="item.src" class="resp-img">
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn
                color="orange lighten-2"
                text
              >
                Описание
              </v-btn>

              <v-spacer></v-spacer>

              <v-btn
                icon
                @click="show = !show"
              >
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>

                <v-card-text>
                  {{ item.description }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import ServiceCard from '@/components/ServiceCard';
  export default {
    components: {
      ServiceCard
    },
    data: () => ({
      show: false,
      itemsServices: [
        {
          title: 'WORDPRESS',
          src: require('@/assets/images/technologies/wp-logo_500x500.png'),
          description: 'WordPress - это программное обеспечение с открытым исходным кодом, которое вы можете использовать для создания красивого веб-сайта, блога или приложения.',
        },
        {
          title: 'APACHE CORDOVA',
          src: require('@/assets/images/technologies/cordova_logo1.png'),
          description: 'Мобильные приложения с HTML , CSS и JS Таргетинг на несколько платформ с одной базой кода Бесплатный и открытый исходный код',
        },
        {
          title: 'ELECTRON',
          src: require('@/assets/images/technologies/1200px-electron_software_framework_logo.svg_.png'),
          description: 'Electron использует Chromium и Node.js, так что Вы можете создавать свои приложения на HTML, CSS и JavaScript.',
        },
        {
          title: 'KOHANA',
          src: require('@/assets/images/technologies/kohana.png'),
          description: 'Kohana — это веб-фреймворк с открытым кодом, основанный на PHP5 и использующий концепцию HMVC (Hierarchical Model View Controller — Иерахические Модель-Вид-Контроллер). Его основные цели — быть безопасным, легким и простым в использовании, и это действительно так.',
        },
        {
          title: 'LARAVEL',
          src: require('@/assets/images/technologies/laravel-logo.png'),
          description: 'Laravel - это фреймворк для веб-приложений с выразительным элегантным синтаксисом. Мы считаем, что развитие должно быть приятным и творческим опытом, чтобы быть по-настоящему полезным. Laravel пытается снять боль с разработки, упрощая общие задачи, используемые в большинстве веб-проектов.',
        },
        {
          title: 'NETTY',
          src: require('@/assets/images/technologies/netty_logo_600px.png'),
          description: 'Инфраструктура клиент-сервер для разработки сетевых приложений Java, таких как серверы протоколов и клиенты. Асинхронная среда и инструменты сетевого приложения, управляемые событиями, используются для сетевого программирования.',
        },
        {
          title: 'PHP',
          src: require('@/assets/images/technologies/1200px-php-logo.svg_.png'),
          description: 'Скриптовый язык интенсивно применяемый для разработки веб-приложений. В настоящее время является одним из лидеров среди языков, применяющихся для создания динамических веб-сайтов.',
        },
        {
          title: 'JAVASCRIPT',
          src: require('@/assets/images/technologies/480px-unofficial_javascript_logo_2.svg_.png'),
          description: 'Обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам',
        },
        {
          title: 'MYSQL',
          src: require('@/assets/images/technologies/mysql.png'),
          description: 'Свободная реляционная система управления базами данных. Гибкость СУБД MySQL обеспечивается поддержкой большого количества типов таблиц. Разработку и поддержку MySQL осуществляет корпорация Oracle.',
        },
      ],
    }),
  }
</script>

<style lang="scss" scoped>
  .resp-img {
    width: 90%;
    height: auto;
    max-height: 90%;
  }
</style>
