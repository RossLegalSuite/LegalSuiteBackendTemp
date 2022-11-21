

//Tip: https://stackoverflow.com/questions/7486085/copy-array-by-value
//return JSON.parse(JSON.stringify(root.partyEntities));


//Tip: To generate a unique id use: "printThis-" + new Date().getTime()

var csrfToken = $('meta[name="csrf-token"]').attr("content");

// We are not using ajax (using axios instead) but adding the CSRF token to ajax just in case it is used
$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": csrfToken
    }
});


jQuery.extend(true, jQuery.fn.datetimepicker.defaults, {
    icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-sort-asc',
        down: 'fa fa-sort-desc',
        previous: 'fa fa-toggle-left',
        next: 'fa fa-toggle-right',
        today: 'fa fa-calendar-check-o',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times-circle'
    }
});


/******************************************************* 
Error Handling 
*******************************************************/

//See: https://github.com/axios/axios#interceptors

axios.interceptors.response.use(
    
    function (response) {

        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;

    }, 

    function (error) {

        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        root.$snotify.clear();

        if (error.response) {

            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx

            //console.log('Axios error.response.status', typeof error.response, error.response);

            if ( error.response.status === 403 && loggedIn){

                showSessionExpired();

            } else if ( error.response.config.url === "/word/merge" ) {

                //Handle this with catch in the actual Axios response

            } else {
                
                showError('Http Error','A server error was encountered.<br><br>Error ' + error.response.status + ': ' + error.response.data.message + '<br><br>Please try again otherwise contact support if the error persists.');
            }
            
            
        } else if (error.request) {
            

            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser
            
            console.log('Axios error.request',error.request);

            showError('Request Error','A request error was encountered. Please try again otherwise contact support if the error persists.');
            
        } else {

            // Something happened in setting up the request that triggered an Error

            console.log('Axios Unknown Error', error.message);

            showError('Unknown Http Error',error.message + '<br>Please try again otherwise contact support if the error persists.');

        }
        
        return Promise.reject(error);

});

$( document ).ajaxError(function( event, jqxhr, settings, thrownError ) {
    console.log('ajaxError',event, jqxhr, settings, thrownError);
});

$.fn.dataTable.ext.errMode = function ( settings, techNote, message ) { 

    axios.get('/checkSession')

    .then(response => {

        if ( !response.data ) {

            location.href = '/';

        } else {

            if ( appEnvironment == 'local') {

                showError( 'Datatables Error', '<h3>The following error was encountered:</h3>' + message, 'modal-lg');

            } else {

                console.error( 'Datatables Error', message);

            }

        }

    });

};


Vue.config.errorHandler = function(err, vm, info) {

    showError( 'Error', err.toString(), 'modal-lg');

    console.error( 'Vue Component Error', err.toString(), info, vm);

    //showError( 'Error', '<p>' + err.toString() + '</p><p>Process: ' + info  + '</p>', 'modal-lg');
    // if ( appEnvironment == 'local') {
        
    //     console.error( 'Vue Component Error', err.toString(), info, vm);
        
    // } else {
        
    //     console.error( 'Vue Component Error', err.toString(), info, vm);
        
    // }
}

Vue.config.warnHandler = function(msg, vm, trace) {
    
    showError( 'Warning', msg, 'modal-lg');

    console.error( 'Vue Component Warning', msg, vm, trace);

    // if ( appEnvironment == 'local') {

    //     console.error( 'Vue Component Warning', msg, vm, trace);

    // } else {

    //     console.error( 'Vue Component Warning', msg, vm, trace);

    // }
}

window.onerror = function(message, source, line, column, error) {

    console.log(message, source, line, column, error);
    root.$snotify.clear();

    // 26 Mar 2021: In case an object is passed - from Datatables, for example
    if ( typeof message !== "string") return;

    if (message.indexOf("Ajax error") > -1) { // Handle Ajax errors

        showError( 'File Error', '<h3>The following error was encountered:</h3><p>' + message + '</p>', 'modal-lg');

    } else if (error && error.name && error.name === 'TemplateError') { // Handle DocxTemplater render() errors

        // The error thrown here contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
        function replaceErrors(key, value) {

            if (value instanceof Error) {
                return Object.getOwnPropertyNames(value).reduce(function( error, key ) {
                    error[key] = value[key];
                    return error;
                },{});
            }
            return value;
        }
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {

            // errorMessages is a humanly readable message looking like this :'The tag beginning with "foobar" is unopened'
            const errorMessages = error.properties.errors.map(function(error) { return error.properties.explanation; }).join("<br>");

            console.log("errorMessages", errorMessages);

            showError( 'Template Error', '<h3>The following errors were encountered:</h3><p>' + errorMessages + '</p>', 'modal-lg');
        } else {
            showError( 'Template Error', '<h3>The following error was encountered:</h3><p>' + errorMessages + '</p>', 'modal-lg');
        }

    } else {
        
        if ( appEnvironment === 'local') {

            showError( 'Javascript Error', '<h3>The following error was encountered:</h3><p>' + message + '</p><p>Source: ' + source  + '</p><p>Line: ' + line  + '</p><p>Column: ' + column  + '</p><p>Error: ' + error  + '</p>', 'modal-lg');
            console.error( 'Javascript Error', message, source, line, column, error);

        } else {

            console.error( 'Javascript Error', message, source, line, column, error);
        }
    }

}

// https://datatables.net/blog/2014-12-18
$.fn.dataTable.moment = function ( format, locale ) {
    var types = $.fn.dataTable.ext.type;

    // Add type detection
    types.detect.unshift( function ( d ) {
        return moment( d, format, locale, true ).isValid() ?
            'moment-'+format :
            null;
    } );

    // Add sorting method - use an integer for the sorting
    types.order[ 'moment-'+format+'-pre' ] = function ( d ) {
        return moment( d, format, locale, true ).unix();
    };
};


function showSessionExpired() {

    $("#messageModal").on('hidden.bs.modal', function(){
        //location.href = "/login";
        location.href = "/";
    });

    
    $('#messageModalTitleText').text('Login required');
    $('#messageModalTitleIcon').removeClass('text-success').addClass('text-warning');
    $('#messageModalTitleIcon').removeClass('fa-check-circle').addClass('fa-warning');
    $('#messageModalBody').html('Your session has expired.<br><br>Please re-login.');
    $('#messageModal').modal('show');


}

function showSuccess( title, description) {
    
    $('#messageModalTitleText').text(title);
    $('#messageModalTitleIcon').removeClass('text-warning').addClass('text-success');
    $('#messageModalTitleIcon').removeClass('fa-warning').addClass('fa-check-circle');
    $('#messageModalBody').html(description);
    $('#messageModal').modal('show');
    setTimeout(function() {
        $('#messageModal').modal('hide');
    }, 1000);

}

function showError( title, description, sizeClass) {

    root.$snotify.clear();

    if (typeof sizeClass !== 'undefined') {
        $('#errorModalDialog').addClass(sizeClass);
    }

    $('#errorModalTitleText').text(title);
    $('#errorModalBody').html(description);
    $('#errorModal').modal('show');
}

function showHelp( title, description, sizeClass) {

    if (typeof sizeClass !== 'undefined') {
        $('#helpModalDialog').addClass(sizeClass);
    }

    $('#helpModalTitleText').text(title);
    $('#helpModalBody').html(description);
    $('#helpModal').modal('show');
}

function showWaiting( title, description, sizeClass) {

    if (typeof sizeClass !== 'undefined') {

        $('#waitingModalDialog').addClass(sizeClass);

    }

    if (typeof description !== 'undefined') {
        
        $('#waitingModalBody').html(description);
        
    } else {

        $('#waitingModalBody').html("Please wait...");
    }

    $('#waitingModalTitleText').text(title);
    $('#waitingModal').modal('show');

}

function closeWaiting() {

    $('#waitingModal').modal('hide');

}

async function convertToPdf( options ) {

    try {

        let response = await axios.post('/file/convertDocxToPdf',options);

        return response.data;

    } catch(error) {

        const errorMessage = error.response.data.message.replace(" (this will throw an Error in a future version of PHP)", ""); 

        return {error: errorMessage};

    };

};

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};


function vhToPx(verticalHeight) {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;

    var result = (y * verticalHeight) / 100;

    return result;
}


//https://stackoverflow.com/questions/3354224/javascript-regex-how-to-get-text-between-curly-brackets
function getFields(str) {
    var results = [], re = /{([^}]+)}/g, text;

    while(text = re.exec(str)) {
        results.push(text[1]);
    }
    return results;
}



// https://www.30secondsofcode.org/js/s/to-kebab-case
// const toKebabCase = str =>
//     str &&  str
//     .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
//     .map(x => x.toLowerCase())
//     .join('-');
function toKebabCase(str) {
    return  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
}

//https://www.geeksforgeeks.org/how-to-convert-string-to-camel-case-in-javascript/
function toCamelCase(str) { 
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) 
    { 
        return index == 0 ? word.toLowerCase() : word.toUpperCase(); 
    }).replace(/\s+/g, ''); 
} 


//https://stackoverflow.com/questions/6134039/format-number-to-always-show-2-decimal-places

function formatDecimal(number) {
    
    return (Math.round(number * 100) / 100).toFixed(2);

}

//https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-currency-string-in-javascript

function formatMoney(amount, currencySymbolFlag = true, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        
        const currencySymbol = currencySymbolFlag ? root.control.currencysymbol + ' ' : '';

        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    
        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
    
        return currencySymbol +  negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");

    } catch (e) {
        console.log(e)
    }
};


function numberWithCommas(x) {

    if (x) {
        if (x == 0) {
            return '0';
        } else {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    } else {
        return '';
    }

}

function stripCommas(x) {

    return parseFloat(x.replace(/,/g, ''));

}

function decimalWithCommas(x) {

    if (x) {
        if (x == 0) {
            return '0.00';
        } else {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    } else {
        return '';
    }

}


//https://stackoverflow.com/questions/3954438/how-to-remove-item-from-array-by-value
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase()
}

function truncateText(data, cutoff, wordbreak = false ) {

    return truncate(data, cutoff, wordbreak, false, false );

}

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}


function truncate(data, cutoff, wordbreak = false, escapeHtml = true, returnHtml = true ) {

    if ( typeof cutoff === "undefined" ) cutoff = Math.round( window.innerWidth / 50 ); // Trying to be responsive so tables fit the width of smaller screens

    //console.log('cutoff',window.innerWidth, cutoff);

    var esc = function (t) {
        return t
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    };

    if (typeof data !== "number" && typeof data !== "string") {
        return data;
    }

    let dataString = data.toString(); // cast numbers

    if (dataString.length <= cutoff) {
        return dataString;
    }

    var shortened = dataString.substr(0, cutoff - 1);

    // Find the last white space character in the string
    if (wordbreak) {
        shortened = shortened.replace(/\s([^\s]*)$/, "");
    }

    //Protect against uncontrolled HTML input
    if (escapeHtml) {
        shortened = esc(shortened);
    }

    if ( returnHtml ) {

        return (
            '<span class="ellipsis" title="' +
            esc(dataString) +
            '">' +
            shortened +
            " &#8230;</span>"
        );

    } else {

        return shortened + '...';

    }

}

//https://davidwalsh.name/query-string-javascript

/* EASY IN LATEST BROWSERS!

EXAMPLES
Assuming "?post=1234&action=edit"

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&action=edit&active=1"
*/

// This is a fallback function
// function getUrlParameter(name) {
//     name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
//     var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
//     var results = regex.exec(location.search);
//     return results === null
//         ? ""
//         : decodeURIComponent(results[1].replace(/\+/g, " "));
// }

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function parseMoney(value, absolute = false) {

    if (!value || typeof value !== 'string') return value;

    if ( absolute ) {
        value = value.replace(/-/g, '');
    }

    return parseFloat(value.replace(/,/g, ''));
}

function convertMoney(value) {

    if (!value || typeof value !== 'string') return value;

    return value.replace(/,/g, '');
}

function htmlBold(value, trueCondition) {

    if (!value) return value;

    if (typeof trueCondition !== 'undefined') {

        return trueCondition ? "<strong>" + value + "</strong>" : value;

    } else {

        return "<strong>" + value + "</strong>";

    }
}

function htmlItalics(value, trueCondition) {

    if (!value) return value;
    
    if (typeof trueCondition !== 'undefined') {
        
        return trueCondition ? "<em>" + value + "</em>" : value;
        
    } else {
        
        return "<em>" + value + "</em>";
        
    }
}

function htmlRedText(value, trueCondition) {
    
    if (!value) return value;

    if (typeof trueCondition !== 'undefined') {

        return trueCondition ? '<span class="text-red">' + value + '</span>' : value;

    } else {

        return '<span class="text-red">' + value + '</span>';

    }
}

function htmlTextColor(value, textColor = '#000000') {
    
    if (!value) return value;

    return '<span style="color: ' + textColor + '">' + value + '</span>';

}

// function htmlColor(value, colorName = 'Black') {
    
//     if (!value) return value;

//     console.log('colorName',colorName);

//     //let thisColor = root.colors.find( color => color.name === 'LightPink');thisColor.hex;

//     let thisColor = root.colors.find( color => color.name === colorName);

//     console.log('thisColor.hex',thisColor.hex);

//     return '<span style="color: ' + thisColor.hex + '">' + value + '</span>';

// }

function htmlAnchor(type = 'anchor', destination, description = '', title = '') {

    if (!destination) return destination;
    if (!description) description = destination;

    if (!title ) {

        if ( type === 'mailto:' ) {

            title = 'Click here to send an email to this address';
            
        } else if ( type === 'tel:' ) {
            
            title = 'Click here to auto dial this number';

        } else if ( type === 'anchor' ) {
            
            title = 'Click here to view this file';

        }

        if ( type === 'mailto:' || type === 'tel:' ) {

            destination = type + destination;
            

        }
    }

    return '<a href="' + destination + '" target="_blank" title="' + title + '">' + description + '</a>';

}


/*
function getParentEmoji( parentType, data ) {

    if (parentType === 'Matter') {

        return '<span onclick="editRecord(\'globalMatterForm\',' + data.matterId + ')" title="View ' + parentType + '" class="cp mr-1 emoji-button">💼</span>';

    } else if (parentType === 'Client') {

        return '<span onclick="editRecord(\'globalPartyForm\',' + data.clientId + ')" title="View ' + parentType + '" class="cp mr-1 emoji-button">🧑</span>';

    } else if (parentType === 'Party') {

        return '<span onclick="editRecord(\'globalPartyForm\',' + data.partyId + ')" title="View ' + parentType + '" class="cp mr-1 emoji-button">🧑</span>';

    } else if (parentType === 'Employee') {

        return '<span onclick="editRecord(\'globalEmployeeForm\',' + data.employeeId + ')" title="View ' + parentType + '" class="cp mr-1 emoji-button">👔</span>';

    } else {
        return '';
    }
}
*/

function htmlDecode(value) {

    if (!value) return value;

    //See: https://stackoverflow.com/questions/1147359/how-to-decode-html-entities-using-jquery
    return $("<div/>").html(value).text();

}


function htmlEncode(value) {
    return !value
        ? value
        : String(value)
            .replace(/&/g, "&amp;")
            .replace(/\"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}

function makeValidPathString(value) {

    return !value ? value : String(value).replace(/[\/.\\]+/ig, "");

}

function stripHtml(value) {

    //https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/

    return !value ? value : String(value).replace(/(<([^>]+)>)/ig, "");

}

function stripSpaces(value) {

    //https://css-tricks.com/snippets/javascript/strip-html-tags-in-javascript/

    return !value ? value : String(value).replace(/\s/g, '');

}

function getFileName(path) {

    //var path = 'https://ettorney.s3.af-south-1.amazonaws.com/acme/1/Matter.pdf'

    return decodeURIComponent( path.substring(path.lastIndexOf('/')+1) );

}

function setSameDivHeight(thisId, otherId, bottomMargin = 0, minHeight = 100) {
    
    let otherContainer = $(otherId);

    let thisDiv = $(thisId);

    if (!otherContainer.length || !thisDiv.length) return;

    let elementHeight = otherContainer.outerHeight() - bottomMargin;

    if (elementHeight < minHeight) elementHeight = minHeight;

    thisDiv.css("height", elementHeight + "px");
}

//https://www.techiedelight.com/determine-string-numeric-javascript/
//const isNumeric = n => !isNaN(n);


function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}


function isset( value) {

    if (isNumeric(value)) {

        return parseInt(value) > 0 ? true : false;

    } else {
        return value ? true : false;
    }

}

function isMultipleSelection(value) { //returns true or false

    let convertToArray = value ? value.split(",") : [];

    let returnBoolean = convertToArray.length > 1 || convertToArray.length == 0 ? true : false;

    return returnBoolean;

}

//https://stackoverflow.com/questions/1275948/how-to-detect-if-a-string-is-encoded-with-escape-or-encodeuricomponent
function isEncoded(str) {
    return typeof str == "string" && decodeURIComponent(str) !== str;
}

//https://davidwalsh.name/javascript-once
// Using this in modal-template.js
function once(fn, context) { 
	var result;

	return function() { 
		if(fn) {
			result = fn.apply(context || this, arguments);
			fn = null;
		}

		return result;
	};
}


function lookupWrapper( parentType, column, value, readOnly = true ) {

    //if (parentType === 'Disbursement') console.log('lookupWrapper ' + parentType + ' - readOnly',readOnly);

    
    if (parentType === 'Matter') {
        
        return '<span onclick="editRecord(\'globalMatterForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';
        
    } else if (parentType === 'Fee Code') {
    
        return '<span onclick="editRecord(\'globalFeeCodeForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';
    
    } else if (parentType === 'Client') {

        return '<span onclick="editRecord(\'globalPartyForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';

    } else if (parentType === 'Party') {

        return '<span onclick="editRecord(\'globalPartyForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';

    } else if (parentType === 'Employee') {

        return '<span onclick="editRecord(\'globalEmployeeForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';

        
    } else if (parentType === 'Fee Note') {
        
        return '<span onclick="editRecord(\'globalFeeNoteForm\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';
        
    } else if (parentType === 'Select Document Template') {

        //return '<span onclick="editRecord(\'select-documents-table\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';
        return '<span onclick="editRecord(\'document-assembly-select-documents\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';

    } else if (parentType === 'Document Template') {

        return '<span onclick="editRecord(\'documents-table\',' + column + ',' + readOnly + ')" title="View ' + parentType + '" class="cp mr-1 lookup-wrapper">' + value + '</span>';

    } else if (parentType === 'Email Party') {

        return '<span onclick="emailParty(\'emailModal\',' + column + ')" title="Send an email to this party" class="cp mr-1 lookup-wrapper">' + value + '</span>';

    } else {

        return value;
    }
}

function insertRecord(ref, id, param2 = null) {

    componentFunction(ref, 'insertClicked', id, param2);

}

function editRecord(ref, id, param2 = null) {

    componentFunction(ref, 'editClicked', id, param2);

}

function selectRecord(ref, id, param2 = null) {

    //console.log('selectRecord clicked for ref',ref);

    componentFunction(ref, 'selectRecord', id, param2);

}

function emailParty(ref, id) {

    componentFunction(ref, 'emailParty', id);

}


function componentFunctionById(_uid, callback, param1 = null, param2 = null, children = root.$children) {

    for (let index = 0; index < children.length; index++) {

        const child = children[index];

        if ( child._uid === _uid) {

            if ( typeof child[callback] === 'function') {
                
                child[callback](param1, param2);

            } else {

                showError('Component Callback Error', callback + '() is not a function in component with a _uid of <em>' + _uid + '</em>');

            }



            break;

        } else {

            if ( child.$children.length ) {

                componentFunctionById( _uid, callback, param1, param2, child.$children);

            }

        }

    }

}

function componentFunction(ref, callback, param1 = null, param2 = null, children = root.$children) {

    //console.log('componentFunction',ref, callback, param1, param2);

    let foundComponent = null;

    for (let index = 0; index < children.length; index++) {

        const child = children[index];

        if ( typeof child.$refs[ref] !== 'undefined') {

            foundComponent = child.$refs[ref];

            // console.log('foundComponent',foundComponent);
            // console.log('ref',ref);
            // console.log('callback',callback);
            // console.log('typeof foundComponent[callback]',typeof foundComponent[callback]);

            if ( typeof foundComponent[callback] === 'function') {

                foundComponent[callback](param1, param2);

            } else {

                showError('Component Callback Error', callback + '() is either not found or is not a function in <em>' + ref + '</em>');

            }

            break;

        } else {

            if ( child.$children.length ) {

                componentFunction( ref, callback, param1, param2, child.$children);

            }

        }

    }

}

// let eventPageId = null;

// document.addEventListener("keyup", handleFormButtonHotKeys);

// function addFormButtonHotKeys(id) {

//     eventPageId = id;
    
//     //document.removeEventListener("keyup", handleFormButtonHotKeys);

//     //document.addEventListener("keyup", handleFormButtonHotKeys, {once: true});

// }

// function handleFormButtonHotKeys(e) {

//     if ( !eventPageId ) return;

//     console.log('handleFormButtons ' + e.key + ' for ' + eventPageId + ' Target = ',e.target);

//     e.preventDefault();

//     if ( e.key == 'Escape' && document.getElementById(eventPageId + '-cancel-button') ) {
        
//         document.getElementById(eventPageId + '-cancel-button').click();
        
//     } else if ( e.key === 'Enter' && document.getElementById(eventPageId + '-ok-button') ) {

//         if ( e.target.type === "textarea" ) {

//             if (e.ctrlKey) document.getElementById(eventPageId + '-ok-button').click();

//         } else {

//             document.getElementById(eventPageId + '-ok-button').click();
//         }

//     }

// }

function getTableFilter(tableId) {

    return JSON.parse(localStorage.getItem(root.companyCode + '-' + tableId + '-filter')) || [];

}

function setTableFilter(tableId, tableFilters) {

    localStorage.setItem(root.companyCode + '-' + tableId + '-filter', JSON.stringify(tableFilters));
}

function removeTableFilter(tableId) {

    localStorage.removeItem(root.companyCode + '-' + tableId + '-filter');
}

function getTableLayout(tableId) {

    return JSON.parse(localStorage.getItem(root.companyCode + '-' + tableId + '-layout')) || [];

}

function setTableLayout(tableId, columns) {

    localStorage.setItem(root.companyCode + '-' + tableId + '-layout', JSON.stringify(columns));
}

function removeTableLayout(tableId) {

    localStorage.removeItem(root.companyCode + '-' + tableId + '-layout');
}


function getFilterDescription(tableFilter) {

    let tableFilterDescription = '';
    let columnName = tableFilter.filterTitle

    if ( tableFilter.description ) {

        tableFilterDescription += tableFilter.description;

    } else if ( tableFilter.filterType === 'String' ) {

        tableFilterDescription += '<em>' + columnName + '</em> ' + tableFilter.method.toLowerCase() + ' <strong>"' + tableFilter.value + '"</strong>';

    } else if ( tableFilter.filterType === 'Boolean' ) {

        tableFilterDescription += '<em>' + columnName + '</em> is <strong>' + (tableFilter.value == 1 ? 'True' : 'False') + '</strong>';

    } else if ( tableFilter.filterType === 'Lookup' || tableFilter.filterType === 'Dropdown' ) {

        tableFilterDescription += '<em>' + columnName + '</em> equals <strong>' + tableFilter.value + '</strong>';

    } else if ( tableFilter.filterType === 'RadioButton' ) {

        tableFilterDescription += '<em>' + columnName + '</em> equals <strong>' + tableFilter.value + '</strong>';

    } else if ( tableFilter.filterType === 'Date' ) {

        if ( tableFilter.period === 'Custom' ) {

            tableFilterDescription += '<em>' + columnName + '</em> between <strong>' + moment(tableFilter.fromDate).format(root.control.dateformat) + '</strong> and <strong>' + moment(tableFilter.toDate).format(root.control.dateformat) + '</strong>';

        } else {

            tableFilterDescription += '<em>' + columnName + '</em> is <strong>' + tableFilter.period.toLowerCase() + '</strong>';

        }

    } else if ( tableFilter.filterType === 'Number' ) {

        if ( tableFilter.method === 'Between' ) {

            tableFilterDescription += '<em>' + columnName + '</em> between <strong>' + tableFilter.fromAmount + '</strong> and <strong>' + tableFilter.toAmount + '</strong>';

        } else {

            tableFilterDescription += '<em>' + columnName + '</em> is ' + tableFilter.method.toLowerCase() + ' <strong>' + tableFilter.fromAmount + '</strong>';

        }

    } else {

        tableFilterDescription = 'Unknown tableFilter.filterType (' + tableFilter.filterType + ')';
        console.error('Unknown tableFilter.filterType found in getFilterDescription()', tableFilter.filterType);
    }

    return tableFilterDescription;

}


function setDebtorsAccountRowColor(row, data) {

    if ( data.description.charAt(0) == '#' || data.description.charAt(0) == '*' ) $(row).css("font-style", "italic");

    let lightRed = '#FDD';
    let darkRed = '#FAA';
    //let orange = '#FED';
    let green = '#DFD';
    let gray = '#DDD';
    let blue = '#DEF';
    let lightPurple = '#FDE';
    let purple = '#DDF';

    if ( data.category == 'J' ) { // Journal

        $(row).css({"background-color": purple}).addClass("custom-colors");

    } else if ( data.type == 'J' || data.type == 'I' || data.type == 'Y' ) { //Interest

        $(row).css({"background-color": green}).addClass("custom-colors");

    } else if ( data.type == 'P' ) { // Payment

        $(row).css({"background-color": darkRed}).addClass("custom-colors");

    } else if ( data.type == 'V' ) { // Employers Commission

        $(row).css({"background-color": lightPurple}).addClass("custom-colors");

    } else if ( data.type == 'X' || data.type == 'W' ) {  // Collection Commission

        $(row).css({"background-color": lightRed}).addClass("custom-colors");

    } else if ( data.type == 'A' ) { // Opening Balance

        $(row).css({"background-color": gray}).addClass("custom-colors");

    } else { // Costs

        $(row).css({"background-color": blue}).addClass("custom-colors");

    }

    // if ( data.category == 'J' ) {
    //     $(row).css({"color": "white","background-color": "teal"}).addClass("custom-colors");
    // } else if ( data.type == 'P' || data.type == 'V' ) {
    //     $(row).css({"color": "white","background-color": "brown"}).addClass("custom-colors");
    // } else if ( data.type == 'J' || data.type == 'I' || data.type == 'Y' ) {
    //     $(row).css({"color": "white","background-color": "mediumseagreen"}).addClass("custom-colors");
    // } else if ( data.type == 'X' ) {
    //     $(row).css({"color": "white","background-color": "indianred"}).addClass("custom-colors");
    // } else if ( data.type == 'A' ) {
    //     $(row).css({"color": "white","background-color": "darkgray"}).addClass("custom-colors");
    // } else {
    //     $(row).css({"color": "white","background-color": "lightslategrey"}).addClass("custom-colors");
    // }

}

function viewDebtorsAccount(matterId) {

    root.$snotify.simple('Please wait...', 'Generating Debtors Account', { timeout: 0, icon: 'img/cogs.gif' });

    axios.post('/lolsystemtemplate/get/' + root.lolSettings.debtorsaccounttemplateid)

    .then(templateResponse => {

        if ( templateResponse.data.errors ) {

            showError('Error',templateResponse.data.errors);

        } else {

            const templateData = root.initTemplateData();

            templateData.report = {
                title: 'Debtors Account',
                date: moment().format(root.control.dateformat + ' HH:mm:ss'),
            };

            templateData.report.columns = [];

            let columnDefs = root.debtorsAccountTableColumns();
            
            for (let index = 0; index < columnDefs.length; index++) {

                if ( columnDefs[index].printable !== false && columnDefs[index].visible !== false )  {
                    
                    templateData.report.columns.push(columnDefs[index]);
                }
                    
            };

            axios.post('/coldebits/get',  {matterId: matterId})
            .then(response => {

                templateData.report.rows = response.data.data;

                axios.post('/matter/getTemplateData/' + matterId)
                .then(matterResponse => {

                    templateData.matter = matterResponse.data.matter;

                    templateData.report.subtitle = templateData.matter.fileref + ' - ' + templateData.matter.description;

                    root.vueRender( templateResponse.data.data[0].contents, templateData )
    
                    .then( (contents) => { 
        
                        root.$snotify.clear();
        
                        root.previewReport.title = 'Debtors Account (' + templateData.report.subtitle + ')';
                        root.previewReport.htmlBody = contents;
        
                        root.previewReport.load( templateResponse.data.data[0] );
        
                    }).catch( (error) => {
                        showError('Error Rendering Html', error);
                    });
    


                })
                .catch( (error) => {
                    showError('Error', error); 
                });



            })
            .catch( (error) => {
                showError('Error', error); 
            });



            

        }

    }).catch(error => { 

        showError('Error',error);

    });



}


async function primeGenerateDocumentPreviewer( callingComponent, selectedTemplates) {

    let firstTemplate = null;

    root.$snotify.simple('Please wait...', 'Generating Preview', { timeout: 0, icon: 'img/cogs.gif' });

    // Reset the data
    root.previewDocuments.initialize( callingComponent );

    root.previewDocuments.multipleTemplatesFlag = ( selectedTemplates.length > 1 ) ? true : false;

    await root.asyncForEach(selectedTemplates, async (templateId) => {

        let response = await axios.post('/lolsystemtemplate/get/' + templateId);

        if ( response.data.errors ) {

            showError('Error',response.data.errors);

        } else {

            root.previewDocuments.multipleTemplates.push({
                value: response.data.data[0].recordid,
                label: response.data.data[0].title,
            });

            if ( !firstTemplate ) firstTemplate = response.data.data[0];

            if ( !root.previewDocuments.selectedTemplate ) {

                root.previewDocuments.selectedTemplate = response.data.data[0].recordid;

            }
        }

    });

    loadGenerateDocumentPreviewer( callingComponent, firstTemplate );

}


function loadGenerateDocumentPreviewer( callingComponent, firstTemplate ) {

    let params = {};

    if ( callingComponent.generateDocumentsSource == 'Party') {

        params = { 
            whereIn: 'party.recordid,' + callingComponent.selectedRows.join(),
            select: ['Party.RecordId as recordid', 'Party.MatterPrefix as code', 'Party.Name as description'],
            orderBy: 'Party.MatterPrefix'
        } 

    } else if ( callingComponent.generateDocumentsSource == 'Matter') {

        params = { 
            whereIn: 'matter.recordid,' + callingComponent.selectedRows.join(),
            select: ['Matter.RecordId as recordid', 'Matter.FileRef as code', 'Matter.Description as description'],
            orderBy: 'Matter.FileRef'
        }

    } else if ( callingComponent.generateDocumentsSource == 'MatParty') {

        params = { 
            whereIn: 'matparty.recordid,' + callingComponent.selectedRows.join(),
            select: ['MatParty.RecordId as recordid', 'Party.MatterPrefix as code', 'Party.Name as description'],
            orderBy: 'Party.MatterPrefix'
        }
    }

    axios.post('/' +  callingComponent.generateDocumentsSource.toLowerCase() + '/get', params)

    .then(async response => {

        if (response.data.errors) { 

            showError('Error getting Records', response.data.errors); 

        } else {

            await root.asyncForEach(response.data.data, async (record) => {                

                root.previewDocuments.multipleRecords.push({
                    value: record.recordid,
                    label: record.code + ' (' + record.description + ')',
                });

                if ( !root.previewDocuments.selectedRecord ) {

                    root.previewDocuments.selectedRecord = record.recordid;

                }

            });


            let firstRecord = response.data.data[0];

            if ( callingComponent.selectedRows.length > 1 ) {

                root.previewDocuments.multipleRecordsFlag = true;
                root.previewDocuments.multipleRecordsLabel = callingComponent.generateDocumentsSource;

            }

            root.previewDocuments.title = root.previewDocuments.multipleRecordsFlag ? 'Preview Documents' : 'Preview Document';

            let roleId = null;
            let sorter = null;

            if ( firstTemplate.roleid ) {
                roleId = firstTemplate.roleid;
                sorter = 1;
            }

            root.createRecordTemplateData(callingComponent.generateDocumentsSource,firstTemplate, firstRecord.recordid, roleId, sorter)

            .then( (templateData) => {

                root.previewDocuments.templateData = templateData;

                // Check if a MatParty was found for this RoleId
                if ( roleId && $.isEmptyObject(templateData.matParty)) {

                    root.previewDocuments.templateContents = '<h3 class="mt-5 text-center">This Matter does not have a ' + root.partyRoles.filter(role => role.recordid == roleId)[0].description + '.</h3>';
                    root.previewDocuments.templateContents += '<h3 class="mt-2 text-center">A ' + firstTemplate.title + ' will not be generated for this Matter.</h3>';

                } else {

                    root.previewDocuments.templateContents = firstTemplate.contents;

                }

                root.$snotify.clear();

                root.previewDocuments.show();

                root.previewDocuments.generateFirstDocumentContents();

            }).catch( (error) => {

                showError('Error',error);

            });

        }

    }).catch(error => {
        showError('Error', error); 
    });

}

function emailThisMatParty(id, notifyFlag = false) {

    if (notifyFlag) root.$snotify.simple('Please wait...', 'Preparing email', { timeout: 0, icon: 'img/cogs.gif' });

    axios.post('/matparty/get/' + id)

    .then(matPartyResponse => {

        axios.post('/party/get/' + matPartyResponse.data.data[0].partyid)

        .then(partyResponse => {
    
            let party = partyResponse.data.data[0];
    
            if ( !party.emailaddress ) {
    
                showError('No Email Address', 'Please add the Party\'s email address in the <strong>Contact Details</strong> tab.');
    
            } else {

                root.emailModal.initialize();
                root.emailModal.defaultAttachmentFlag = false;

                root.emailModal.title = 'Email ' + party.name;
                root.emailModal.toAddress = party.emailaddress;

                axios.post('/lolsystemtemplate/get/' + root.lolSettings.matpartiesemailtemplateid)

                .then(response => {

                    if ( response.data.errors ) {

                        showError('Error',response.data.errors);

                    } else {

                        root.emailModal.templateRecord = response.data.data[0];

                        root.emailModal.templateContents = root.emailModal.templateRecord.contents;

                        //root.emailModal.subject = root.emailModal.templateRecord.subject;

                        root.createRecordTemplateData('matparty',root.emailModal.templateRecord, id)

                        .then( (templateData) => {

                            root.emailModal.templateData = templateData;

                            if (notifyFlag) root.$snotify.clear();

                            root.emailModal.show();

                            root.emailModal.generateEmailBody();

                            setTimeout(() => {

                                $('#' + root.emailModal.id + ' input[name="subject"]').focus();

                            });

                        }).catch( (error) => {

                            showError('Error',error);

                        });


                    }

                }).catch( (error) => {

                    showError('Error',error);

                });

            }
            
        }).catch( (error) => {

            showError('Error',error);
    
        });
    

    }).catch( (error) => {

        showError('Error',error);

    });

}

function emailThisParty(id, notifyFlag = false) {

    if (notifyFlag) root.$snotify.simple('Please wait...', 'Preparing email', { timeout: 0, icon: 'img/cogs.gif' });

    axios.post('/party/get/' + id)

    .then(partyResponse => {

        let party = partyResponse.data.data[0];

        if ( !party.emailaddress ) {

            showError('No Email Address', 'Please add this Party\'s email address in the <strong>Contact Details</strong> tab.');

        } else {

            root.emailModal.initialize();
            root.emailModal.defaultAttachmentFlag = false;

            root.emailModal.title = 'Email ' + party.name;
            root.emailModal.toAddress = party.emailaddress;

            axios.post('/lolsystemtemplate/get/' + root.lolSettings.partiesemailtemplateid)

            .then(response => {

                if ( response.data.errors ) {

                    showError('Error',response.data.errors);

                } else {

                    root.emailModal.templateRecord = response.data.data[0];

                    root.emailModal.templateContents = root.emailModal.templateRecord.contents;

                    root.createRecordTemplateData('party',root.emailModal.templateRecord, party.recordid)

                    .then( (templateData) => {

                        root.emailModal.templateData = templateData;

                        if (notifyFlag) root.$snotify.clear();

                        root.emailModal.show();

                        root.emailModal.generateEmailBody();

                        setTimeout(() => {

                            $('#' + root.emailModal.id + ' input[name="subject"]').focus();

                        });

                    }).catch( (error) => {

                        showError('Error',error);

                    });


                }

            }).catch( (error) => {

                showError('Error',error);

            });

        }


    }).catch( (error) => {

        showError('Error',error);

    });

}

function resetTagged( callingComponent ) {

    // Clears the tags without reloading the table
    // Need this is some components (e.g. FeeCodeTable.vuew)
    clearTagged( callingComponent, false );

}

function clearTagged( callingComponent, reload = true ) {

    //console.log("clearTagged called - root.testComponent",callingComponent);
    //root.testComponent = callingComponent;

    if ( callingComponent.selectedRows.length ) {
        
        if ( callingComponent.table.table ) {
            callingComponent.table.displayingTaggedRecordsFlag = false;
            callingComponent.table.table.rows().deselect();
            if ( reload ) {
                callingComponent.table.whereRaw = null;
                callingComponent.table.table.ajax.reload();
            }
        }

        //https://www.tutorialspoint.com/in-javascript-how-to-empty-an-array

        callingComponent.selectedRows.splice(0, callingComponent.selectedRows.length);

        callingComponent.selectedAllFlag = false;

        if ( callingComponent.table.saveTagsFlag ) {

            // Clear the tags in the database
            axios.post( '/utils/clearTagged', {
                tableName: callingComponent.table.tableName,
                employeeId: root.loggedInEmployeeId
            })
                
            .then(response => {

                if (response.data.errors) {
                    showError('Error', response.data.errors); 
                }
                
            }).catch( (error) => {
                showError('Error clearing Tags', error); 
            });
        }
    }
}

function printHtml( body ) {

    try {
        
        let html = `
        <!DOCTYPE html>
        <html lang="en" class="no-js">
            <head>
                <meta charset="utf-8">
                <link href="https://d22oktazhmwkct.cloudfront.net/program.css" rel="stylesheet">
            </head>
            <body onload="window.print()">
                ${body}
            </body>
        </html>`;

        const newWin = window.frames["global-print-table"];
        newWin.document.write(html);
        newWin.document.close();

    } catch (error) {
        showError('Error printing Html', error);
    }

}





function generatePdfDocument( options ) {

    return new Promise( (resolve, reject) => {

        let bodyHtml, headerHtml, footerHtml;

        root.registerUserComponents( options.templateData, options.registerUserComponents)

        .then( async () => {

            if (options.templateRecord.header) {
                await root.vueRender( options.templateRecord.header, options.templateData, false )
                .then( (html) => { 
                    headerHtml = html; 
                }).catch( (error) => {
                    reject(error);
                });
            }

            if (options.templateRecord.contents) {
                await root.vueRender( options.templateRecord.contents, options.templateData, false )
                .then( (html) => { 
                    bodyHtml = html; 
                }).catch( (error) => {
                    reject(error);
                });
            }

            if (options.templateRecord.footer) {
                await root.vueRender( options.templateRecord.footer, options.templateData, false )
                .then( (html) => { 
                    footerHtml = html; 
                }).catch( (error) => {
                    reject(error);
                });
            }

            const params = { 
                ...options.templateRecord,  
                headerHtml: headerHtml,
                bodyHtml: bodyHtml,
                footerHtml: footerHtml,
                folder: options.folder,
                fileName: options.fileName,
                password: options.password ? templateRecord.password : null,
                allow: options.password ? this.getPdfPermissions(templateRecord) : null,
            };
    
            axios.post('/pdf/htmlToPdf', params)
    
            .then(response => {
    
                if ( response.data.error ) {
    
                    reject('Error creating PDF: ' + response.data.error);
    
                } else {
    
                    resolve({
                        url: response.data.url, 
                        path: response.data.path,
                    });
                }

            }).catch(error => { 
                reject('Error creating PDF: ' + error);
            });                                            

        }).catch(error => { 

            reject('Error registering Components: ' + error);

        });                                            

    });

}

function getPdfPermissions(templateRecord) {

    let permissions = [];

    if ( templateRecord.allowprint ) permissions.push('Printing');
    if ( templateRecord.allowedit ) permissions.push('ModifyContents');
    if ( templateRecord.allowcopy ) permissions.push('CopyContents');

    return permissions.join(' '); // Return a spaced string of permissions

}


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


//GPV('Defendant.1.parlang.firstname')
GetPartyVariable = GPV = function( value ) {

    return ('GetPartyVariable To Do: ' + replaceClarionEvaluates(value));
}

//GWD(GetStageDate('0000'),MAT:DateInstructed)
GetWorkingDays = GWD = function( value ) {

    return ('GetWorkingDays To Do: ' + replaceClarionEvaluates(value));

} 

GetStageDate = GSD = function( value ) {

    return ('GetStageDate To Do: ' + replaceClarionEvaluates(value));

} 
//(GDF('File References',8))
GetDocumentField = GDF = function( value ) {

    return ('GetDocumentField To Do: ' + replaceClarionEvaluates(value));

} 

function FindDate(TheDate, DaysTime, WorkingDaysFlag = 0, SpecificDayMask = null, ExcludeCourtHolidaysFlag = false, ExcludeCourtRecessFlag = false, AllowWeekendsAndHolidays = false ) {

    // For testing in console.log
    //let initialDate = moment.unix((root.global.todaysdate - 61730) * 86400)

    if (!TheDate) TheDate = root.global.todaysdate;

    if (DaysTime > 1000) return TheDate;

    let initialDate = convertFromClarionDate(TheDate, false);

    if (DaysTime == 0) {
        
        //THE USER WANTS TO FIND THE NEXT THURSDAY, FOR EXAMPLE.
        if (SpecificDayMask) {

            let returnDate = GetNextSpecificDate( initialDate, SpecificDayMask);

            return convertToClarionDate(returnDate);

        } else {

            return convertToClarionDate(initialDate);
        }
    }

    let returnDate = initialDate;

    let DayCounter = 0;
    let order = 'forward';

    if (DaysTime < 0) order = 'backwards';

    if (WorkingDaysFlag) {

        while (order == 'forward' ? DayCounter < DaysTime : DayCounter > DaysTime) {

            if (order == 'forward') {
                returnDate.add(1,'days');
            } else {
                returnDate.subtract(1,'days');
            }


            if (ExcludeCourtHolidaysFlag == 1) {
                
                if (order == 'forward') {
                    
                    if (returnDate.month() == 12 && returnDate.day() >= 16) {
                        returnDate = moment([returnDate.year() + 1, 1, 16]);
                    } else if (returnDate.month() == 1 && returnDate.day() <= 15) {
                        returnDate = moment([returnDate.year(), 1, 16]);
                    }
                    
                } else {
                    
                    if (returnDate.month() == 1 && returnDate.day() <= 15) {
                        returnDate = moment([returnDate.year() - 1, 12, 15]);
                    } else if (returnDate.month() == 12 && returnDate.day() >= 16) {
                        returnDate = moment([returnDate.year(), 12, 15]);
                    }
                }
                
            } else if (ExcludeCourtHolidaysFlag == 2) {
                
                if (order == 'forward') {
                    
                    if (returnDate.month() == 12 && returnDate.day() >= 21) {
                        returnDate = moment([returnDate.year() + 1, 1, 8]);
                    } else if (returnDate.month() == 1 && returnDate.day() <= 7) {
                        returnDate = moment([returnDate.year(), 1, 8]);
                    }
                    
                } else {

                    if (returnDate.month() == 1 && returnDate.day() <= 7) {
                        returnDate = moment([returnDate.year() - 1, 12, 20]);
                    } else if (returnDate.month() == 12 && returnDate.day() >= 21) {
                        returnDate = moment([returnDate.year(), 12, 20]);
                    }
                }
                
            }
            
            if (!AllowWeekendsAndHolidays) {

                if ( isWorkingDay(returnDate) ) {
                    
                    if (order == 'forward') {
                        DayCounter += 1;
                    } else {
                        DayCounter -= 1;
                    }

                }

            } else {

                if (order == 'forward') {
                    DayCounter += 1;
                } else {
                    DayCounter -= 1;
                }

            }

        }

    } else {

        console.log("3 WorkingDaysFlag",WorkingDaysFlag);

        if (order == 'forward') {
            returnDate.add(DaysTime,'days');
        } else {
            returnDate.subtract(DaysTime,'days');
        }
        
        if (!AllowWeekendsAndHolidays) {

            while (!isWorkingDay(returnDate)) {

                if (order == 'forward') {
                    returnDate.add(1,'days');
                } else {
                    returnDate.subtract(1,'days');
                }

            }
        }

    }
    
    if (SpecificDayMask) {
        
        returnDate = GetNextSpecificDate( returnDate, SpecificDayMask, order);
        
        return convertToClarionDate(returnDate);
        
    } else {
        
        return convertToClarionDate(returnDate);
    }

    
}

function GetNextSpecificDate( date, specificDayMask, order = 'forward') {

    let foundDate = false;

    while (!foundDate) {

        if  ( date.day() == specificDayMask) {

            // Do not return the day if it is a holiday
            if ( isHoliday( date ) ) {

                if ( order == 'forward') {
                    date.add(6,'days'); // Try next week
                } else {
                    date.subtract(6,'days'); // Try previous week
                }

            } else { 

                foundDate = true;
            }

        } else { 

            if ( order == 'forward') {
                date.add(1,'days');
            } else {
                date.subtract(1,'days');
            }
        }
    }

    return date;

}

function isHoliday(date) {

    return root.holidays.filter(holiday => holiday.date == convertToClarionDate(date)).length;

}

function isWorkingDay(date) {

    let returnValue = true;

    let holidayFlag = root.holidays.filter(holiday => holiday.date == convertToClarionDate(date)).length;

    let weekendFlag = (date.day() == 6 || date.day() == 0);

    if ( holidayFlag || weekendFlag) returnValue = false;

    return returnValue;

}

function CHOOSE(condition, returnTrue, returnFalse ) {

    try {

        let result = eval(condition);

        return result ? returnTrue : returnFalse;

    } catch( error ) {
        return error;
    }

}

function convertToClarionDate( date, format = 'DD MMM YYYY') {
    
    //For consistent results parsing anything other than ISO 8601 strings, you should use String + Format.
    //https://stackoverflow.com/questions/39969570/deprecation-warning-in-moment-js-not-in-a-recognized-iso-format

    return Math.ceil((moment(date, format).unix()/86400)) + 61730;
    
}

function nowToClarionTime() {
    //https://www.nettalkcentral.com/forum/index.php?topic=8225.0
    let time = Date.now()/10;
    let d = new Date();
    time -= d.getTimezoneOffset()*6000
    return (parseInt(1+(time % 8640000)))
}

function convertFromClarionDate( date, formatFlag = true,  format = '') {

    let unixDate = (date - 61730) * 86400; //24 * 60 * 60

    if ( date > 0 ) {
        return formatFlag ? moment.unix(unixDate).format(format ? format : root.control.dateformat) : moment.unix(unixDate);
    } else {
        return '';
    }
}

// function formatDate( date, formatFlag = true,  format = '') {

//     return convertFromClarionDate( date, formatFlag, format);
// }

function convertFromClarionTime( time ) {

    //A Clarion standard time is the number of hundredths of a second that have elapsed since midnight, plus one (1)
    // Test in console.log
    // let time = 1317700;
    // moment([2010, 1, 1, 0, 0, 0, 0]).add(time/100,'seconds').format('hh:mm:ss');

    if ( time > 100 ) {
        return moment([2020, 1, 1, 0, 0, 0, 0]).add(time/100,'seconds').format('hh:mm:ss');
    } else {
        return '';
    }

}

// function formatTime( time ) {

//     return convertFromClarionTime( time);
// }


function getFicaExpiryDate(documentDate, monthsToExpiry, format = true ) {

    let ficaDate = parseInt(documentDate) - 1;  //! EXPIRES THE DAY BEFORE

    // Convert Clarion date to Unix timestamp
    let unixDate = (ficaDate - 61730) * 86400; //24 * 60 * 60

    if ( format ) {
        return moment.unix(unixDate).add(monthsToExpiry, 'months').format(root.control.dateformat);
    } else {
        return moment.unix(unixDate).add(monthsToExpiry, 'months');
    }

}


function stripCharacters( sentString ) {


    /*StripFileRefCharacters PROCEDURE  (TheSentString)     ! Declare Procedure
    LOC:SentString       CSTRING(1000)
    LOC:ReturnString     CSTRING(20)
    LOC:ValidCharacters  STRING(41)
    
      CODE
     LOC:SentString = TheSentString
     LOOP X# = 1 TO LEN(LOC:SentString)
          IF INSTRING(UPPER(CLIP(LOC:SentString[X#])),'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@&:-',1)
             LOC:ReturnString = LOC:ReturnString & LOC:SentString[X#]
          END
     END
     
     RETURN(LOC:ReturnString)*/
     
    //https://stackoverflow.com/questions/4374822/remove-all-special-characters-with-regexp
    return sentString.replace(/[^\w\s]/gi, '');

}

function replaceClarionPrefixes(evaluateString) {

    evaluateString = replaceClarionMatterPrefixes(evaluateString);
    evaluateString = replaceClarionPartyPrefixes(evaluateString);
    return evaluateString;
}

function replaceClarionMatterPrefixes(evaluateString) {


    evaluateString = evaluateString.replace(/mat\:/gi, "matter.");
    evaluateString = evaluateString.replace(/dg\:/gi, "docgen.");
    evaluateString = evaluateString.replace(/mt\:/gi, "mattype.");
    evaluateString = evaluateString.replace(/bon\:/gi, "bonddata.");
    evaluateString = evaluateString.replace(/conv\:/gi, "conveydata.");
    evaluateString = evaluateString.replace(/col\:/gi, "coldata.");

    return evaluateString;

}

function replaceClarionPartyPrefixes(evaluateString) {

    evaluateString = evaluateString.replace(/par\:/gi, "party.");
    evaluateString = evaluateString.replace(/pl\:/gi, "parlang.");
    evaluateString = evaluateString.replace(/mp\:/gi, "matparty.");

    return evaluateString;

}

function replaceClarionEvaluates(evaluateString) {

    evaluateString = evaluateString.replace(/&/g, "+");
    evaluateString = evaluateString.replace(/=/g, "==");
    evaluateString = evaluateString.replace(/<>/g, "!=");
    evaluateString = evaluateString.replace(/\bor\b/gi, "||");
    evaluateString = evaluateString.replace(/\band\b/gi, "&&");

    // Replace global prefixes
    evaluateString = evaluateString.replace(/ctl\:/gi, "root.control.");
    evaluateString = evaluateString.replace(/glo\:/gi, "root.global.");
    evaluateString = evaluateString.replace(/cem\:/gi, "root.currentEmployee.");

    // Change global names to lowercase
    evaluateString = evaluateString.replace(/root.control\.[a-zA-Z0-9]\w+/g, function(v) { return v.toLowerCase(); });
    evaluateString = evaluateString.replace(/root.global\.[a-zA-Z0-9]\w+/g, function(v) { return v.toLowerCase(); });
    evaluateString = evaluateString.replace(/root.currentEmployee\.[a-zA-Z0-9]\w+/g, function(v) { return v.toLowerCase(); });
        

    // Replace [[IF()]] . . . [[ENDIF]]
    evaluateString = evaluateString.replace(/\]\](.*?)\[\[/g, " { '$1' }");
    evaluateString = evaluateString.replace(/ELSE/g, " else ");
    evaluateString = evaluateString.replace(/ELSIF/g, " else if ");
    evaluateString = evaluateString.replace(/\[\[IF\(/g, "if (");
    evaluateString = evaluateString.replace(/ENDIF\]\]/g, "");

    return evaluateString;
}

/*
Examples (taken form FieldCalculation in DocScrnField)
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
CHOOSE(MAT:DocumentLanguageID = 1,'Clerk of the Court','HofKlerk')
[[IF(MDS:Field1<1000)]]0[[ELSIF(MDS:Field1>= 1000 AND MDS:Field1<20000)]]5000[[ELSIF(MDS:Field1>= 20000 AND MDS:Field1<50000)]]7500[[ELSIF(MDS:Field1>= 50000 AND MDS:Field1<75000)]]10000[[ELSIF(MDS:Field1>= 7500 AND MDS:Field1<100000)]]12500[[ELSIF(MDS:Fie
(MAT:PrescriptionDate - GLO:TodaysDate)
MAT:Actual-(MAT:Actual*MDS:Field4/100)
(COL:EMOSubTotal) - (COL:EMOInterest) - (COL:JudgmentDebt+COL:JudgmentCosts)
CHOOSE(MDS:Field2='0.5%',(MDS:Field1/0.9943),CHOOSE(MDS:Field2='2.5%',(MDS:Field1/0.9715),CHOOSE(MDS:Field2='5.0%',(MDS:Field1/0.943))))

FindDate(GLO:TodaysDate,1,0,0,0,0,1)
FindDate(GetStageDate('SUM1'),10,1,0)
FindDate(MAT:DateInstructed,30,1,0)
FindDate(GLO:TodaysDate,1,1,0)
FindDate(GLO:TodaysDate,3,0,0)
FindDate(GLO:TodaysDate,3,1,0)
FindDate(GLO:TodaysDate,100,0,0)

FindDates(DATE(8,10,2011),5,1,26)
FindDate(GDF('Michele',5),60,1,0)
FindDateByMonth(MDS:Field1,1,1)



GetWorkingDays(MAT:DateInstructed,(GetStageDate('0000')))
GetWorkingDays(MAT:DateInstructed, GLO:TodaysDate)
GWD(GetStageDate('0000'),MAT:DateInstructed)


GetStageDate('SUM2')
GetStageDate('TES1')+13
GetLastStageCode()
GetLastStageDate()
GetLastStageDescription()

GPV('Applicant (Admin),1,PAR:MaritalStatus') <> 'UNM'
(GDF('Test123',1)-GDF('Test123',2))
(GDF('Insurance',3)) * 10/100
GPRPF(380,180,1,1)

CHOOSE((GetLastStageCode('0000')),A,CHOOSE(GetLastStageCode('0010')),B,CHOOSE(GetLastStageCode('0012')),C,CHOOSE((GetLastStageCode('0016')),D)


*/