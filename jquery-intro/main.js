const $button = $('button');
const $colorText = $('p');
const $ajaxButton = $('#weather-button');

$button.on('click', () => {
    $colorText.toggleClass('green');
});

$ajaxButton.on('click', () => {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/berry/1',
        success: (res) => {
            console.log('res: ', res)
        }
    });
});
