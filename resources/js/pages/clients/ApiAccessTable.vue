<template>
<div>
    <div class="d-flex justify-content-between table-functions-row">
        <global-search/>
        <div>
            <table-options/>
            <new-record-button type="button" :title="'Create a new ' + singular" text="Add"/>
        </div>
    </div>

    <table :id="tableId" class="table bordered" style="width:100%"></table>

</div>
</template>


<script>

import tableTemplate from "@components/tables/table-template";

export default {

    mixins: [tableTemplate],

    created() {
        this.url = "/api_access/get";
        this.route = "api_access";
        this.tableName = 'api_access';
        this.title = 'API Access';
        this.plural = 'API Access Entries';
        this.singular = 'API Access Entry';
    },

    methods: {

        newRecordButtonClicked() {

            let thisForm = this.$parent.$refs['api-access-form'];

            thisForm.insertClicked();

        },

        defineTableColDefs() {

            let tableColumnDefs = [
                {
                    title: "Developer",
                    name: "developers.name",
                    data: null,
                    width: "50%",
                    targets: 1,
                    render: function (data) {
                        return htmlDecode(data.developername);
                    }
                },
                {
                    title: "Grant",
                    name: "api_access.access_flag",
                    data: null,
                    width: "10%",
                    targets: 2,
                    render: function (data) {
                        return (data.access_flag == '1') ? 'Yes' : 'No';
                    }
                },
                {
                    title: "Get",
                    name: "api_access.get_access_flag",
                    data: null,
                    width: "10%",
                    targets: 3,
                    render: function (data) {
                        return (data.get_access_flag == '1') ? 'Yes' : 'No';
                    }
                },
                {
                    title: "Post",
                    name: "api_access.store_access_flag",
                    data: null,
                    width: "10%",
                    targets: 4,
                    render: function (data) {
                        return (data.store_access_flag == '1') ? 'Yes' : 'No';
                    }
                },
                {
                    title: "Put",
                    name: "api_access.update_access_flag",
                    data: null,
                    width: "10%",
                    targets: 5,
                    render: function (data) {
                        return (data.update_access_flag == '1') ? 'Yes' : 'No';
                    }
                },
                {
                    title: "Delete",
                    name: "api_access.delete_access_flag",
                    data: null,
                    width: "10%",
                    targets: 6,
                    render: function (data) {
                        return (data.delete_access_flag == '1') ? 'Yes' : 'No';
                    }
                },
            ]
        
            return tableColumnDefs;
        }

    },

}  
</script>
