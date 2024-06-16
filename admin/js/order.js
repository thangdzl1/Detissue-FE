$(document).ready(function () {
    var dataTable = $('#dataTable').DataTable({
        paging: false,  // Disable paging
        searching: false,  // Disable searching
        info: false  // Disable info text
    });

    // Function to attach detail event
    function attachDetailEvent() {
        $('.btn-detail').off('click').on('click', function () {
            var row = dataTable.row($(this).closest('tr'));
            var rowData = row.data();

            // Populate detail modal with row data
            $('#detailID').val(rowData[0]);
            $('#detailUsername').val(rowData[1]);
            $('#detailAddress').val(rowData[2]);
            $('#detailTime').val(rowData[3]);
            $('#detailTotalPrice').val(rowData[4]);
            $('#detailStatus').val(rowData[5]);

            // Show detail modal
            $('#orderDetailModal').modal('show');
        });
    }

    // Function to attach status update event
    function attachStatusEvent() {
        $('.btn-status').off('click').on('click', function () {
            var row = dataTable.row($(this).closest('tr'));
            var rowData = row.data();

            // Example: Display status update modal
            $('#statusModal').modal('show');

            // Update status on button click
            $('#btnUpdateStatus').off('click').on('click', function () {
                var newStatus = $('#orderStatus').val();

                // Update row status
                rowData[5] = newStatus;
                row.data(rowData).draw(false);

                // Close status modal
                $('#statusModal').modal('hide');

                // Re-attach events after updating status
                attachDetailEvent();
                attachStatusEvent();
            });
        });
    }

    // Function to attach deny event
    function attachDenyEvent() {
        $('.btn-deny').off('click').on('click', function () {
            var row = dataTable.row($(this).closest('tr'));
            var rowData = row.data();

            var denyStatus = 'Denied';

            // Update row status to 'Denied'
            rowData[5] = denyStatus;
            row.data(rowData).draw(false);

            attachDetailEvent();
        });
    }

    // Attach events to existing buttons
    attachDetailEvent();
    attachStatusEvent();
    attachDenyEvent();
});
