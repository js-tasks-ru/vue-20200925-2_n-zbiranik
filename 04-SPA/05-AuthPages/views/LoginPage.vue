<template>
  <form class="form" v-on:submit.prevent="login">
    <div>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" />
      <div v-show="emailHasErrors" class="error">Требуется ввести Email</div>
    </div>
    <div>
      <label for="password">Пароль</label>
      <input id="password" v-model="password" type="password" />
      <div v-show="passwordHasErrors" class="error">Требуется ввести пароль</div>
    </div>
    <div>
      <input type="submit" value="Войти" />
    </div>
    <div><span>Нет аккаунта?</span>&nbsp;<router-link to="/register">Зарегистрируйтесь</router-link>
    </div>
  </form>
</template>

<script>
import { login } from '../data';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: null,
      password: null,
      hasErrors: {
        email: false,
        password: false,
      },
      errors: {
        email: 'Требуется ввести Email',
        password: 'Требуется ввести пароль',
      },
    };
  },
  computed: {
    emailHasErrors() {
      return this.hasErrors.email;
    },
    passwordHasErrors() {
      return this.hasErrors.password;
    },
  },
  methods: {
    validateForm() {
      this.hasErrors.email = this.email ? false : true;
      this.hasErrors.password = this.password ? false : true;
      for (let key in this.hasErrors) {
        if (this.hasErrors[key] === true) {
          alert(this.errors[key]);
          return false;
        }
      }
      return true;
    },
    async login() {
      if (this.validateForm()) {
        let data = await login(this.email, this.password);
        alert(data.fullname ? data.fullname : data.message ? data.message : null);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
