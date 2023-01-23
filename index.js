const title = document.querySelector('.title');

// title.innerText = 'Hola, mundo';
// title.innerHTML = 'Hola, mundo';
// title.textContent = 'Hola, mundo';

console.log({
    1: title.innerText, 
    2: title.innerHTML, 
    3: title.textContent
})



console.log({
    1: title.setAttribute('class','title2' ), 
    2: title.getAttribute('class'),
    3: title,
    4: title.classList.add('title3')
})

const body = document.querySelector('body').classList.add('body');

const bodyClass = document.querySelector('.body');

const h3 = document.createElement('h3');
h3.classList.add('Phrase');
bodyClass.append(h3);
h3.textContent = 'Nunca Pares De aprender';
h3.style.color = '#12985D';