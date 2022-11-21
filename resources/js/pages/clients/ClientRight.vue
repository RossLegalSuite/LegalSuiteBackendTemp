<template>

    <div v-if="$root.clientLeftTableLoaded">
        <client-form 
            v-show="activePage === 'Form'" 
            id="clients-right-client-form" 
            uniqueId="clients-right-client-form" 
            ref="client-form"
            leftPageTableRef="clients-table"
            :modal="false"
        />
    </div>

</template>

<script>

export default {

    components: {
        ClientForm: () => import("./ClientForm"),

    },

    data() {
        return {
            activePage: null,
        }
    },

}

</script>
