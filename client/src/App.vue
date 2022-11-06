<template>
  <v-app id="inspire" class="myFont">
    <Frame />
  </v-app>
</template>

<script>
  import Frame from "./components/Frame.vue";
  export default {
    name: "App",
    components: { Frame },
    data: () => ({
      cards: ["Today", "Yesterday"],
      drawer: null,
    }),
    methods: {},
  };
</script>

<style>
  .myFont {
    font-family: 'Sans serif'; 
  }
</style>