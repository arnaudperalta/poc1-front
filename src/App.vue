<template>
	<div id="app" class="container">
		<RegisterForm />
		<AuthForm />
		<TestAuth />
	</div>
</template>

<script>
import RegisterForm from "./components/Form/RegisterForm.vue";
import AuthForm from "./components/Form/AuthForm.vue";
import TestAuth from "./components/TestAuth.vue";

export default {
	name: "App",
	components: {
		RegisterForm,
		AuthForm,
		TestAuth
	},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
