<template>

    <div v-if="$root.applicationErrorlogLeftTableLoaded">
        <application-errorlog-form 
            v-show="activePage === 'Form'" 
            id="application-errorlog-right-errorlog-form" 
            uniqueId="application-errorlog-right-errorlog-form" 
            ref="application-errorlog-form"
            leftPageTableRef="application-errorlog-table"
            :modal="false"
        />
    </div>

</template>

<script>

export default {

    components: {
        ApplicationErrorlogForm: () => import("./ApplicationErrorlogForm"),

    },

    data() {
        return {
            activePage: null,
        }
    },

}

</script>
