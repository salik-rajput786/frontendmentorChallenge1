const api_url = 'https://api.adviceslip.com/advice'


const dice = document.querySelector('.icon');
const adviceText = document.querySelector('.advice-text')
const adviceNumber = document.querySelector('.advice-number')


dice.addEventListener('click', () => getadvice(api_url));

async function getadvice(url) {
    const response = await fetch(url);
    let data = await response.json();
    console.log(data);

    adviceText.innerHTML = `"${data.slip.advice}"`;
    adviceNumber.innerHTML = `Advice # ${data.slip.id}`

}