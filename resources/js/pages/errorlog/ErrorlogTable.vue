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

    <error-log-filter-form
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
        ErrorLogFilterForm: () => import("./ErrorLogFilterForm"),
    },

    created() {
        this.url = "/api_errors/get";
        this.route = "api_errors";
        this.tableName = 'api_errors';
        this.title = 'Error Logs';
        this.plural = 'Error Log Entries';
        this.singular = 'Error Log Entry';
        this.viewTableFlag = true;
    },

    methods: {

        defineTableColDefs() {


            let tableColumnDefs = [
                {
                    title: "Date",
                    name: "api_errors.created_at",
                    filterColumnName: "api_errors.created_at",
                    filterType: 'Date',
                    data: null,
                    width: "25%",
                    targets: 1,
                    render: function (data) {
                        return htmlDecode(data.created_at);
                    }
                },
                {
                    title: "Id",
                    name: "api_errors.id",
                    filterColumnName: "api_errors.id",
                    data: null,
                    width: "10%",
                    targets: 2,
                    render: function (data) {
                        return htmlDecode(data.id);
                    }
                },
                {
                    title: "Description",
                    name: "api_errors.message",
                    filterColumnName: "api_errors.message",
                    data: null,
                    width: "45%",
                    targets: 3,
                    render: function (data) {
                        return htmlDecode(data.message);
                    }
                },
                {
                    title: "Client",
                    name: "clients.firmcode",
                    filterColumnName: "clients.firmcode",
                    visible: true,
                    data: null,
                    width: "15%",
                    targets: 4,
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
                    targets: 5,
                    render: function (data) {
                        return htmlDecode(data.developername);
                    }
                },
                
            ]
        
            return tableColumnDefs;
        }

    },

}  
</script>
