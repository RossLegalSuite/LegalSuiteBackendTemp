<template>

    <div v-if="$root.developerLeftTableLoaded">
        <developer-form 
            v-show="activePage === 'Form'" 
            id="developers-right-developer-form" 
            uniqueId="developers-right-developer-form" 
            ref="developer-form"
            leftPageTableRef="developers-table"
            :modal="false"
        />
    </div>

</template>

<script>

export default {

    components: {
        DeveloperForm: () => import("./DeveloperForm"),

    },

    data() {
        return {
            activePage: null,
        }
    },

}

</script>
