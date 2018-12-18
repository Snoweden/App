<template>
    <section>
        <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px">
            <GmapMarker
                :key="m.id"
                v-for="m in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="onMarkerClick(m.id)"/>
        </GmapMap>
        <!-- <ResortDetail /> -->
    </section>
</template>

<script>
import api from '../../services/server-api';
// import ResortDetail from './ResortDetail';

export default {
  data() {
    return {
      center: { lat:45, lng:-122 }, 
      markers: []
    };
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
  },

  methods: {
    onMarkerClick(id) {
      this.$router.push(`/resorts/${id}`);
    }
  },
  components: {
    // ResortDetail
  }

};
</script>

<style>

</style>