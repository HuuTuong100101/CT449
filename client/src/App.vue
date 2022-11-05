<template>
  <v-app id="inspire">
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