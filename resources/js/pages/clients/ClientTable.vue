<template>
<div>
    <div class="d-flex justify-content-between table-functions-row">
        <global-search/>
        <div>
            <table-options/>
            <new-record-button type="button" :title="'Create a new ' + singular" :text="'New ' + singular"/>
        </div>

    </div>

    <table :id="tableId" class="table bordered" style="width:100%"/>
    <table-footer/>

</div>
</template>

<script>

import tableTemplate from "@components/tables/table-template";

export default {

    mixins: [tableTemplate],

    components: {
    },

    created() {
        this.url = "/clients/get";
        this.route = "clients";
        this.tableName = 'clients';
        this.title = 'Clients';
        this.plural = 'Clients';
        this.singular = 'Client';
    },

    methods: {

        defineTableColDefs() {


            let tableColumnDefs = [
                {
                    title: "Firm Code",
                    name: "clients.firmcode",
                    filterColumnName: "clients.firmcode",
                    data: null,
                    width: "15%",
                    targets: 1,
                    render: function (data) {
                        return htmlDecode(data.firmcode);
                    }
                },
                {
                    title: "Name",
                    name: "clients.name",
                    filterColumnName: "clients.name",
                    data: null,
                    width: "30%",
                    targets: 2,
                    render: function (data) {
                        return htmlDecode(data.name);
                    }
                },
                {
                    title: "Contact",
                    name: "clients.contact_person",
                    filterColumnName: "clients.contact_person",
                    data: null,
                    width: "20%",
                    targets: 3,
                    render: function (data) {
                        return htmlDecode(data.contact_person);
                    }
                },
                {
                    title: "Email",
                    name: "clients.contact_email",
                    filterColumnName: "clients.contact_email",
                    data: null,
                    width: "20%",
                    targets: 4,
                    render: function (data) {
                        return htmlDecode(data.contact_email);
                    }
                },

            ];
        
            return tableColumnDefs;
        }

    },

}  
</script>
