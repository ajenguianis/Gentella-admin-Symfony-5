$(function () {
    $('.data-table').dataTable({
        "processing": true,
        "serverSide": true,
        "ajax": App.getPageConfig('index_users'),
        "language": {
            "url":"//cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        },
        "sAjaxDataProp": "data",
        "deferRender": true,
        "pageLength": 10,
        "columns":[
            {"data": "select_all"},
            {"data": "id"},
            {"data": "username"},
            {"data": "email"},
            {"data": "nomComplet"},
            {"data": "status"},
            {"data": "actions"}
        ],
    });
});