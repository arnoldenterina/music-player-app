<template>
  <v-app id="inspire">
<!-- PLAYER DIV -->
    <v-navigation-drawer
     
      app
      clipped
      :width = "600"
    >

    <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing" style="width: 100%;"></youtube>

    </v-navigation-drawer>
<!-- <? PLAYER DIV -->

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon class="mx-4">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Music Player App <small>V.0001</small></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

<!-- CENTER CONTENT -->
    <v-content>
      <v-container class="">
        <v-row>
          <v-col class="">
            <h1>HELLO WORLD</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
<!-- </ CENTER CONTENT -->

  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      videoId: 'xKk655CDFn8',
      playerVars: {
        autoplay: 1
      }
    }),
    methods: {
      playing() {
        console.log('\o/ we are watching!!!')
      }
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>