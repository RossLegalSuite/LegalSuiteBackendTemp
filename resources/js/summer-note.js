function summerNoteToolBar() {
    return [
        ['style', ['style']],
        ['font', ['bold', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture' ]],
        ['fields', ['fields']],
        ['snippets', ['snippets']],
        ['components', ['components']],
        ['codeview', ['togglecodeview']],
    ];


    // ['style', ['style']],
    // ['font', ['bold', 'underline', 'clear']],
    // ['fontname', ['fontname']],
    // ['color', ['color']],
    // ['para', ['paragraph']],
    // ['custom3', ['preview']],
    // ['custom2', ['fields']],
    // ['custom1', ['togglecodeview']],


    // ['table', ['table']],
    // ['insert', ['link', 'picture' ]],
    //['view', ['codeview']],
}

function addToggleCodeViewButton() {
    return  {
        togglecodeview: addSummerNoteToggleCodeViewButton
    };
}

function toggleToolBarButtons(toolbar) {

    var toolbarButtonsState, customButtonsState;

    var viewButton = toolbar.find('.codeview-button');

    if (viewButton.length) {

        if ( viewButton.hasClass('edit-mode-active') ) {
            toolbarButtonsState = 'show';
            customButtonsState = 'hide';
        } else if ( viewButton.hasClass('code-view-active') ) {
            toolbarButtonsState = 'hide';
            customButtonsState = 'show';
        }

        toggleToolBarButton(toolbar,'.btn-group.note-style',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-font',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-fontname',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-color',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-para',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-table',toolbarButtonsState);
        toggleToolBarButton(toolbar,'.btn-group.note-insert',toolbarButtonsState);

        toggleCustomButton(toolbar,'.btn-group.note-snippets',customButtonsState);
        toggleCustomButton(toolbar,'.btn-group.note-components',customButtonsState);

    } else {
        showError('Error', 'View Button not found');
    }
}

function toggleToolBarButton(toolbar, btnclass, state) {

    var button = toolbar.find(btnclass);

    if ( button.length ) {
        if (state == 'show') {
            button.show();
        } else {
            button.hide();
        }
    }

}

function toggleCustomButton(toolbar, btnclass, state) {

    var button = toolbar.find(btnclass);

    if ( button.length ) {
        if (state == 'show') {
            button.css('display', 'inline-flex');
        } else {
            button.css('display', 'none');
        }
    }

}

function toggleCodeViewButtonText(toolbar) {

    var codeViewButton = toolbar.find('.codeview-button');

    if ( codeViewButton.length ) {

        if ( codeViewButton.hasClass('edit-mode-active')) {

            codeViewButton.removeClass('edit-mode-active');
            codeViewButton.addClass('code-view-active');
            codeViewButton.html('<i class="fa fa-edit mr-2"></i>Html Editor');

        } else {

            codeViewButton.removeClass('code-view-active');
            codeViewButton.addClass('edit-mode-active');
            codeViewButton.html('<i class="fa fa-code mr-2"></i>Code Editor');

        }
    }


}

function addSummerNoteToggleCodeViewButton(context) {

    var ui = $.summernote.ui;

    var toolbar = context.layoutInfo.toolbar;

    var button = ui.button({
        className: 'btn-fullscreen codeview-button edit-mode-active note-codeview-keep ml-2',
        contents: '<i class="fa fa-code mr-2"></i>Code Editor',
        tooltip: 'Switch Editing Mode',
        click: () => {

            toggleCodeViewButtonText(toolbar);

            toggleToolBarButtons(toolbar);

            context.$note.summernote('codeview.toggle');

        }
    });

    return button.render();   
}

function addTemplateFieldsButton() {
    return  {
        fields: this.addSummerNoteTemplateFieldsButton
    };
}

function addSummerNoteTemplateFieldsButton(context) {

    var ui = $.summernote.ui;

    var button = ui.button({
        className: 'btn-fullscreen note-codeview-keep ml-2',
        contents: '<i class="fa fa-file-code-o mr-2"></i>Fields',
        tooltip: 'Insert a Field',
        click: () => {

            if ( context.options.callingComponent.resource == 'Client Report' || context.options.callingComponent.resource == 'Client Matter') {
                context.options.callingComponent.selectFields(context);
            } else {
                root.selectTemplateFields.load(context);
            }

        }
    });

    return button.render();   
}

function addPreviewTemplateButton() {
    return  {
        preview: this.addSummerNotePreviewTemplateButton
    };
}

function addSummerNotePreviewTemplateButton( context ) {

    try {
        
        var ui = $.summernote.ui;

        var tooltip = 'Preview the contents';

        if (context.options.callingComponent.resource == 'Client Report') {
            tooltip = 'Preview the Report';
        } else if (context.options.callingComponent.resource == 'Client Matter') {
            tooltip = 'Preview the Matter View';
        }
    
        var button = ui.button({
            className: 'btn-fullscreen note-codeview-keep ml-2',
            contents: '<i class="fa fa-file-powerpoint-o mr-2"></i>Preview',
            tooltip: tooltip,
            click: () => {
                context.options.previewMethod(context.options.previewMethodParams);
            }
        });
    
        return button.render();   

    } catch (error) {
        console.log("Error",error);
    }

}

function addTemplateSnippetsButton() {
    return  {
        snippets: this.addSummerNoteTemplateSnippetsButton
    };
}

function addSummerNoteTemplateSnippetsButton(context) {

    var ui = $.summernote.ui;

    var button = ui.button({
        className: 'btn-fullscreen note-codeview-keep ml-2',
        contents: '<i class="fa fa-edit mr-2"></i>Snippets',
        tooltip:  'Insert a Snippet',
        click: () => {
            //console.log("context.options.callingComponent",context.options.callingComponent);
            context.options.callingComponent.insertSnippet(context);
        }
    });

    return button.render();   
}


function addTemplateComponentsButton() {
    return  {
        components: this.addSummerNoteTemplateComponentsButton
    };
}

function addSummerNoteTemplateComponentsButton(context) {

    var ui = $.summernote.ui;

    var button = ui.button({
        className: 'btn-fullscreen note-codeview-keep ml-2',
        contents: '<i class="fa fa-cube mr-2"></i>Components',
        tooltip:  'Insert a Component',
        click: () => {
            context.options.callingComponent.insertComponent(context);
        }
    });

    return button.render();   
}
