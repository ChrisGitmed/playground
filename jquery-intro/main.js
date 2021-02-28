const $button = $('button');
const $colorText = $('p');

$button.on('click', () => {
    $colorText.toggleClass('green');
});
