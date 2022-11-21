<template>
    <div class="card h-100 border-0">
        <div class="card-header blue-bg">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-automobile mr-2"></i>Traffic Log ({{currentServer.description}})</h3>
                <page-close-button @closeClicked="closeLeftPage(pageName)"/>
            </div>
        </div>

        <div id="trafficlog-left-body" class="card-body overflow-auto pb-0 pt-3 px-3">

            <trafficlog-table
                :lazy-load-flag="true"
                :tagging="false"
                form-ref="trafficlog-form" 
                ref="trafficlog-table" 
                tableId="trafficlog-table"
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
        TrafficlogTable: () => import("./TrafficlogTable"),
    },

    data() {
        return {
            pageName: "Trafficlog",
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

        if ( $('#trafficlogs-table').length ) {

            let scrollTop = $('#trafficlogs-table' + '_wrapper .dataTables_scrollBody').offset().top;
            let tableTop = $('#trafficlogs-table').offset().top;

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

            // Order by Date descending ##ROSS
            this.table.initialOrder = [[1, "desc"]];

            this.table.tableOptions = { tableBottom: 80 }; 

            // Used to lazy load the Form (and all its sub components) on the right
            this.table.loadDataTable(() =>{
                this.$root.trafficlogLeftTableLoaded = true;
            });

        },

        newRecordButtonClicked() {

            let thisForm = root.$refs['pages'].$refs["right-page"].$refs['trafficlog-form'];

            thisForm.insertClicked();

        },


    },
}
</script>