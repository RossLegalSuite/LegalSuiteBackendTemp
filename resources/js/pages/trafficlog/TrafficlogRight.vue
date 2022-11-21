<template>

    <div v-if="$root.trafficlogLeftTableLoaded">
        <trafficlog-form 
            v-show="activePage === 'Form'" 
            id="trafficlog-right-trafficlog-form" 
            uniqueId="trafficlog-right-trafficlog-form" 
            ref="trafficlog-form"
            leftPageTableRef="trafficlog-table"
            :modal="false"
        />
    </div>

</template>

<script>

export default {

    components: {
        TrafficlogForm: () => import("./TrafficlogForm"),

    },

    data() {
        return {
            activePage: null,
        }
    },

}

</script>
