const $clickCounterText = document.querySelector('.click-counter > p');
const $clickCounterButton = document.querySelector('.click-counter > button');

let count = 0;
$clickCounterButton.addEventListener('click', () => {
    count++;
    $clickCounterText.textContent = `You have clicked ${count} times.`;
})