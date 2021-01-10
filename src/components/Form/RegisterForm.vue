<template>
	<v-form>
		<h2>Inscription</h2>
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
			@click="sendRegistration">
			S'inscrire
		</v-btn>
		<v-snackbar
			v-model="successSnack"
			color="success">
			Inscription réussie
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
			Inscription échouée
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
	name: "RegisterForm",
	data() {
		return {
			email: "",
			psw: "",
			successSnack: false,
			failSnack: false
		}
	},
	methods: {
		sendRegistration() {
			this.successCard = false;
			this.failCard = false;
			this.axios
				.post(`${this.$api_address}/api/register`, {
						email: this.email,
						password: this.psw
					},
					{ timeout: 1000 }
				)
				.then(() => this.registerSuccess())
				.catch((err) => this.registerFailed(err));
		},
		registerSuccess() {
			this.successSnack = true;
		},
		registerFailed(err) {
			console.error(err);
			this.failSnack = true;
		}
	}
}
</script>
