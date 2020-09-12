<template>
  <div>
    <v-container>
      <h1>Toys Lists</h1>
    </v-container>

    <!-- Modal add data -->
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistant max-width="600px">
          <template v-slot:activator="{on, attrs}">
            <v-btn color="success" dark v-bind="attrs" v-on="on">Add</v-btn>
          </template>
          <!-- Form add -->
          <v-card>
            <v-card-title>
              <span class="headline">Toys</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <!-- Add Name -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Name*" v-model="newName" required></v-text-field>
                  </v-col>
                  <!-- Add Description -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Description*" v-model="newDescription"></v-text-field>
                  </v-col>

                  <!-- Date Picker -->
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Release Date*" v-model="newReleaseDate" required></v-text-field>
                  </v-col>

                  <!-- Category -->
                  <v-col cols="12">
                    <v-text-field label="Category*" v-model="newCategory" required></v-text-field>
                  </v-col>
                  <v-container fluid>
                    <p>{{ radios || 'Dirumah udah ada?' }}</p>
                    <v-radio-group v-model="newInclude" :mandatory="false">
                      <v-radio label="Ada" :value="true"></v-radio>
                      <v-radio label="Belum" :value="false"></v-radio>
                    </v-radio-group>
                  </v-container>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-action>
              <v-spacer></v-spacer>
              <v-btn class="mx-2" small color="primary" @click="addToy()">Submit</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-action>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>

    <!-- List Data -->
    <v-container>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="toy in toys" :key="toy.id">
            <v-list-item-content>{{toy.name}}</v-list-item-content>
            <v-list-item-content>{{toy.description}}</v-list-item-content>

            <v-btn
              class="mx-2"
              small
              color="primary"
              :to="{ name: 'Detail', params: { id: toy.id } }"
            >Detail</v-btn>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="primary"
              @click="edit(toy.id)"
              :to="{name: 'Edit', params: {id: toy.id}}"
            >
              <v-icon>mdi-pencil-outline</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="warning" @click="deleteToy(toy.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,

      toys: [],
      newName: "",
      newDescription: "",
      newReleaseDate: new Date(),
      //   newReleaseDate: new Date().toISOString().substr(0, 10),
      newCategory: "",
      newInclude: false,

      editId: null,
      editToy: "",
    };
  },
  methods: {
    async listToy() {
      const response = await axios.get("http://192.168.1.44:8000/toys");
      this.toys = response.data;
    },

    async addToy() {
      const addToy = {
        name: this.newName,
        description: this.newDescription,
        release_date: this.newReleaseDate,
        toy_category: this.newCategory,
        was_included_in_home: this.newInclude,
      };
      await axios.post("http://192.168.1.44:8000/toys", addToy);
      this.toys.push({});
      this.newName = "";
      this.newDescription = "";
      //   this.newReleaseDate = new Date().toISOString().substr(0, 10);
      this.newReleaseDate = new Date();
      this.newCategory = "";
      this.newInclude = "";

      this.listToy();
    },
    async deleteToy(param) {
      await axios.delete(`http://192.168.1.44:8000/toys/${param}`);
      this.listToy();
    },
    // edit(toy) {
    //   this.editId = toy.id;
    //   this.editToy = toy.name;
    //   this.editToy = toy.description;
    //   this.editToy = toy.toy_category;
    //   this.editToy = toy.was_included_in_home;
    // },
    // async upadteItem(toy) {
    //   const updateItem = {
    //     name: this.editToy,
    //     description: this.description,
    //     toy_category: this.toy_category,
    //   };
    // },
  },
  mounted() {
    this.listToy();
  },
};
</script>

<style>
</style>