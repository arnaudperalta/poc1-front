<template>
	<div>
		<h2>Test du token</h2>
		<v-btn
			color="warning"
			class="mt-5"
			@click="testToken">
			Test du token
		</v-btn>
		<v-snackbar
			v-model="successSnack"
			color="success">
			Le token est correct.
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
			Le token est incorrect ou manquant.
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
	</div>
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
		};
	},
	methods: {
		testToken() {
			this.successSnack = false;
			this.failSnack = false;
			var token = this.$cookies.get("AuthToken");
			this.axios
				.post(`${this.$api_address}/api/token_test`, {}, {
					headers: {
						"Authorization": `Bearer ${token}`
					},
					timeout: 1000,
				})
				.then(() => this.testSuccess())
				.catch(() => this.testFailed());
		},
		testSuccess() {
			this.successSnack = true;
		},
		testFailed() {
			this.failSnack = true;
		}
	}
};
</script>
