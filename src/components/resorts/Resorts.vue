<template>
    <section>
        <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 500px; height: 300px">
            <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                :draggable="true"
                @click="onMarkerClick"/>
        </GmapMap>
        <ResortDetail />
    </section>
</template>

<script>
import api from '../../services/server-api';
import ResortDetail from './ResortDetail';

export default {
  data() {
    return {
      center: { lat:45, lng:-122 }, 
      markers: [
        // {
        //   position: { lat:45, lng:-122 }
        // }, 
        // {
        //   position: { lat: 46, lng: -123 }
        // }
      ] 
    };
  }, 
  created() {
    api.getMarkers()
      .then(markers => {
        console.log(markers);
        let markerList = [];
        markers.forEach(marker => {
          let temp = {};
          temp.position = { lat: marker.coordinate_lat, lng: marker.coordinate_lon };
          markerList.push(temp);
        });
        this.markers = markerList;
        console.log('markers', this.markers);
      });
  },

  methods: {
    onMarkerClick() {

    }
  },
  components: {
    ResortDetail
  }

};
</script>

<style>


</style>
