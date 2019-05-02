<template>
  <v-content>
    <v-layout row wrap>
      <v-toolbar class="blue darken-1 white--text headline">
        <v-toolbar-title>Course Records</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-flex>
        <v-data-table :headers="headers" :items="desserts" :expand="expand" item-key="name">
          <template v-slot:items="props">
            <tr>
              <td>{{ props.item.ID }}</td>
              <td>{{ props.item.namecourse}}</td>
              <td>{{ props.item.groupname}}</td>
              <td>{{ props.item.hour}}</td>
              <td>{{ props.item.hourdot}}</td>
            </tr>
          </template>
        </v-data-table>
        <v-btn color="success">
          <v-icon>add</v-icon>add
        </v-btn>
        <v-btn color="error">
          <v-icon>delete</v-icon>delete
        </v-btn>
        <v-btn color="warning">
          <v-icon>assignment</v-icon>edit
        </v-btn>
        <v-btn color="primary" dark>
          <v-icon>print</v-icon>print
        </v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      expand: false,
      headers: [
        {
          text: "รหัสหลักสูตร",
          sortable: false
        },
        {
          text: "ชื่อหลักสูตร",
          sortable: false
        },
        {
          text: "กลุ่มหลักสูตร",
          sortable: false
        },
        {
          text: "ชั่วโมง/(ที่เรียน)",
          sortable: false
        },
        {
          text: "คาบ/(ละ)",
          sortable: false
        }
      ],
      desserts: [
        {
          name: "Chisanupong Premsri",
          ID: 92874,
          namecourse: "switf",
          groupname: "cs",
          hour: 4.0,
          hourdot: 1,
        },
        {
          name: "Sirapop Saenhom",
          ID: 72840,
          namecourse: "c##",
          groupname: "cs",
          hour: 4.0,
          hourdot: 3,
        },
        {
          name: "Thanatorn Sungthong",
          ID: 32964,
          namecourse: "css",
          groupname: "cg",
          hour: 6.0,
          hourdot: 4,
        },
        {
          name: "Jiraphat Pongkasikit",
          ID: 30590,
          namecourse: "java",
          groupname: "cs",
          hour: 3.0,
          hourdot: 3,
        },
        {
          name: "Worapong Rattaaudomsawas",
          ID: 35678,
          namecourse: "laravel",
          groupname: "cs",
          hour: 5,
          hourdot: 1,
        }
      ]
    };
  }
};
</script>
<style>
</style>