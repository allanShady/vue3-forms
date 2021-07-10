<template>
    <label :for="uuid" v-if="label" >{{label}}</label>
        <input
            v-bind="$attrs"
            :placeholder="label"
            class="field"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :id="uuid"
            :aria-describedby="error && `${uuid}-error`"
            :aria-invalid="error && true"
        />
        <p 
            class="errorMessage" 
            v-if="error" 
            :id="`${uuid}-error`"
            aria-live="assertive"
        >
            {{ error }}
        </p>     
</template>

<script>
import UniqueID from '../services/UniqueID'

export default {
    props: {
        label: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        },
        error: {
            type: String,
            default: ''
        }
    },

    setup () {
        const uuid = UniqueID().getId()

        return { uuid }
    }
}
</script>