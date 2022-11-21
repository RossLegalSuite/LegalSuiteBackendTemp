<template>
<div>
    <div class="d-flex justify-content-between table-functions-row">
        <global-search/>
        <div>
            <table-options/>
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
        this.url = "/clients/get";
        this.route = "clients";
        this.title = 'Clients';
        this.plural = 'Clients';
        this.singular = 'Client';
        //this.select = ['clients.id','clients.name, clients.firmcode'];   
    },

    methods: {

        selectRecord(id) {

            this.$parent.hide();

            this.$parent.$parent.clientSelected([id]);

        },        

        defineTableColDefs: function () {

            let tableColumnDefs = [
                {
                    title: "Code",
                    name: "clients.firmcode",
                    data: null,
                    targets: 1,
                    width: "20%",
                    render: (data) => { 
                        return htmlDecode(data.firmcode);
                    }
                },
                {
                    title: "Name",
                    name: "clients.name",
                    data: null,
                    targets: 2,
                    width: "80%",
                    render: (data) => { 
                        return htmlDecode(data.name);
                    }
                },

            ];
            return tableColumnDefs;
        }

    },

}  
</script>
