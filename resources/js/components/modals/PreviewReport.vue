<template>

    <div class="modal" :id="id" style="z-index: 3010">
        <div class="modal-dialog modal-dialog-centered modal-xxl">
            <div class="modal-content green-border">

                <div class="modal-header green-bg">
                    <div class="page-title">
                        <h3>
                            <i class='fa fa-print mr-2'></i>
                            <span v-html="title"></span>
                        </h3>
                        <i :id="id + '-modal-close-button'" title="Close this window" class="cp top-right fa fa-times-circle fa-2x text-white" data-dismiss="modal"></i>
                    </div>
                </div>

                <div class="modal-body p-3" style="height: 75vh; overflow-y: auto;" v-html="htmlBody"/>

                <div class="modal-footer justify-content-between">
                    <div>
                        <button class="btn btn-primary form-button mr-3" type="button" @click="displayPdf" title="Generate a PDF"><i class="fa fa-file-pdf-o fa-lg mr-2"></i>Create PDF</button>
                    </div>
                    <div>
                        <button class="btn btn-success form-button mr-3" type="button" @click="printDocument" title="Print the document"><i class="fa fa-print fa-lg mr-2"></i>Print</button>
                        <button class="btn btn-danger form-button" type="button" data-dismiss="modal" title="Close this window"><i class="fa fa-times-circle fa-lg mr-2"></i>Close</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

import modalTemplate from "./modal-template";

export default {

    mixins: [modalTemplate],

    data() {
        return {
            title: null,
            htmlBody: '',
            template: null,
        }
    },

    mounted() {

        this.$parent.previewReport = this;

    },


    methods: {

        load( template ) {

            this.template = template;

            this.show();

        },

        displayPdf() {

            root.$snotify.simple('Please wait...', 'Creating PDF', { timeout: 0, icon: 'img/cogs.gif' });

            const params = { 
                ...this.template,  
                bodyHtml: this.htmlBody,
                folder: 'reports',
                fileName: toKebabCase(this.title) + '-' + moment().format('YYYY-MM-DD-HH-mm-ss') + '.pdf',
            };
    
            axios.post('/pdf/htmlToPdf', params)
    
            .then(response => {
    
                if ( response.data.error ) {
    
                    showError('Error creating PDF',response.data.error);
    
                } else {

                    root.$snotify.clear();
    
                    root.previewPdf.title = params.fileName;

                    root.previewPdf.showEmailButton = false;

                    root.previewPdf.document = {
                        url: response.data.url,
                        description: this.title,
                    };

                    root.previewPdf.documentPath = response.data.url; //Being watched: To load the iFrame

                    root.previewPdf.show();

                }

            }).catch(error => { 
                showError('Error creating PDF',error);
            });                                         

        },

        printDocument() {

            printHtml(this.htmlBody);

        },

    }

}
</script>

