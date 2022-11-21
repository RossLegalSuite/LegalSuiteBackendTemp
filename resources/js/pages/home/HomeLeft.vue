<template>

    <div class="filofax-page p-2">

        <div class="d-flex">


            <div class="program-icon" @click="loadTab('Clients')">
                <img src="/icons/party-entity-red.gif">
                <div class="program-icon-text">Clients</div>
            </div>

            <div class="program-icon" @click="loadTab('Developers')">
                <img src="/icons/party-role.png">
                <div class="program-icon-text">Developers</div>
            </div>

        </div>

        <div class="d-flex">

            <div class="program-icon" @click="loadTab('Errorlog')">
                <img src="/icons/bug.gif">
                <div class="program-icon-text">API Errors</div>
            </div>

            <div class="program-icon" @click="loadTab('Trafficlog')">
                <img src="/icons/import.png">
                <div class="program-icon-text">Traffic Log</div>
            </div>

            <div class="program-icon" @click="loadTab('ApplicationErrorLog')">
                <img src="/icons/party-role-green.gif">
                <div class="program-icon-text">Application Errors</div>
            </div>



        </div>

        <div class="d-flex">


            <div class="program-icon" @click="serverTargetChanged">
                <div v-if="currentServer.description == 'Live'">
                    <img src="/icons/live-server.gif">
                    <div class="program-icon-text">Live Server</div>
                </div>
                <div v-else>
                    <img src="/icons/staging-server.gif">
                    <div class="program-icon-text">Staging Server</div>
                </div>
            </div>

            <a class="program-icon" href="api.legalsuite.net">
                <img src="/icons/document.gif">
                <div class="program-icon-text">API Documentation</div>
            </a>

            <div class="program-icon" @click="logout">
                <img src="/icons/power.gif">
                <div class="program-icon-text">Logout</div>
            </div>


        </div>

    </div>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
export default {


    computed: {
        ...mapGetters(['leftTabs','currentServer']),
    },

    data() {
        return {
            componentName: null,
            emailLoaded: false,
        }
    },

    methods: {

        ...mapMutations([
            'displayLeftTab',
            'hideAllTabs',
            'setCurrentServer',
        ]),     

        serverTargetChanged() {

            if (this.currentServer.description == 'Live') {
                
                this.setCurrentServer({
                    url: 'https://legalsuitestaging.co.za',
                    description:'Staging'
                });

            } else {

                this.setCurrentServer({
                    url: 'https://legalsuiteapi.co.za',
                    description:'Live'
                });

            }


            // Hide any left hand pages
            //this.hideAllTabs();

            componentFunction('client-form', 'kill');
            componentFunction('developer-form', 'kill');
            componentFunction('errorlog-form', 'kill');
            componentFunction('application-errorlog-form', 'kill');
            componentFunction('trafficlog-form', 'kill');

            // 12 Jun 2022 - Rather refresh the tables otherwise the Filter Form stops working
            this.$root.setTableToRefresh('clients', 'clients-table');
            this.$root.setTableToRefresh('developers', 'developers-table');
            this.$root.setTableToRefresh('trafficlog', 'trafficlog-table');
            this.$root.setTableToRefresh('errorlog', 'errorlog-table');
            this.$root.setTableToRefresh('application-errorlog', 'application-errorlog-table');

            axios.post('utils/setServerURL',{serverUrl: this.currentServer.url}).catch( (error) => {
                showError('Error setting server target session', error); 
            })
            .then(() => {

                axios.post('/clients/get').then(response => {

                    if (response.data.error) {

                        showError( 'Error getting Clients', response.data.error);

                    } else if (response.data.errors) {

                        showError( 'Error getting Clients', response.data.errors);
    
                    } else {

                        window.root.clients = this.$root.clients = response.data.data;
                    }

                }).catch( (error) => {
                    showError('Error getting Clients',error)
                });

                axios.post('/developers/get').then(response => {

                    if (response.data.error) {

                        showError( 'Error getting Developers', response.data.error);

                    } else if (response.data.errors) {

                        showError( 'Error getting Developers', response.data.errors);
    
                    } else {

                        window.root.developers = this.$root.developers = response.data.data;
                    }

                }).catch( (error) => {
                    showError('Error getting Developers',error)
                });

            }).catch( (error) => {
                    showError('Error setting server target session', error); 
            });

        },

        loadTab( name ) {

            let thisTab = this.leftTabs.filter(tab => tab.pageName == name);

            if (thisTab.length) {

                this.displayLeftTab(thisTab[0]);
    
                this.$router.push({ name: thisTab[0].routeName });

            }
        },

        logout() {

            axios.post('/logout').then(response => {

                window.location = response.data;

            });

        }
    }
}

</script>

