<template>
	<div>
		<div id="mapContainer" />
	</div>
</template>

<script>
import Popup from "./Popup.vue";
import Vue from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LMap } from "vue2-leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
	iconRetinaUrl: require("@/assets/room.svg"),
	iconUrl: require("@/assets/room.svg"),
	shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
	iconSize: [64, 64],
	iconAnchor: [32, 64],
	shadowAnchor: [20, 68],
	shadowSize: [64,64],
});

export default {
	name: "Map",
	data: function() {
		return {
			center: [0, 0, 0]
		};
	},
	mounted() {
		this.setupLeafletMap();
	},
	methods: {
		setupLeafletMap: function () {
			const mapDiv = L.map("mapContainer", {
				center: [49.386690408007276, 1.0692762670887048],
				zoom: 13
			});
			L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
				attribution:
					'Map data (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
				maxZoom: 18,
				id: "mapbox/streets-v11",
				accessToken: "QvTEHs3Bog8tHmEcJ9d29eLCLmIOXOwQvkTkroTm",
			}).addTo(mapDiv);

			const ComponentClass = Vue.extend(Popup);
			const instance = new ComponentClass();
			L.marker({lat: 49.386690408007276, lon: 1.0692762670887048 }).bindPopup(instance.$mount().$el).addTo(mapDiv);
		},
	}
};
</script>

<style scoped>
#mapContainer {
	width: 100%;
	height: 90vh;
}
</style>
