<template>
    <section>
      <div v-for="event in events"class="card cardStyles">
        <div class="card-header cardHeaderStyles">
        {{event.type}} {{event.date}}
        </div>
        <div class="card-body">
        <h5 class="card-title titleStyles">{{event.location}}</h5>
        <p class="card-text">{{event.description}}</p>
        <p class="card-text"><strong>Address:</strong> {{event.address}}</p>
        <p class="card-text"><strong>Time:</strong> {{event.time}}</p>
        <a :href="event.map" class="btn btn-primary directions-btn">Directions</a>
        <p class="prepared">Prepared and Paid for by the Dan Starry Committee to Elect for Sheriff
PO Box 481, Stillwater MN 55082</p>
        </div>
      </div>
    </section>
</template>

<script>
import ActionCall from "../parts/ActionCall.vue";
import eventData from "../../assets/data/events-data.js";

export default {
  name: "events",
  components: {
    ActionCall
  },
  data() {
    return {
      test1: "Hi there",
      events: eventData.events
    };
  }
};
</script>

<style scoped>
$navy: #0f263f;
$blue: #0000e6;
$type: #2c3e50;
$red: #c00900;
$white: #fffafa;
$gray: #f3f2f2;

section {
  background-color: $gray;
  margin: 1em;
}

.cardStyles {
  max-width: 90%;
  margin: 2em auto;
  padding: 1em;
}

.cardHeaderStyles {
  font-weight: bold;
  color: $white;
  background-color: $navy;
}

.directions-btn {
  margin: 1em 0;
  background-color: $red;
  border: none;
  font-weight: bold;
}

.titleStyles {
  margin-top: 1em;
}

.prepared {
  font-size: 12px;
}

.lead {
  color: $navy;
}
</style>
