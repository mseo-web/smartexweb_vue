<template>
    <div>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <h1>Проекты</h1>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-btn
            class="ma-2" 
            small
            color="accent"
            @click="selectProjects('all')"
          >
            Все
          </v-btn>
          <v-btn
            class="ma-2" 
            v-for="category in allСategoriesData" :key="category.id" 
            small
            color="accent"
            @click="selectProjects(`${category.description}`)"
          >
            {{ category.name }}
          </v-btn>
        </v-row>
        <v-row>
          <v-col v-for="item in projectsByCategoryData" :key="item.id">
            <v-card 
              class="mx-auto my-12"
              width="374"
            >

              <v-img
                height="250"
                :src="`https://laravel.smartexweb.kz/storage/${item.photo[0].id}/${item.photo[0].file_name}`"
              ></v-img>

              <v-card-text>
                <div class="font-weight-bold">{{ item.name }}</div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click="projectDitails(`${item.id}`)"
                >
                  Подробнее
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
        
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
    // import ProjectCard from '@/components/ProjectCard.vue'
    export default {
      name: "Projects",
      components: {
          // ProjectCard
      },
      computed: {
        ...mapGetters(["allProjects", "allСategories", "getProjectsByCategory"]),
        allProjectsData() {
          console.log('allProjects' + this.allProjects);
          return this.allProjects;
        },
        allСategoriesData() {
          console.log('allСategories' + this.allСategories);
          return this.allСategories;
        },
        projectsByCategoryData() {
          console.log('projectsByCategory' + this.getProjectsByCategory);
          if(this.getProjectsByCategory.length==0){
            return this.allProjects;
          }else {
            return this.getProjectsByCategory;
          }
        },
      },
      methods: {
        ...mapActions(["projectsIndex", "сategoriesIndex", "projectsGetByCategory"]),

        selectAllProjects() {
          console.log('select-all-click')
        },
        selectProjects(category) {
          console.log('select-category: ' + category)
          this.projectsGetByCategory(category)
        },
        projectDitails(projectId) {
          console.log('projectDitails: ' + projectId)
          this.$router.push({ path: `/projects/${projectId}` });
          // this.$router.push({ name: 'projects', params: { id: projectId } });
        },
      },
      created () {
        this.сategoriesIndex();
        this.projectsIndex();
        this.projectsGetByCategory('all');
      },
    }
</script>

<style lang="scss" scoped>

</style>
