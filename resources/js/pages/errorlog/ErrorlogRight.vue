<template>

    <div v-if="$root.errorlogLeftTableLoaded">
        <errorlog-form 
            v-show="activePage === 'Form'" 
            id="errorlog-right-errorlog-form" 
            uniqueId="errorlog-right-errorlog-form" 
            ref="errorlog-form"
            leftPageTableRef="errorlog-table"
            :modal="false"
        />
    </div>

</template>

<script>

export default {

    components: {
        ErrorlogForm: () => import("./ErrorlogForm"),

    },

    data() {
        return {
            activePage: null,
        }
    },

}

</script>
