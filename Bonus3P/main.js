addEventListener('DOMContentLoaded', () => {
    const imagenes = [
        './img/antigua_barbuda.png',
        './img/argentina.jpg',
        './img/aruba.png',
        './img/Bandera_de_Bolivia.png',
        './img/Civil_Ensign_of_the_Dominican_Republic.png',
        './img/Flag_of_Barbados.png',
        './img/Flag_of_Belize.png',
        './img/Flag_of_Bermuda.png',
        './img/Flag_of_Brazil.png',
        './img/Flag_of_Canada.png',
        './img/Flag_of_Chile.png',
        './img/Flag_of_Colombia.png',
        './img/Flag_of_Costa_Rica.png',
        './img/Flag_of_Cuba.png',
        './img/Flag_of_Dominica.png',
        './img/Flag_of_Ecuador.png',
        './img/Flag_of_El_Salvador.png',
        './img/Flag_of_Grenada.png',
        './img/Flag_of_Guyana.png',
        './img/Flag_of_Haiti.png',
        './img/Flag_of_Honduras.png'
    ];

    let i = 1;
    const img1 = document.querySelector('#img1');
    const img2 = document.querySelector('#img2');
    const progressBar = document.querySelector('#progress-bar');
    const divIndicadores = document.querySelector('#indicadores');

    let porcentaje_base = 100 / imagenes.length;
    let porcentaje_actual = porcentaje_base;

    for (let index = 0; index < imagenes.length; index++) {
        const div = document.createElement('DIV');
        div.classList.add('circles');
        div.id = index;
        divIndicadores.appendChild(div);
    }

    progressBar.style.width = `${porcentaje_base}%`;
    img1.src = imagenes[0];

    const circulos = document.querySelectorAll('.circles');
    circulos[0].classList.add('resaltado');

    const slideshow = () => {
        img2.src = imagenes[i];
        const circulo_actual = Array.from(circulos).find(el => el.id == i);
        Array.from(circulos).forEach(cir => cir.classList.remove('resaltado'));
        circulo_actual.classList.add('resaltado');

        img2.classList.add('active');
        i++;
        porcentaje_actual += porcentaje_base;
        progressBar.style.width = `${porcentaje_actual}%`;

        if (i == imagenes.length) {
            i = 0;
            porcentaje_actual = porcentaje_base - porcentaje_base;
        }

        setTimeout(() => {
            img1.src = img2.src; 
            img2.classList.remove('active');
        }, 1000);
    };

    setInterval(slideshow, 1000);
});
