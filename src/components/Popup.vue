<template>
	<v-row>
		<v-col 
			md="4">
			<v-img
				src="@/assets/art.jpg"
				max-height="30vh"
				max-width="30vh"
				contain
				eager />
		</v-col>
		<v-col 
			md="8">
			<h1>Un Street Art</h1>
			<h2 class="font-weight-medium">
				Par un artiste
			</h2>
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: "Popup"
};
</script>
