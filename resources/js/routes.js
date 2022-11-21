import pages from './pages/pages';
import guestPages from './pages/guestPages';

// See: https://alligator.io/vuejs/lazy-loading-vue-cli-3-webpack/
function lazyLoad(component){
    return() => import(/* webpackChunkName: "view-[request]" */ `${component}.vue`)
}

export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/guest/GuestTabs'),
            },
            children: [{
                path: '/',
                name: 'guest',
                components: {
                    leftPage: lazyLoad('./pages/guest/GuestLeft'),
                    rightPage: lazyLoad('./pages/guest/GuestRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend' },
        },
        {
            path: '/home',
            component: pages,
            children: [{
                path: '/home',
                name: 'home',
                components: {
                    leftPage: lazyLoad('./pages/home/HomeLeft'),
                    rightPage: lazyLoad('./pages/home/HomeRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Home' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/parties/PartyTabs'),
            },
            children: [{
                path: '/parties',
                name: 'parties',
                components: {
                    leftPage: lazyLoad('./pages/parties/PartyLeft'),
                    rightPage: lazyLoad('./pages/parties/PartyRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Address Book' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/developers/DeveloperTabs'),
            },
            children: [{
                path: '/developers',
                name: 'developers',
                components: {
                    leftPage: lazyLoad('./pages/developers/DeveloperLeft'),
                    rightPage: lazyLoad('./pages/developers/DeveloperRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Developers' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/clients/ClientTabs'),
            },
            children: [{
                path: '/clients',
                name: 'clients',
                components: {
                    leftPage: lazyLoad('./pages/clients/ClientLeft'),
                    rightPage: lazyLoad('./pages/clients/ClientRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Clients' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/errorlog/ErrorlogTabs'),
            },
            children: [{
                path: '/errorlog',
                name: 'errorlog',
                components: {
                    leftPage: lazyLoad('./pages/errorlog/ErrorlogLeft'),
                    rightPage: lazyLoad('./pages/errorlog/ErrorlogRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Error Log' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/application-errorlog/ApplicationErrorlogTabs'),
            },
            children: [{
                path: '/application-errorlog',
                name: 'application-errorlog',
                components: {
                    leftPage: lazyLoad('./pages/application-errorlog/ApplicationErrorlogLeft'),
                    rightPage: lazyLoad('./pages/application-errorlog/ApplicationErrorlogRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Application Errors' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/trafficlog/TrafficlogTabs'),
            },
            children: [{
                path: '/trafficlog',
                name: 'trafficlog',
                components: {
                    leftPage: lazyLoad('./pages/trafficlog/TrafficlogLeft'),
                    rightPage: lazyLoad('./pages/trafficlog/TrafficlogRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Traffic Log' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/matter-parties/MatterPartiesTabs'),
            },
            children: [{
                path: '/matter-parties',
                name: 'matter-parties',
                components: {
                    leftPage: lazyLoad('./pages/matter-parties/MatterPartiesLeft'),
                    rightPage: lazyLoad('./pages/matter-parties/MatterPartiesRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Parties' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/employees/EmployeeTabs'),
            },
            children: [{
                path: '/employees',
                name: 'employees',
                components: {
                    leftPage: lazyLoad('./pages/employees/EmployeeLeft'),
                    rightPage: lazyLoad('./pages/employees/EmployeeRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Employees' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/matters/MatterTabs'),
            },
            children: [{
                path: '/matters',
                name: 'matters',
                components: {
                    leftPage: lazyLoad('./pages/matters/MatterLeft'),
                    rightPage: lazyLoad('./pages/matters/MatterRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Matters' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/client/matters/MatterTabs'),
            },
            children: [{
                path: '/matters',
                name: 'clientMatters',
                components: {
                    leftPage: lazyLoad('./pages/client/matters/MatterLeft'),
                    rightPage: lazyLoad('./pages/client/matters/MatterRight'),
                }
            }],
            meta: { title: firmCode + ' - Matters' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/email/EmailTabs'),
            },
            children: [{
                path: '/email',
                name: 'email',
                components: {
                    leftPage: lazyLoad('./pages/email/EmailLeft'),
                    rightPage: lazyLoad('./pages/email/EmailRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Email' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/feenotes/FeeNoteTabs'),
            },
            children: [{
                path: '/feenotes',
                name: 'feenotes',
                components: {
                    leftPage: lazyLoad('./pages/feenotes/FeeNoteLeft'),
                    rightPage: lazyLoad('./pages/feenotes/FeeNoteRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Fee Notes' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/filenotes/FileNoteTabs'),
            },
            children: [{
                path: '/filenotes',
                name: 'filenotes',
                components: {
                    leftPage: lazyLoad('./pages/filenotes/FileNoteLeft'),
                    rightPage: lazyLoad('./pages/filenotes/FileNoteRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - File Notes' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/doclog/DoclogTabs'),
            },
            children: [{
                path: '/doclog',
                name: 'doclog',
                components: {
                    leftPage: lazyLoad('./pages/doclog/DoclogLeft'),
                    rightPage: lazyLoad('./pages/doclog/DoclogRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Document Log' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/documents/DocumentsTabs'),
            },
            children: [{
                path: '/documents',
                name: 'documents',
                components: {
                    leftPage: lazyLoad('./pages/documents/DocumentsLeft'),
                    rightPage: lazyLoad('./pages/documents/DocumentsRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Generated Documents' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/reminders/ReminderTabs'),
            },
            children: [{
                path: '/reminders',
                name: 'reminders',
                components: {
                    leftPage: lazyLoad('./pages/reminders/ReminderLeft'),
                    rightPage: lazyLoad('./pages/reminders/ReminderRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Reminders' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/document-sets/DocumentSetTabs'),
            },
            children: [{
                path: '/document_sets',
                name: 'documentSets',
                components: {
                    leftPage: lazyLoad('./pages/document-sets/DocumentSetLeft'),
                    rightPage: lazyLoad('./pages/document-sets/DocumentSetRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Document Sets' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/feesheets/FeeSheetTabs'),
            },
            children: [{
                path: '/feesheets',
                name: 'feeSheets',
                components: {
                    leftPage: lazyLoad('./pages/feesheets/FeeSheetLeft'),
                    rightPage: lazyLoad('./pages/feesheets/FeeSheetRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Fee Sheets' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/feecodes/FeeCodeTabs'),
            },
            children: [{
                path: '/feecodes',
                name: 'feeCodes',
                components: {
                    leftPage: lazyLoad('./pages/feecodes/FeeCodeLeft'),
                    rightPage: lazyLoad('./pages/feecodes/FeeCodeRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Fee Codes' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/document-templates/DocumentTabs'),
            },
            children: [{
                path: '/document_templates',
                name: 'documentTemplates',
                components: {
                    leftPage: lazyLoad('./pages/document-templates/DocumentLeft'),
                    rightPage: lazyLoad('./pages/document-templates/DocumentRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Document Templates' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/templates/TemplateTabs'),
            },
            children: [{
                path: '/templates',
                name: 'systemTemplates',
                components: {
                    leftPage: lazyLoad('./pages/templates/TemplateLeft'),
                    rightPage: lazyLoad('./pages/templates/TemplateRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - System Templates' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/components/ComponentTabs'),
            },
            children: [{
                path: '/components',
                name: 'components',
                components: {
                    leftPage: lazyLoad('./pages/components/ComponentLeft'),
                    rightPage: lazyLoad('./pages/components/ComponentRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Components' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/extra-screens/ExtraScreenTabs'),
            },
            children: [{
                path: '/extra_screens',
                name: 'extraScreens',
                components: {
                    leftPage: lazyLoad('./pages/extra-screens/ExtraScreenLeft'),
                    rightPage: lazyLoad('./pages/extra-screens/ExtraScreenRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Extra Screens' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/reports/ReportTabs'),
            },
            children: [{
                path: '/reports',
                name: 'reports',
                components: {
                    leftPage: lazyLoad('./pages/reports/ReportLeft'),
                    rightPage: lazyLoad('./pages/reports/ReportRight'),
                }
            }],
            meta: { title: 'LegalSuite Backend - Reports' },
        },
        {
            path: '/page',
            components: {
                default: loggedIn ? pages : guestPages,
                rightHandTabs: lazyLoad('./pages/settings/SettingsTabs'),
            },
            children: [{
                path: '/settings',
                name: 'settings',
                components: {
                    leftPage: lazyLoad('./pages/settings/SettingsLeft'),
                    rightPage: lazyLoad('./pages/settings/SettingsRight'),
                    //rightHandTabs: lazyLoad('./pages/settings/SettingsTabs'),
                },
            }],
            meta: { title: 'LegalSuite Backend - Settings' },
        },
    ]
}