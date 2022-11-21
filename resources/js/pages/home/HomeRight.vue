<template>
    <div class="card h-100 border-0">
        <div class="card-header">

            <h3 class="text-center">LegalSuite Backend ({{currentServer.description}} Server)</h3>

        </div>

        <div class="card-body overflow-auto pb-1 pt-3 px-3">

        </div>


    </div>

</template>

<script>

import { mapGetters } from 'vuex';

export default {

    computed: {
        ...mapGetters(['currentServer']),
    },

}

</script>