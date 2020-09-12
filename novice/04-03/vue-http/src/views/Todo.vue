<template>
  <div>
    <v-container>
      <h1>Todo list</h1>
      <h4>Input Task</h4>

      <!-- input -->
      <v-text-field label="todo" v-model="newTask" @keyup.enter="addTodo"></v-text-field>
      <v-btn fab dark small color="success" @click="addTodo()">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </v-container>

    <!-- list item -->
    <v-container>
      <v-card class="mx-auto">
        <v-list>
          <h4>Task List</h4>
          <v-list-item-group>
            <v-list-item v-for="todo in todos" :key="todo.id">
              <v-list-item-icon>
                <v-icon>mdi-calendar-check</v-icon>
              </v-list-item-icon>

              <v-list-item-content>{{ todo.name }}</v-list-item-content>

              <v-text-field
                label="todo"
                v-model="editTask"
                v-if="editId === todo.id"
                @keyup.enter="updateTodo(todo)"
              ></v-text-field>

              <span v-if="!editId">
                <v-btn class="mx-2" fab dark small color="primary" @click="edit(todo)">
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="warning" @click="deleteTodo(todo.id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </span>

              <span v-if="editId === todo.id">
                <v-btn class="mx-2" fab dark small color="primary" @click="updateTodo(todo)">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="error" @click="cancel()">
                  <v-icon>mdi-cancel</v-icon>
                </v-btn>
              </span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      todos: [],
      newTask: "",
      editTask: "",
      editId: null,
    };
  },
  methods: {
    async list() {
      const response = await axios.get("http://localhost:3000/list");
      this.todos = response.data;
    },

    async addTodo() {
      const additem = {
        // title: this.newTask,
        name: this.newTask,
      };
      // await axios.post("http://192.168.1.44:3000/task/add", additem);
      await axios.post("http://localhost:3000/list", additem);
      this.todos.push({});
      this.newTask = "";
      this.list();
    },
    async deleteTodo(param) {
      // await axios.delete(`http://192.168.1.44:3000/task/delete/${param}`);
      await axios.delete(`http://localhost:3000/list/${param}`);
      this.list();
    },
    edit(todo) {
      this.editId = todo.id;
      // this.editTask = todo.title;
      this.editTask = todo.name;
    },
    async updateTodo(todo) {
      const updateItem = {
        name: this.editTask,
        // title: this.editTask,
      };
      await axios.put(
        // `http://192.168.1.44:3000/task/edit/${todo.id}`,
        `http://localhost:3000/list/${todo.id}`,
        updateItem
      );
      this.list();
      this.cancel();
    },
    cancel() {
      this.editId = "";
      this.editTask = "";
    },
  },
  mounted() {
    this.list();
  },
};
</script>

<style></style>
