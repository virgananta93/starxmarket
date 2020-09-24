<!-- FOR TABS CONTET -->
<template>
  <div>
    <b-container fluid class="starxheader">
      <b-container>
        <b-nav class="nav-justified">
          <b-nav-item
            v-for="tab in tabs"
            :key="tab"
            :class="{ active: tab === selected }"
            @click="setTab(tab)"
          >
            {{ tab }}
          </b-nav-item>
          <!-- SEARCH FORM -->
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="xs" class="my-2 my-sm-0" pill type="submit"
              >Search</b-button
            >
          </b-nav-form>
          <!-- END SEARCH -->
        </b-nav>
      </b-container>
    </b-container>

    <b-container>
      <slot></slot>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "TabNav",
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
  },
  methods: {
    setTab(tab) {
      this.$emit("selected", tab);
    },
  },
};
</script>

<style lang="scss" scoped>
.starxheader {
  background-color: rgb(13, 13, 49);
  padding: 10px 0;
}
</style>


