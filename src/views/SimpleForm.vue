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
          <base-radio
            v-model="event.pets"
            :value="1"
            label="Yes"
            name="pets"
          />
        </div>
  
        <div>
          <base-radio
            v-model="event.pets"
            :value="0"
            label="No"
            name="pets"
          />
        </div>
  
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


  export default {
  components: { BaseInput, BaseSelect, BaseCheckbox, BaseRadio },
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