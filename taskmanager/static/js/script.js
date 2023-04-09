document.addEventListener('DOMContentLoaded', function() {
    var sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mm, yyyy",
        i18n: {done:"Select"},  
    });

    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
    
  });
