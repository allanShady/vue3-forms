<template>
    <div>
      <h1>Create an event</h1>
      <form @submit.prevent="sendForm">

        <base-select
        :v-model="event.category"
        label="Select a category"
        :options="categories" />

        <fieldset>
          <legend>Name & describe your event</legend>

          <base-input 
            label="Title" 
            v-model="event.title"
            type="text"
          />

          <base-input 
            label="Description" 
            v-model="event.description"
            type="text"
          />
        </fieldset>
  
        <fieldset>
          <legend>Where is your event?</legend>

          <base-input 
            label="Location" 
            v-model="event.location"
            type="text"
          />
        </fieldset>

        <fieldset>
          <legend>Pets</legend>
          <p>Are pets allowed?</p>
          <div>
            <base-radio-group
              :options="petOptions"
              name="pets"
              v-model="event.pets"
            />
          </div>
        </fieldset>
    
        <h3>Extras</h3>
        <div>
          <base-checkbox
            label="Catering"
            v-model="event.extras.catering"
          />
        </div>
  
        <div>
          <base-checkbox 
            v-model="event.extras.music"
            label="Live music"
          />
        </div>
        <button class="button -fill-gradient" type="submit">Submit</button>
      </form>
    </div>
</template>
  
<script>
import BaseInput from '../components/BaseInput.vue'
import BaseSelect from '../components/atoms/BaseSelect.vue'
import BaseCheckbox from '../components/atoms/BaseCheckbox.vue'
import BaseRadio from '../components/atoms/BaseRadio.vue'
import BaseRadioGroup from '../components/molecules/BaseRadioGroup.vue'
import axios from 'axios'

  export default {
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadio, BaseRadioGroup },
    data () {
      return {
        categories: [
          'sustainability',
          'nature',
          'animal welfare',
          'housing',
          'education',
          'food',
          'community'
        ],
        event: {
          category: '',
          title: '',
          description: '',
          location: '',
          pets: 1,
          extras: {
            catering: false,
            music: false
          }
        },

        petOptions: [{ label: 'Yes', value: 1 }, { label: 'No', value: 0 }]
      }
    },

    methods: {
      sendForm() {
        axios.post('https://my-json-server.typicode.com/allanShady/events-db/events', this.event)
        .then(response => console.log(`The response is:`, response))
        .catch(err => console.log(`Something happened:`, err))
      }
    }
  }
  </script>

  <style scoped>
    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
    }

    legend {
      font-size: 28px;
      font-weight: 700;
      margin-top: 20px;
    }
  </style>