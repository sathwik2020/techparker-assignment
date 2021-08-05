<template>
  <div class="thumbnails">
    <div class="group">
      <div v-for="template in scrollTemplates" v-bind:key="template.id">
        <a
          v-bind:href="'#'"
          v-on:click="updateTemplate(template.id, $event)"
          v-bind:class="setActive(template.id)"
          v-bind:title="template.id"
        >
          <img
            v-bind:src="thumbnailURL + template.thumbnail"
            v-bind:alt="template.id + '-m'"
            width="145"
            height="121"
          />
          <span>{{ template.id }}</span>
        </a>
      </div>
      <a
        v-on:click="movePrev()"
        v-bind:class="disablePrev"
        class="previous"
        title="Previous"
        >Previous</a
      >
      <a
        v-on:click="moveNext()"
        v-bind:class="disableNext"
        class="next"
        title="Next"
        >Next</a
      >
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { BASE_URL } from "../url-config";
export default {
  name: "ThumbnailList",
  props: ["templates", "activeTemplate"],
  emit: "onActiveTemplateChangeEvent",
  setup(props, { emit }) {
    const thumbnailURL = BASE_URL + "/assets/images/thumbnails/";
    const currentScroll = ref(0);

    // when thumbnail is clicked, change the active template
    function updateTemplate(id, e) {
      e.preventDefault();
      let template = props.templates.filter((templateItem) => {
        return templateItem.id == id;
      });

      emit("onActiveTemplateChangeEvent", template[0]);
    }

    // Highlight the active thumbnail
    function setActive(id) {
      if (props.activeTemplate.id == id) {
        return "active";
      }
    }

    // move forward the visible thumbnails by 4 positions
    function moveNext() {
      if (canMoveNext()) {
        currentScroll.value += 4;
      }
    }

    // move backward the visible thumbnails by 4 positions
    function movePrev() {
      if (canMovePrev()) {
        currentScroll.value -= 4;
      }
    }

    // check if template exists after 4 positions
    function canMoveNext() {
      if (props.templates[currentScroll.value + 4] === undefined) {
        return false;
      }
      return true;
    }

    // check if template exists before 4 positions
    function canMovePrev() {
      if (props.templates[currentScroll.value - 4] === undefined) {
        return false;
      }
      return true;
    }

    // disable prev button
    const disablePrev = computed(() => {
      if (canMovePrev() === false) {
        return "disabled";
      }
      return "";
    });

    // disable next button
    const disableNext = computed(() => {
      if (canMoveNext() === false) {
        return "disabled";
      }
      return "";
    });

    // return visible thumbnails
    const scrollTemplates = computed(() => {
      return props.templates.slice(
        Number(currentScroll.value),
        currentScroll.value + 4
      );
    });

    return {
      currentScroll,
      setActive,
      updateTemplate,
      disablePrev,
      disableNext,
      scrollTemplates,
      moveNext,
      movePrev,
      canMovePrev,
      thumbnailURL,
    };
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
