<template>
    <section>
      <!-- "drop-down" is the best id you could come up with?" -->
      <!-- it's not even a drop-down, it's the label for a drop-down -->
      <label id="drop-down">Select a Resort:</label>
      <select v-model="selectedRes">
          <option
            v-for="resort in allResorts"
            v-bind:key="resort.id"
            v-bind:value="resort.id">
            {{resort.resort_name}}
          </option>
      </select>
      <button @click="onSelect">Select Resort</button>
      <!-- <br />
      <br /> -->
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
                :draggable="false"
                @click="onMarkerClick(m.id)"/>
        </GmapMap>
      </div>
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
      selectedRes: 0
    };
  },

  props: {
    resorts: Array
  },

  created() {
    api.getMarkers()
      .then(markers => {
        // And here is another map...
        //
        // let markerList = [];
        // markers.forEach(marker => {
        //   let temp = {};
        //   temp.id = marker.id;
        //   temp.position = { lat: marker.coordinate_lat, lng: marker.coordinate_lon };
        //   markerList.push(temp);
        // });

        this.markers = markers.map(marker => {
          return {
            id: marker.id,
            position: { 
              lat: marker.coordinate_lat, 
              lng: marker.coordinate_lon 
            }
          }
        });

      });

    api.getResorts()
      .then(resorts => {
        this.allResorts = resorts;
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
        });
    },

    onSelect() {
      this.$router.push(`/resorts/${this.selectedRes}`);
    }
  }
};
</script>

<style>
#gmap {
  display: flex;
  justify-content: center;
}

#drop-down {
  color: white;
  font-weight: bold;
  font-size: 1.3em;
}
</style>