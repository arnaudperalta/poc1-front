<template>
	<div class="col-4 offset-4">
		<h2>Test du token</h2>
		<button type="button" class="btn btn-info mt-2" v-on:click="testToken">Test du token</button>
		<div v-if="successCard" class="alert alert-success mt-2">
			Le token est correct.
		</div>
		<div v-if="failCard" class="alert alert-danger mt-2">
			Le token est incorrect ou manquant.
		</div>
	</div>
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
		testToken() {
			this.successCard = false;
			this.failCard = false;
			var token = this.$cookies.get("AuthToken");
			console.log(token);
			this.axios
				.post("http://localhost:8081/api/token_test", {}, {
					headers: {
						"Authorization": `Bearer ${token}`
					}
				})
				.then(() => this.testSuccess())
				.catch(() => this.testFailed());
		},
		testSuccess() {
			this.successCard = true;
		},
		testFailed() {
			this.failCard = true;
		}
	}
}
</script>