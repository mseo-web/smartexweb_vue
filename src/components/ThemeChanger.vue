<template>
  <v-container>
    <v-row justify="center">
      <!-- <v-btn icon @click="toggle_dark_mode">
          <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn> -->
      <v-btn
        class="ma-2"
        outlined
        color="indigo"
        @click="toggle_dark_mode"
      >
      <v-icon
        left
      >
        mdi-theme-light-dark
      </v-icon>
        Цветовая тема
      </v-btn>
    </v-row>
  </v-container>
    
</template>

<script>
export default {
    name: "ThemeChanger",
    methods: {
        toggle_dark_mode: function() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
        }
    },
    mounted() {
        const theme = localStorage.getItem("dark_theme");
        if (theme) {
            if (theme === "true") {
                this.$vuetify.theme.dark = true;
            } else {
                this.$vuetify.theme.dark = false;
            }
        } else if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            this.$vuetify.theme.dark = true;
            localStorage.setItem(
                "dark_theme",
                this.$vuetify.theme.dark.toString()
            );
        }
    }
}
</script>
