<template>
<div>
    <div class="d-flex justify-content-between table-functions-row">
        <global-search/>
        <div>
            <!-- <filter-form-button/> -->
            <table-options/>
            <new-record-button type="button" :title="'Create a new ' + singular" :text="'New ' + singular"/>

        </div>

    </div>

    <table :id="tableId" class="table bordered" style="width:100%"/>
    <table-footer/>

    <!-- <file-note-filter-form
        :id="tableId + '-filter-form'"
        :ref="tableId + '-filter-form'"
    /> -->

</div>
</template>

<script>

import tableTemplate from "@components/tables/table-template";

export default {

    mixins: [tableTemplate],

    components: {
        //FileNoteFilterForm: () => import("./FileNoteFilterForm"),
    },

    created() {
        this.url = "/developers/get";
        this.route = "developers";
        this.tableName = 'developers';
        this.title = 'Developers';
        this.plural = 'Developers';
        this.singular = 'Developer';
    },

    methods: {

        defineTableColDefs() {


            let tableColumnDefs = [
                {
                    title: "Company",
                    name: "developers.name",
                    filterColumnName: "developers.name",
                    data: null,
                    width: "40%",
                    targets: 1,
                    render: function (data) {
                        return htmlDecode(data.name);
                    }
                },
                {
                    title: "Contact",
                    name: "developers.contact_person",
                    filterColumnName: "developers.contact_person",
                    data: null,
                    width: "25%",
                    targets: 2,
                    render: function (data) {
                        return htmlDecode(data.contact_person);
                    }
                },
                {
                    title: "Email",
                    name: "developers.contact_email",
                    filterColumnName: "developers.contact_email",
                    data: null,
                    width: "25%",
                    targets: 3,
                    render: function (data) {
                        return htmlDecode(data.contact_email);
                    }
                },
                {
                    title: "Token",
                    name: "developers.developer_token",
                    filterColumnName: "developers.developer_token",
                    data: null,
                    visible: false,
                    width: "20%",
                    targets: 4,
                    render: function (data) {
                        return data.developer_token;
                    }
                },

            ];
        
            return tableColumnDefs;
        }

    },

}  
</script>
