<template>
    <div>
      <h1>Create an event</h1>
      <form>

        <base-select
        :v-model="event.category"
        label="Select a category"
        :options="categories" />
  
        <h3>Name & describe your event</h3>

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
  
        <h3>Where is your event?</h3>

        <base-input 
          label="Location" 
          v-model="event.location"
          type="text"
        />
  
        <h3>Are pets allowed?</h3>
        <div>
          <input
              type="radio"
              v-model="event.pets"
              :value="1"
              name="pets"
            />
          <label>Yes</label>
        </div>
  
        <div>
          <input
            type="radio"
            v-model="event.pets"
            :value="0"
            name="pets"
          />
          <label>No</label>
        </div>
  
        <h3>Extras</h3>
        <div>
          <input
            type="checkbox"
            v-model="event.extras.catering"
            class="field"
          />
          <label>Catering</label>
        </div>
  
        <div>
          <input
            type="checkbox"
            v-model="event.extras.music"
            class="field"
          />
          <label>Live music</label>
        </div>
  
        <button class="button -fill-gradient" type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
import BaseInput from '../components/BaseInput.vue'
import BaseSelect from '../components/atoms/BaseSelect.vue'

  export default {
  components: { BaseInput, BaseSelect },
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
        }
      }
    }
  }
  </script>