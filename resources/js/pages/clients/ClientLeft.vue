<template>
    <div class="card h-100 border-0">
        <div class="card-header invoices-bg">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-address-book mr-2"></i>Clients ({{currentServer.description}})</h3>
                <page-close-button @closeClicked="closeLeftPage(pageName)"/>
            </div>
        </div>

        <div id="client-left-body" class="card-body overflow-auto pb-0 pt-3 px-3">

            <client-table
                :lazy-load-flag="true"
                :tagging="false"
                form-ref="client-form" 
                ref="clients-table" 
                tableId="clients-table"
            />

        </div>

    </div>
</template>     

<script>

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import leftTemplate from "../left-template";

export default {

    extends: leftTemplate,

    components: {
        ClientTable: () => import("./ClientTable"),
    },

    data() {
        return {
            pageName: "Clients",
            tableMounted: false,
        };
    },

    computed: {
        ...mapGetters(['leftTabs', 'activeLeftTabs','currentServer']),
    },

    watch: {

        tableMounted() { this.initializeTable(); },

    },

    activated() {

        if ( $('#clients-table').length ) {

            let scrollTop = $('#clients-table' + '_wrapper .dataTables_scrollBody').offset().top;
            let tableTop = $('#clients-table').offset().top;

            if ( tableTop > scrollTop ) this.table.table.ajax.reload();

        }
    },


    mounted() {

        let thisTab = this.leftTabs.filter(tab => tab.pageName === this.pageName);

        if (thisTab.length)  this.displayLeftTab(thisTab[0]);

    },    

    methods: {

        ...mapMutations(['displayLeftTab','hideLeftTab']),

        initializeTable() {

            // Order by Date, Time descending
            this.table.initialOrder = [[1, "asc"]];

            this.table.tableOptions = { tableBottom: 80 }; 

            // Used to lazy load the Form (and all its sub components) on the right
            this.table.loadDataTable(() =>{
                this.$root.clientLeftTableLoaded = true;
            });

        },

        newRecordButtonClicked() {

            let thisForm = root.$refs['pages'].$refs["right-page"].$refs['client-form'];

            thisForm.insertClicked();

        },


    },
}
</script>