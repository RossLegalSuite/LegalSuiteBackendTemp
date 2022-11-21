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

    <application-error-filter-form
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
        ApplicationErrorFilterForm: () => import("./ApplicationErrorFilterForm"),
    },

    created() {
        this.url = "/application_errors/get";
        this.route = "application_errors";
        this.tableName = 'application_errors';
        this.title = 'Application Errors';
        this.plural = 'Application Errors';
        this.singular = 'Application Error';
        this.viewTableFlag = true;
    },

    methods: {

        defineTableColDefs() {


            let tableColumnDefs = [
                {
                    title: "Date",
                    name: "application_errors.created_at",
                    filterColumnName: "application_errors.created_at",
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
                    name: "application_errors.id",
                    filterColumnName: "application_errors.id",
                    data: null,
                    width: "10%",
                    targets: 2,
                    render: function (data) {
                        return htmlDecode(data.id);
                    }
                },
                {
                    title: "Client",
                    name: "clients.firmcode",
                    filterColumnName: "clients.firmcode",
                    visible: true,
                    data: null,
                    width: "15%",
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
                {
                    title: "Type",
                    name: "application_errors.type ",
                    filterColumnName: "application_errors.type ",
                    data: null,
                    width: "20%",
                    targets: 5,
                    render: function (data) {
                        return htmlDecode(data.type );
                    }
                },
                {
                    title: "Description",
                    name: "application_errors.description",
                    filterColumnName: "application_errors.description",
                    data: null,
                    width: "20%",
                    targets: 6,
                    render: function (data) {
                        return htmlDecode(data.description);
                    }
                },
                {
                    title: "User",
                    name: "application_errors.user",
                    filterColumnName: "application_errors.user",
                    data: null,
                    width: "20%",
                    targets: 7,
                    render: function (data) {
                        return htmlDecode(data.user);
                    }
                },
                {
                    title: "Details",
                    name: "application_errors.details",
                    filterColumnName: "application_errors.details",
                    visible: false,
                    data: null,
                    width: "20%",
                    targets: 8,
                    render: function (data) {
                        return htmlDecode(data.details);
                    }
                }
            ];
        
            return tableColumnDefs;
        }

    },

}  
</script>
