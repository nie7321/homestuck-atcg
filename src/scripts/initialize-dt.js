import { DataTable, addColumnFilter } from "simple-datatables";

document.addEventListener('DOMContentLoaded', function(event) {
    const dt = new DataTable('#cards', {
        paging: false,
    });

    addColumnFilter(dt);

    document.querySelector('.datatable-search .datatable-input').setAttribute('aria-label', 'Search');
    document.querySelector('nav.datatable-pagination').setAttribute('aria-label', 'Card Page');
});