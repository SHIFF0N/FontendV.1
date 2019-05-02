<template>
  <v-content>
    <v-layout row wrap>
      <v-toolbar class="blue darken-1 white--text headline">
        <v-toolbar-title>Student Records</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-flex>
        <v-data-table
          total-items="50"
          :headers="headers"
          :items="desserts"
          :expand="expand"
          item-key="name"
        >
          <template v-slot:items="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">{{ props.item.Total }}</td>
              <td class="text-xs-right">{{ props.item.ComputerArchitecture}}</td>
              <td class="text-xs-right">{{ props.item.OperatingSystem}}</td>
              <td class="text-xs-right">{{ props.item.Componentbased}}</td>
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
          text: "Name",
          sortable: false
        },
        {
          text: "Total",
          sortable: false
        },
        {
          text: "Computer Architecture",
          sortable: false
        },
        {
          text: "Operating System",
          sortable: false
        },
        {
          text: "Component-based",
          sortable: false
        }
        // { text: 'Calories', value: 'calories' },
        // { text: 'Fat (g)', value: 'fat' },
        // { text: 'Carbs (g)', value: 'carbs' },
        // { text: 'Protein (g)', value: 'protein' },
        // { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        },
        {
          name: "Worapong Rattaaudomsawas",
          Total: 356,
          ComputerArchitecture: 16.0,
          OperatingSystem: 49,
          Componentbased: 3.9
        }
      ]
    };
  }
};
</script>
<style>
</style>