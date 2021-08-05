<template>
  <div id="container">
    <header>Filmstrip View</header>
    <div id="main" role="main">
      <!-- To display corresponding thumbnail's large image and its details -->
      <ImageDetailView :template="activeTemplate" />

      <!-- To display thumbnail list -->
      <ThumbnailList
        :templates="templates"
        @onActiveTemplateChangeEvent="setActiveTemplate($event)"
        :activeTemplate="activeTemplate"
      />
    </div>
    <footer>
      <a href="instructions.pdf">Download PDF Instructions</a>
    </footer>
  </div>
</template>

<script>
import { ref } from "vue";
import { axiosCreate } from "./services/ApiService";
import ImageDetailView from "./components/ImageDetailVIew.vue";
import ThumbnailList from "./components/ThumbnailList.vue";

export default {
  name: "App",
  setup() {
    const templates = ref([]);
    const activeTemplate = ref({});

    // calls the server API to get the template data
    axiosCreate.get("/").then((response) => {
      // setting templates and active template
      templates.value = response.data;
      activeTemplate.value = response.data[0];
    });

    // set or update active template
    function setActiveTemplate(template) {
      activeTemplate.value = template;
      console.log(template);
    }

    return { templates, activeTemplate, setActiveTemplate };
  },
  components: {
    ImageDetailView,
    ThumbnailList,
  },
};
</script>
