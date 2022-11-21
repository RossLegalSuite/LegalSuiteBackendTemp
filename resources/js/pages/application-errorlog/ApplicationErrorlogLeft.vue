<template>
    <div class="card h-100 border-0">
        <div class="card-header bills-bg">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-edit mr-2"></i>Application Errors ({{currentServer.description}}) </h3>
                <page-close-button @closeClicked="closeLeftPage(pageName)"/>
            </div>
        </div>

        <div id="application-errorlog-left-body" class="card-body overflow-auto pb-0 pt-3 px-3">

            <application-errorlog-table
                :lazy-load-flag="true"
                :tagging="false"
                form-ref="application-errorlog-form" 
                ref="application-errorlog-table" 
                tableId="application-errorlog-table"
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
        ApplicationErrorlogTable: () => import("./ApplicationErrorlogTable"),
    },

    data() {
        return {
            pageName: "ApplicationErrorLog",
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

        if ( $('#application-errorlog-table').length ) {

            let scrollTop = $('#application-errorlog-table' + '_wrapper .dataTables_scrollBody').offset().top;
            let tableTop = $('#application-errorlog-table').offset().top;

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
            this.table.initialOrder = [[1, "desc"]];

            this.table.tableOptions = { tableBottom: 80 }; 

            // Used to lazy load the Form (and all its sub components) on the right
            this.table.loadDataTable(() =>{
                this.$root.applicationErrorlogLeftTableLoaded = true;
            });

        },

        newRecordButtonClicked() {

            let thisForm = root.$refs['pages'].$refs["right-page"].$refs['application-errorlog-form'];

            thisForm.insertClicked();

        },


    },
}
</script>