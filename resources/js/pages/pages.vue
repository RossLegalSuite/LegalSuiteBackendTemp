<template>

    <div class="d-lg-flex filofax-page-container" id="filofax-both-pages">

        <div class="filofax-left-page" id="filofax-left-page">

            <keep-alive>
                <router-view ref="left-page" name="leftPage" :key="$route.name"/>
            </keep-alive>                
    
        </div>


        <div class="filofax-binder d-none d-lg-block"></div>
        
        <div class="filofax-right-page" id="filofax-right-page">

            <keep-alive>
                <router-view ref="right-page" name="rightPage" :key="$route.name"/>
            </keep-alive>
            

        </div>

        <component v-show="false" :is="$root.generatedComponent" id="global-generated-component"/>

        <!-- <preview-html ref="previewHtml" id="preview-html"/> -->

        <loading-data-modal ref="loadingDataModal" id="loading-data-modal"/>

        <table-layout-modal ref="tableLayoutModal" id="table-layout-modal"/>

        <table-filter-settings ref="tableFilterSettings" id="table-filter-settings"/>

        <column-filter-form ref="columnFilterForm" id="column-filter-form"/>

        <modal-delete ref="deleteModal" id="global-delete-modal"/>
        <modal-dialog ref="dialogModal" id="global-dialog-modal"/>
        <generating-documents-modal ref="generatingDocumentsModal" id="global-generating-documents-modal"/> -->


    </div>

</template>

<script>

export default {

    computed: {

        currentRouteName() {

            return this.$route ? this.$route.name : null;

        }
    },


    watch: {
        
        currentRouteName(newValue) {

            //console.log("currentRouteName",newValue);
            
            // 26 Mar 2021 - Sometimes get an error: "TypeError: Cannot read property 'route' of null"
            if ( newValue == null ) return;

            //Check if a Form requires a table (or tables) to be refreshed

            //console.log("this.$root.refreshTables",this.$root.refreshTables);

            this.$root.refreshTables.forEach(table => {
                
                if (table && table.route === newValue) {

                    console.log('refreshing ', table.tableRef);

                    componentFunction(table.tableRef, 'refresh');

                    if (table.formRef) {

                        componentFunction(table.formRef, 'refresh');

                    }
                }
                
            });

            // Remove the refreshed tables from the array
            for (let index = 0; index < this.$root.refreshTables.length; index++) {
                
                const table = this.$root.refreshTables[index];

                if (table && table.route === newValue ) {
                    this.$root.refreshTables.splice(index, 1);
                }
                
            }

        }
    },


    mounted() {

        //this.$root.previewHtml = this.$refs.previewHtml;
        this.$root.tableLayoutModal = this.$refs.tableLayoutModal;
        this.$root.tableFilterSettings = this.$refs.tableFilterSettings;
        this.$root.columnFilterForm = this.$refs.columnFilterForm;
        this.$root.deleteModal = this.$refs.deleteModal;
        this.$root.dialogModal = this.$refs.dialogModal;

    },

    methods: {

    },
}
</script>





