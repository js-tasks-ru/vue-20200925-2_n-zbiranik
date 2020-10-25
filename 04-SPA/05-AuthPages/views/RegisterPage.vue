<template>
  <form class="form" v-on:submit.prevent="register">
    <div>
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" />
      <div v-show="emailHasErrors" class="error">Требуется ввести Email</div>
    </div>
    <div>
      <label for="name">Имя</label>
      <input id="name" v-model="name" type="text" />
      <div v-show="nameHasErrors" class="error">Требуется ввести полное имя</div>
    </div>
    <div>
      <label for="password">Пароль</label>
      <input id="password" v-model="password" type="password" />
      <div v-show="passwordHasErrors" class="error">Требуется ввести пароль</div>
    </div>
    <div>
      <label for="passwordRepeat">Повтор пароля</label>
      <input id="passwordRepeat" v-model="passwordRepeat" type="password" />
      <div v-show="passwordRepeatHasErrors" class="error">Пароли не совпадают</div>
    </div>
    <div>
      <label for="accept">Я согласен с условиями</label>
      <input id="accept" v-model="accept" type="checkbox" />
      <div v-show="acceptHasErrors" class="error">Требуется согласиться с условиями</div>
    </div>
    <div>
      <input type="submit" value="Зарегистрироваться" />
    </div>
    <div><span>Есть аккаунт?</span>&nbsp;<router-link to="/login">Войдите</router-link>
    </div>
  </form>
</template>

<script>
import { register } from '../data';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: null,
      name: null,
      password: null,
      passwordRepeat: null,
      accept: false,
      hasErrors: {
        email: false,
        name: false,
        password: false,
        passwordRepeat: false,
        accept: false,
      },
      errors: {
        email: 'Требуется ввести Email',
        name: 'Требуется ввести полное имя',
        password: 'Требуется ввести пароль',
        passwordRepeat: 'Пароли не совпадают',
        accept: 'Требуется согласиться с условиями',
      },
    };
  },
  computed: {
    emailHasErrors() {
      return this.hasErrors.email;
    },
    nameHasErrors() {
      return this.hasErrors.name;
    },
    passwordHasErrors() {
      return this.hasErrors.password;
    },
    passwordRepeatHasErrors() {
      return this.hasErrors.passwordRepeat;
    },
    acceptHasErrors() {
      return this.hasErrors.accept;
    },
  },
  methods: {
    validateForm() {
      this.hasErrors.email = this.email ? false : true;
      this.hasErrors.name = this.name ? false : true;
      this.hasErrors.password = this.password ? false : true;
      this.hasErrors.passwordRepeat = (this.passwordRepeat ? false : true) || (this.password !== this.passwordRepeat);
      this.hasErrors.accept = this.accept ? false : true;
      for (let key in this.hasErrors) {
        if (this.hasErrors[key] === true) {
          alert(this.errors[key]);
          return false;
        }
      }
      return true;
    },
    async register() {
      if (this.validateForm()) {
        let data = await register(this.email, this.name, this.password);
        alert(data.id ? data.id : data.message ? data.message : null);
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
