<template>
    <div class="container">
        {{name}}
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {sampleStore} from  '@/store'

export default Vue.extend({
    computed:{
        name(){
            return sampleStore.name
        }
    }
})
</script>