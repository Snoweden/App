<template>
    <section>
      <div id="gmap">
        <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 1000px; height: 600px">
            <GmapMarker
                :key="m.id"
                v-for="m in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="onMarkerClick(m.id)" />
        </GmapMap>
      </div>
        <select v-model="resort">
          <option
            v-for="resort in allResorts"
            v-bind:key="resort.id"
            v-bind:value="resort.id">
            {{resort.resort_name}}
          </option>
        </select>
        <!-- <button @click="getResorts">asd</button> -->
    </section>
</template>

<script>
import api from '../../services/server-api';

export default {
  data() {
    return {
      center: { lat:45, lng:-122 }, 
      markers: [],
      allResorts: [],
      selected: ''
    };
  },

  props: {
    resorts: Array
  },

  created() {
    api.getMarkers()
      .then(markers => {
        let markerList = [];
        markers.forEach(marker => {
          let temp = {};
          temp.id = marker.id;
          temp.position = { lat: marker.coordinate_lat, lng: marker.coordinate_lon };
          markerList.push(temp);
        });
        this.markers = markerList;
      });
    api.getResorts()
      .then(resorts => {
        this.allResorts = resorts;
        console.log(this.allResorts);
      });
  },

  methods: {
    onMarkerClick(id) {
      this.$router.push(`/resorts/${id}`);
    },

    getResorts() {
      api.getResorts()
        .then(resorts => {
          this.allResorts = resorts;
          console.log(this.allResorts);
        });
    }
  }
};
</script>

<style>
#gmap {
  display: flex;
  justify-content: center;
}
</style>