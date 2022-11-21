<template>
<span>

    <b-dropdown :id="$parent.tableId + '-dropdown-menu'" size="sm" right variant="primary" class="mr-2">

        <template v-slot:button-content>
            <span title="Change the table layout, print and/or reload the table data">
                <i class="fa fa-server mr-2" ></i>Table
            </span>
        </template>

        <b-dropdown-item-button variant="primary" title="Choose which columns are displayed in the table" @click="$root.tableLayoutModal.openModal($parent.tableId, $parent)"><i class="fa fa-server mr-2"></i>Layout</b-dropdown-item-button>
        <b-dropdown-divider/>

        <b-dropdown-item-button variant="primary" :title="'Print the table'" @click="printHtml">
            <i class="fa fa-print mr-2"></i>Print
        </b-dropdown-item-button>
        <b-dropdown-divider/>

        <b-dropdown-item-button variant="primary" :title="'Refresh the ' + $parent.plural + ' table (in case new records have been added)'" @click="refreshData"><i class="fa fa-refresh mr-2"></i>Refresh Data</b-dropdown-item-button>

    </b-dropdown>

</span>
</template>

<script>

export default {

    mounted() {

        this.$parent.tableDropDown = this;

    },    

    methods: {

        async printHtml() {

            // Note: createReportTemplateData is in table-template.js
            // The templateData uses the DataTables rows and columns of the current table

            root.$snotify.simple('Please wait...', 'Creating Report', { timeout: 0, icon: 'img/cogs.gif' });

            let templateData = await this.$parent.createReportTemplateData();

            root.vueRender( root.reportTemplate, templateData )

            .then( (contents) => { 

                root.$snotify.clear();

                var tab = window.open(this.$parent.singular + ' Report', '_blank');
                tab.document.write(contents); 
                tab.document.close(); 

            }).catch( (error) => {
                showError('Error Rendering Html', error);
            });



        },

        refreshData() {
            this.$parent.refresh();
        },

    }
}  
</script>
