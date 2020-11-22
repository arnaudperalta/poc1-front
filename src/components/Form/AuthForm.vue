<template>
	<form>
		<div class="form-group col-4 offset-4">
			<h2>Authentification</h2>
			<label>Adresse email</label>
			<input type="email" class="form-control" v-model="email">
			<label>Mot de passe</label>
			<input type="password" class="form-control" v-model="psw">
			<button type="button" class="btn btn-primary mt-2" v-on:click="sendAuthentification">S'authentifier</button>
			<div v-if="successCard" class="alert alert-success mt-2">
				Authentification réussie.
			</div>
			<div v-if="failCard" class="alert alert-danger mt-2">
				Authentification échouée.
			</div>
		</div>
	</form>
</template>

<script>
export default {
	name: "AuthForm",
	data() {
		return {
			email: "",
			psw: "",
			successCard: false,
			failCard: false
		}
	},
	methods: {
		sendAuthentification() {
			this.successCard = false;
			this.failCard = false;
			this.axios
				.post("http://localhost:8081/api/authenticate", {
					email: this.email,
					password: this.psw
				})
				.then((res) => this.authSuccess(res))
				.catch(() => this.authFailed());
		},
		authSuccess(res) {
			this.$cookies.set("AuthToken", res.data.token, "1h");
			this.successCard = true;
		},
		authFailed() {
			this.failCard = true;
		}
	}
}
</script>