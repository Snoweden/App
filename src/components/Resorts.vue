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
    </section>
</template>

<script>
import api from '../services/server-api';
export default {
  data() {
    return {
      center: { lat:45, lng:-122 }, 
      markers: [
        {
          position:  { lat:45, lng:-122 }
        }, 
        {
          position: { lat: 46, lng: -123 }
        }
      ] 
    };
  }, 
  created() {
    api.getMarkers()
      .then(resort => {
        console.log('this is the created method', resort);
      });
  },

  methods: {
    onMarkerClick() {
      console.log('marker has been clicked');

    }
  }

};
</script>

<style>


</style>
