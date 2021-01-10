<template>
	<v-app>
		<v-container fluid>
			<h1>PoC Open Street Arts</h1>
			<v-row>
				<v-col md="10">
					<Map />
				</v-col>
				<v-col md="2">
					<RegisterForm />
					<br>
					<AuthForm />
					<br>
					<TestAuth />
				</v-col>
			</v-row>
		</v-container>
	</v-app>
</template>

<script>
import Map from "./components/Map.vue";
import RegisterForm from "./components/Form/RegisterForm.vue";
import AuthForm from "./components/Form/AuthForm.vue";
import TestAuth from "./components/TestAuth.vue";

export default {
	name: "App",
	components: {
		Map,
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
}
</style>
