<template>
	<v-form>
		<h2>Authentification</h2>
		<label>Adresse email</label>
		<v-text-field 
			v-model="email" 
			type="email" />
		<label>Mot de passe</label>
		<v-text-field
			v-model="psw"
			type="password" />
		<v-btn
			color="primary"
			@click="sendAuthentification">
			S'authentifier
		</v-btn>
		<v-snackbar
			v-model="successSnack"
			color="success">
			Authentification réussie
			<template v-slot:action="{ attrs }">
				<v-btn
					color="white"
					text
					v-bind="attrs"
					@click="successSnack = false">
					Fermer
				</v-btn>
			</template> 
		</v-snackbar>
		<v-snackbar
			v-model="failSnack"
			color="error">
			Authentification échouée
			<template v-slot:action="{ attrs }">
				<v-btn
					color="white"
					text
					v-bind="attrs"
					@click="failSnack = false">
					Fermer
				</v-btn>
			</template>
		</v-snackbar>
	</v-form>
</template>

<script>
export default {
	name: "AuthForm",
	data() {
		return {
			email: "",
			psw: "",
			successSnack: false,
			failSnack: false
		}
	},
	methods: {
		sendAuthentification() {
			this.successSnack = false;
			this.failSnack = false;
			this.axios
				.post(`${this.$api_address}/api/authenticate`, {
						email: this.email,
						password: this.psw
					},
					{ timeout: 1000 }
				)
				.then((res) => this.authSuccess(res))
				.catch(() => this.authFailed());
		},
		authSuccess(res) {
			this.$cookies.set("AuthToken", res.data.token, "1h");
			this.successSnack = true;
		},
		authFailed() {
			this.$cookies.remove("AuthToken");
			this.failSnack = true;
		}
	}
}
</script>
