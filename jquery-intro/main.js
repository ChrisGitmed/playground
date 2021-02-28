const $button = $('button');
const $colorText = $('p');
const $getWeatherButton = $('#weather-button');

$button.on('click', () => {
    $colorText.toggleClass('green');
});

$getWeatherButton.on('click', () => {
    $.ajax({
        url: 'https://pokeapi.co/api/v2/berry/1',
        success: (res) => {
            console.log('res: ', res)
        }
    });
});
