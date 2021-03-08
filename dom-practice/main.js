const $clickCounterText = document.querySelector('.click-counter > p');
const $clickCounterButton = document.querySelector('.click-counter > button');
const $toggleSwitch = document.querySelector('.toggle-switch');

let count = 0;
$clickCounterButton.addEventListener('click', () => {
    count++;
    $clickCounterText.textContent = `You have clicked ${count} times.`;
});

$toggleSwitch.addEventListener('click', (event) => {
    const element = event.target;
    if (element.classList[0] === 'inner-circle') {
        const switchBody = element.closest('.inner-border');
        switchBody.classList.toggle('justify-end');
    }
});