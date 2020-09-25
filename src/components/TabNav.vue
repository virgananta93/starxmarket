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
            class="nav-market"
            @click="setTab(tab)"
          >
            {{ tab }}
          </b-nav-item>
          <!-- SEARCH FORM -->
          <b-nav-form>
            <b-input-group size="sm">
              <b-input-group-prepend is-text
                ><span class="fa fa-search"></span
              ></b-input-group-prepend>
              <b-form-input
                v-model="filter"
                type="search"
                id="filterInput"
                placeholder="Type to Search"
              ></b-form-input>
            </b-input-group>
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
@import "./src/assets/css/style.scss";

.starxheader {
  background-color: rgb(13, 13, 49);
  padding: 10px 0;
}
.nav-market > a {
  font-size: 1.2em;
  color: $primary-starx-color;
}
.nav-market.active {
  a {
    color: #fff;
    font-weight: bold;
  }
}
.searchnav {
  border-radius: 50px;
}
</style>


