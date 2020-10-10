<template>
  <div class="form-group">
    <label v-if="label" class="form-label">{{label}}</label>
    <slot></slot>
    <!-- <input /> -->
  </div>
</template>

<script>
  export default {
  name: 'FormGroup',
  props: {
    inline: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false
    }
  },
  computed: {
    classes() {
      return {
        'form-group': true,
        'form-group_inline': this.inline
      };
    },
  },
};
</script>

<style scoped>
.form-group {
  position: relative;
  margin-bottom: 24px;
}

.form-group.form-group_inline {
  display: inline-block;
  margin-bottom: 0;
}

.form-group.form-group_inline + .form-group.form-group_inline {
  margin-left: 16px;
}

.form-label {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: var(--body-color);
  margin-bottom: 10px;
  display: block;
}
</style>
