<template>
<div>
    <div class="d-flex justify-content-between table-functions-row">
        <global-search/>
        <div>
            <filter-form-button/>
            <table-options/>
        </div>

    </div>

    <table :id="tableId" class="table bordered" style="width:100%"/>
    <table-footer/>

    <traffic-log-filter-form
        :id="tableId + '-filter-form'"
        :ref="tableId + '-filter-form'"
    />

</div>
</template>

<script>

import tableTemplate from "@components/tables/table-template";

export default {

    mixins: [tableTemplate],

    components: {
        TrafficLogFilterForm: () => import("./TrafficLogFilterForm"),
    },
    created() {
        this.url = "/traffic_log/get";
        this.route = "traffic_log";
        this.tableName = 'traffic_log';
        this.title = 'Traffic Log';
        this.plural = 'Traffic Log Entries';
        this.singular = 'Traffic Log Entry';
        this.viewTableFlag = true;
    },

    methods: {

        defineTableColDefs() {

            let tableColumnDefs = [

                {
                    title: "Date",
                    name: "traffic_log.created_at",
                    filterColumnName: "traffic_log.created_at",
                    filterType: 'Date',
                    data: null,
                    width: "20%",
                    targets: 1,
                    render: function (data) {
                        return htmlDecode(data.created_at);
                    }
                },
                {
                    title: "Url",
                    name: "traffic_log.url",
                    filterColumnName: "traffic_log.url",
                    data: null,
                    width: "35%",
                    targets: 2,
                    render: function (data) {
                        return htmlDecode(data.url);
                    }
                },
                {
                    title: "Client Code",
                    name: "clients.firmcode",
                    filterColumnName: "clients.firmcode",
                    visible: true,
                    data: null,
                    width: "20%",
                    targets: 3,
                    render: function (data) {
                        return htmlDecode(data.clientcode);
                    }
                },
                {
                    title: "Developer",
                    name: "developers.name",
                    filterColumnName: "developers.name",
                    data: null,
                    width: "20%",
                    targets: 4,
                    render: function (data) {
                        return htmlDecode(data.developername);
                    }
                },
            ];
        
            return tableColumnDefs;
        }

    },

}  
</script>
