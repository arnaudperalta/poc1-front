<template>
	<form>
		<div class="form-group col-4 offset-4">
			<h2>Inscription</h2>
			<label>Adresse email</label>
			<input type="email" class="form-control" v-model="email">
			<label>Mot de passe</label>
			<input type="password" class="form-control" v-model="psw">
			<button type="button" class="btn btn-primary mt-2" v-on:click="sendRegistration">S'inscrire</button>
			<div v-if="successCard" class="alert alert-success mt-2">
				Inscription réussie.
			</div>
			<div v-if="failCard" class="alert alert-danger mt-2">
				Inscription échouée.
			</div>
		</div>
	</form>
</template>

<script>
export default {
	name: "RegisterForm",
	data() {
		return {
			email: "",
			psw: "",
			successCard: false,
			failCard: false
		}
	},
	methods: {
		sendRegistration() {
			this.successCard = false;
			this.failCard = false;
			this.axios
				.post("http://localhost:8081/api/register", {
					email: this.email,
					password: this.psw
				})
				.then(() => this.registerSuccess())
				.catch(() => this.registerFailed());
		},
		registerSuccess() {
			this.successCard = true;
		},
		registerFailed() {
			this.failCard = true;
		}
	}
}
</script>