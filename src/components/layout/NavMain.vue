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
            <v-list-tile v-for="(child, i) in item.children" :key="i">
              <!--ใส่@คลิก-->
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else :key="item.text">
            <!--ใส่@คลิก-->
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

      <!-- <template v-slot:extension>
      <v-toolbar-title class="white--text">Title</v-toolbar-title>
      </template> -->

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn flat>
          <v-icon id="place">logout</v-icon>logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
          { icon: "description", text: "Student records" },
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
          { icon: "today", text: "Student Table" },
        ]
      },

      { icon: "assignment_ind", text: "Personal Information" },


      { icon: "settings", text: "Settings" },

      { icon: "help", text: "Help" },

      { icon: "logout", text: "logout" }
    ]
  }),
  props: {
    source: String
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
</style>