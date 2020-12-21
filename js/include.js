
var currentVersion = '1.4.2';
// var isLocalEnv = location.protocol.indexOf('http') === -1 || location.host.indexOf('127.0.0.1') > -1;

document.addEventListener('click', function(e){
    var key = e.which || e.keyCode;

    if( key === 1 ){
        var elem = e.target,
            cardHeaderSelector = '.panel-collapsible .card-header',
            dropDownSelector = '[data-toggle="dropdown"]',
            checkElement = function( cssSelector ){
                return (elem.matches(cssSelector) ? elem : (elem.closest(cssSelector) || null));
            };

        // CLOSE ALL OPEN DROPDOWNS
        if(
            !checkElement(dropDownSelector) ||
            elem.matches(dropDownSelector+'[aria-expanded="false"]') ||
            elem.matches(dropDownSelector+':not([aria-expanded])')
        ){
            var dropdownsOpen = document.querySelectorAll(dropDownSelector);
            if( dropdownsOpen.length > 0 ){
                Array.from(dropdownsOpen).forEach(function(dropdownEl){
                    dropdownEl.setAttribute('aria-expanded', false);
                    dropdownEl.nextElementSibling.classList.remove('show');
                });
            }
        }
        
        if( checkElement(cardHeaderSelector) ){
            
            // OPEN PANEL
            e.preventDefault();

            var cardHeader = checkElement(cardHeaderSelector),
                panelEl = elem.closest('.panel').querySelector('.card-body'),
                panelDisplay = panelEl.style.display;
            
            cardHeader.classList.toggle('active');
            panelEl.style.display = (panelDisplay === '' || panelDisplay === 'none' ? 'block' : 'none');

        } else if( checkElement(dropDownSelector) ){

            // OPEN DROPDOWN
            e.preventDefault();

            var dropDown = checkElement(dropDownSelector),
                dropDownList = dropDown.nextElementSibling,
                dropDownAriaExpanded = dropDown.getAttribute('aria-expanded'),
                ariaExpValue = ( !dropDownAriaExpanded || dropDownAriaExpanded === 'false' ? 'true' : 'false' );

            dropDown.setAttribute('aria-expanded', ariaExpValue);
            dropDownList.classList.toggle('show');

        }
    }
}, false);

document.addEventListener('DOMContentLoaded', function(){
    var version = currentVersion;
    Array.from( document.querySelectorAll('[data-print-current-version]') ).forEach(function( elem ){
        elem.innerHTML = version;
    });

    var $form = document.querySelector('form[name="filterHelpersForm"]');
    if( $form ){
        var $filterField = $form.querySelector('[name="filterHelpers"]');
        var rowsCount = document.getElementById('helpers').querySelectorAll('.row-list-separator').length;

        $filterField.placeholder = $filterField.placeholder + ' (' + rowsCount + ')';

        var filterHelpers = function ( value ) {
            value = value.toLowerCase();
            var $rows = Array.from(document.getElementById('helpers').querySelectorAll('.row-list-separator'));
            var $searchCount = document.querySelector('[data-search-count]');

            $searchCount.innerHTML = '';

            if( value.trim().length > 0 ){
                // HIDE ALL
                $rows.forEach(function($elem){
                    $elem.classList.add('d-none');
                    $elem.classList.remove('d-flex');
                });

                // FILTER
                var $filteredRows = $rows.filter(function($row){
                    var fnName = $row.querySelector('[data-fn-name]').textContent.split('(')[0].toLowerCase();
                    return fnName.indexOf(value) >= 0;
                });

                $searchCount.innerHTML = $filteredRows.length;

                $filteredRows.forEach(function($row){
                    $row.classList.remove('d-none');
                    $row.classList.add('d-flex');
                });
            } else {
                // SHOW ALL
                $rows.forEach(function($elem){
                    $elem.classList.remove('d-none');
                    $elem.classList.add('d-flex');
                });
            }
        }

        $form.addEventListener('submit', function(event){
            event.preventDefault();
            filterHelpers( $filterField.value );
        });

        $filterField.addEventListener('input', function(){
            filterHelpers( $filterField.value );
        });

        if( $filterField.value.trim().length > 0 ){
            filterHelpers( $filterField.value );
        }
    }
});
