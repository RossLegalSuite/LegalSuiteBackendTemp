<template>
<div>
    <div class="modal" :id="id">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content" style="border-color: forestgreen;">

                <div class="modal-header forestgreen">
                    <h2 class="modal-title">
                        <img class="mr-2" src="/img/favicon.ico" alt="logo">
                        LegalSuite Online
                    </h2>
                </div>

                <div class="modal-body p-3" style="overflow:unset">

                    <h4 class="text-center">
                        <div>
                            <span>Loading the LegalSuite Backend</span>
                        </div>
                        <div class="mt-3">
                            <i class="fa fa-spinner fa-pulse fa-lg mr-2"></i>
                            <span>Please wait....</span>
                        </div>
                    </h4>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>

import modalTemplate from "../modals/modal-template";

export default {

    mixins: [modalTemplate],

    props: {
        id: String,
    },


}  
</script>