<template>
  <v-app id="inspire">
<!-- PLAYER DIV -->
    <v-navigation-drawer
      app
      clipped
      fixed
      :width = "500"
      permanent
    >

      <Player></Player>

    </v-navigation-drawer>
<!-- <? PLAYER DIV -->

    <v-app-bar
      app
      clipped-left
      color="deep-purple lighten-2"
      dense
      fixed
    >
      <router-link to="/">
        <v-avatar size="42px" tile>
          <img src="@/assets/ARMUSIC_LOGO.png" alt="Vuetify">
        </v-avatar>
      </router-link>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title"> ARMusic</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          @click:append="search"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          v-on:keyup.enter="search"
          v-model="search_qs"
        ></v-text-field>
      </v-row>
    </v-app-bar>

<!-- CENTER CONTENT -->
    <v-content>
      <v-container grid-list-lg fill-height>
        <v-layout justify-left row wrap>
          <v-flex lg12>
            <v-fade-transition mode="out-in">
                <router-view></router-view>
            </v-fade-transition>
          </v-flex>
          <back-to-top bottom="35px" right="5px" visibleoffset="300">
            <v-btn class="mx-2" fab dark small color="deep-purple" title="Up">
                <v-icon dark>mdi-chevron-up-circle-outline</v-icon>
            </v-btn>
          </back-to-top>
        </v-layout>
      </v-container>
    </v-content>
<!-- </ CENTER CONTENT -->

  </v-app>
</template>

<script>

  import Player from '@/components/Player.vue'

  export default {
    components: {
      Player
    },
    data: () => ({
      search_qs: ''
    }),
    methods: {
      search() {
        const qs = this.search_qs
        if(qs != '') this.$router.push({ path: `/search/${qs}` })
      }
    },
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
<style> 

    body::-webkit-scrollbar, .v-navigation-drawer[data-booted=true]::-webkit-scrollbar {
      width: 10px;
      background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-track, .v-navigation-drawer[data-booted=true]::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      border-radius: 8px;
      background-color: #F5F5F5;
    }

    body::-webkit-scrollbar-thumb, .v-navigation-drawer[data-booted=true]::-webkit-scrollbar-thumb  {
      border-radius: 8px;
      -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #555;
    }

    .btn-to-top {
      width: 60px;
      height: 60px;
      padding: 10px 16px;
      border-radius: 50%;
      font-size: 22px;
      line-height: 22px;
    }
    
</style>
