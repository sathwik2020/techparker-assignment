<template>
  <div id="large">
    <div class="group">
      <img :src="imageLink" alt="Large Image" width="430" height="360" />
      <div class="details">
        <p><strong>Title</strong> {{ template.title }}</p>
        <p><strong>Description</strong> {{ template.description }}</p>
        <p><strong>Cost</strong> ${{ template.cost }}</p>
        <p><strong>ID #</strong> {{ template.id }}</p>
        <p><strong>Thumbnail File</strong> {{ template.thumbnail }}</p>
        <p><strong>Large Image File</strong> {{ template.image }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { BASE_URL } from "../url-config";
export default {
  name: "ImageDetailView",
  props: ["template"],

  setup(props) {
    const imageLink = computed(() => {
      return BASE_URL + "/assets/images/large/" + props?.template?.image;
    });
    return { imageLink };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
