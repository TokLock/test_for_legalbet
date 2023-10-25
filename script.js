const mainButton = document.querySelector('.card__button');
const arrowButton = document.querySelector('.card__collapse-button');
const collapsibleTextWrapper = document.querySelector('.card__text-wrapper');
const collapsibleText = document.querySelector('.card__text');
const invisibleText = document.querySelector('.card__invisible-text');

const collapseButtonReverseClass = 'card__collapse-button_reversed';
const gradientClass = 'card__text-wrapper_gradient';
const openedTextClass = 'card__text_opened';
const collapsedTextHeight = '120';
let fullTextHeight;

const showText = () => {
    collapsibleTextWrapper.style.height = `${fullTextHeight}px`;
    collapsibleTextWrapper.classList.toggle(gradientClass)
    collapsibleText.classList.toggle(openedTextClass);
}

const hideText = () => {
    collapsibleTextWrapper.style.height = `${collapsedTextHeight}px`;
    collapsibleTextWrapper.classList.toggle(gradientClass)

    setTimeout(() => collapsibleText.classList.toggle(openedTextClass), 300)
}

document.addEventListener('DOMContentLoaded', () => {
    fullTextHeight = invisibleText.clientHeight;

    const observer = new ResizeObserver(([entry]) => fullTextHeight = entry.contentRect.height)
    observer.observe(invisibleText)
})

arrowButton.addEventListener('click', () => {
    arrowButton.classList.toggle(collapseButtonReverseClass)

    if (collapsibleText.classList.contains(openedTextClass)) {
        hideText()
    } else {
        showText()
    }
})

mainButton.addEventListener('click', () => alert('Ваша ставка принята!'))
