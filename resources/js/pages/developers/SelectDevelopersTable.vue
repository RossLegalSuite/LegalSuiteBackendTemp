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
        this.url = "/developers/get";
        this.route = "developers";
        this.title = 'Developers';
        this.plural = 'Developers';
        this.singular = 'Developer';
    },

    methods: {

        selectRecord(id) {

            this.$parent.hide();

            this.$parent.$parent.developerSelected([id]);

        },        

        defineTableColDefs: function () {

            let tableColumnDefs = [
                {
                    title: "Company",
                    name: "developers.name",
                    data: null,
                    targets: 1,
                    width: "90%",
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
