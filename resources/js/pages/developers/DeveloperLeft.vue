<template>
    <div class="card h-100 border-0">
        <div class="card-header filenotes-bg">
            <div class="d-flex justify-content-between">
                <h3><i class="fa fa-user-circle-o mr-2"></i>Developers ({{currentServer.description}})</h3>
                <page-close-button @closeClicked="closeLeftPage(pageName)"/>
            </div>
        </div>

        <div id="developer-left-body" class="card-body overflow-auto pb-0 pt-3 px-3">

            <developer-table
                :lazy-load-flag="true"
                :tagging="false"
                form-ref="developer-form" 
                ref="developers-table" 
                tableId="developers-table"
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
        DeveloperTable: () => import("./DeveloperTable"),
    },

    data() {
        return {
            pageName: "Developers",
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

        if ( $('#developers-table').length ) {

            let scrollTop = $('#developers-table' + '_wrapper .dataTables_scrollBody').offset().top;
            let tableTop = $('#developers-table').offset().top;

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
                this.$root.developerLeftTableLoaded = true;
            });

        },

        newRecordButtonClicked() {

            let thisForm = root.$refs['pages'].$refs["right-page"].$refs['developer-form'];

            thisForm.insertClicked();

        },


    },
}
</script>