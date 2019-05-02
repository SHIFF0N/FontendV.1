<template>
  <div>
    <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer">
      <v-list dense>
        <template v-for="item in items">
          <v-layout row v-if="item.heading" align-center :key="item.heading">
            <v-flex xs6>
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-flex>
            <v-flex xs6 class="text-xs-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-flex>
          </v-layout>
          <v-list-group
            v-else-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              v-for="(child, i) in item.children"
              :key="i"
              @click="$router.push(child.url)"
            >
              <!-- เพิ่ม @click="$router.push(child.url)" เพื่อให้เวลากดไปหน้าอื่น
              -->
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text" @click="$router.push(item.url)">
            <!-- เพิ่ม @click="$router.push(item.url)" เพื่อให้เวลากดไปหน้าอื่น-->
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar class="bg-img" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-spacer></v-spacer>

      <v-btn color="primary" dark @click="dialog = true">
        <v-icon></v-icon>LOGIN
      </v-btn>
    </v-toolbar>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title class="or-img white--text headline">
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4></v-flex>
              <v-flex xs12>
                <v-text-field label="Username*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Login</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "bookmarks",
        text: "Register",
        model: false,
        children: [
          {
            icon: "description",
            text: "Student records",
            url: "/ViewRegister"
          },
          { icon: "chrome_reader_mode", text: "Financial records of students" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "class",
        text: "Course",
        model: false,
        children: [
          { icon: "markunread_mailbox", text: "Course record" },
          { icon: "perm_media", text: "Record the course of teaching students" }
        ]
      },
      {
        icon: "keyboard_arrow_up",
        "icon-alt": "calendar_today",
        text: "Calendar/Tutorial",
        model: false,
        children: [
          { icon: "perm_contact_calendar", text: "Teacher Table" },
          { icon: "today", text: "Student Table" }
        ]
      },

      {
        icon: "assignment_ind",
        text: "Personal Information",
        url: "/ViewProfile"
      },

      { icon: "settings", text: "Settings" },

      { icon: "help", text: "Help" },

      { icon: "logout", text: "logout" }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    on() {
      this.dialog = true;
    }
  }
};
</script>

<style>
.hg70 {
  height: 120px !important;
}
.bg-img {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material.jpg");
  background-size: cover;
}
.or-img {
  background-image: url("https://cdn.vuetifyjs.com/images/parallax/material2.jpg");
  background-size: cover;
}
.gr-img {
  background-image: url("https://cdn.dribbble.com/users/588874/screenshots/2341875/dribbble.png");
  background-size: cover;
}
</style>