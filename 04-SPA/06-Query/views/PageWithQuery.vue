<template>
  <div class="container">
    <meetups-view :view="query.view" :date="query.date" :participation="query.participation" :search="query.search"
                  @update:view="updateQuery($event, 'view')"
                  @update:date="updateQuery($event, 'date')"
                  @update:participation="updateQuery($event, 'participation')"
                  @update:search="updateQuery($event, 'search')" />
  </div>
</template>

<script>
import MeetupsView from '../components/MeetupsView';

const DEFAULT_VIEW = 'list';
const DEFAULT_DATE = 'all';
const DEFAULT_PARTICIPATION = 'all';
const DEFAULT_SEARCH = '';

export default {
  name: 'PageWithQuery',
  components: { MeetupsView },
  data() {
    return {
      query: {
        view: this.$route.query.view || DEFAULT_VIEW,
        date: this.$route.query.date || DEFAULT_DATE,
        participation: this.$route.query.participation || DEFAULT_PARTICIPATION,
        search: this.$route.query.search || DEFAULT_SEARCH,
      },
    };
  },
  watch: {
    $route(to) {
      this.query = to.query;
    },
    query: function () {
      let queryForRoute = Object.assign({}, this.query);
      if (this.query.view === DEFAULT_VIEW) {
        delete queryForRoute.view;
      }
      if (this.query.date === DEFAULT_DATE) {
        delete queryForRoute.date;
      }
      if (this.query.participation === DEFAULT_PARTICIPATION) {
        delete queryForRoute.participation;
      }
      if (this.query.search === DEFAULT_SEARCH) {
        delete queryForRoute.search;
      }
      this.$router.push({ path: this.$route.path, query: queryForRoute }).catch(()=>{});
    },
  },
  mounted() {
    this.query = Object.assign({}, this.query, this.$route.query);
  },
  methods: {
    updateQuery(event, prop) {
      this.query = Object.assign({}, this.query, { [prop]: event });
    },
  },
};
</script>

<style scoped></style>
