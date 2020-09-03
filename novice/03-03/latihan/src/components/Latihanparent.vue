<template>
  <div>
    <h1>Computed</h1>
    <p>Hasil operasi adalah = {{ jumlah }}</p>
    <div>
      <h1>Method</h1>
      <p>
        Hasil operasi ini menggunakan method {{ bilangan }} +
        {{ bilangan2 }} adalah {{ total }}
      </p>
      <button @click="hasil">Proses</button>
    </div>
    <div>
      <h1>Watch</h1>
      <h4>Isi dong..</h4>
      <input type="text" v-model="isi" />{{ keterangan }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bilangan: 10,
      bilangan2: 15,
      total: null,
      isi: "",
      keterangan: "",
    };
  },
  computed: {
    jumlah: function() {
      return `${this.bilangan + (100 * 2) / 10}`;
    },
  },
  methods: {
    hasil: function() {
      return (this.total = this.bilangan + this.bilangan2);
    },
  },
  watch: {
    isi: function() {
      this.keterangan = "Typing...";
    },
  },
};
</script>
