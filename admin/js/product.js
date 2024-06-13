$(document).ready(function() {
    // Initialize DataTable
    $('#dataTable').DataTable({
        paging: false,  // Disable paging
        searching: false  // Disable searching
    });

    // Save button click event
    $('#btnSave').click(function() {
        // Retrieve input values
        var id = $('#ID').val();
        var productName = $('#productName').val();
        var category = $('#category').val();
        var size = $('#size').val();
        var description = $('#description').val();
        var price = $('#price').val();

        // Append new row to DataTable
        var table = $('#dataTable').DataTable();
        table.row.add([
            id,
            productName,
            category,
            size,
            description,
            '$' + price
        ]).draw(false);

        // Close modal
        $('#myModal').modal('hide');

        // Clear input fields
        $('#ID').val('');
        $('#productName').val('');
        $('#category').val('');
        $('#size').val('');
        $('#description').val('');
        $('#price').val('');
    });
});