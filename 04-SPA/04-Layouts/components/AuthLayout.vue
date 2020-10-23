<template>
  <div class="page page_onboarding page_meetup-forms">
    <h1>{{ title }}</h1>
    <div class="container"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.page.page_onboarding {
  max-width: 374px;
  width: 100%;
  margin: 0 auto;
}

.page.page_meetup-forms {
  padding: 70px 0;
}

@media all and (max-width: 992px) {
  .page.page_meetup-forms {
    padding: 48px 0;
  }

  .container {
    padding: 0 16px;
  }
}
</style>
