$(document).ready(function () {
    // Add todo item
    $('#todo-input').change(function () {
        var todoText = $(this).val();
        var checkIcons = '<div class="i-container"><i id="check-btn" class="bi bi-check-square"></i> <i id="check-fill-btn" class="bi bi-check-square-fill"></i></div>';
        var deleteIcons = '<div class="i-container-delete"><i id="delete-btn" class="bi bi-x-square"></i> <i id="delete-fill-btn" class="bi bi-x-square-fill"></i></div>';

        var newItem = '<li><div class="item-text-container">' + todoText + '</div>' + checkIcons + deleteIcons + '</li>';

        $('.todo-list').append(newItem);
        $('#todo-input').val('');

    });

    // delete item
    $('.todo-list').on('click', '.i-container-delete', function () {
        $(this).parent('li').fadeOut(200);
    });

    // check off item
    $('.todo-list').on('click', '.i-container', function () {
        $(this).parent('li').toggleClass('checked');
    });

});

