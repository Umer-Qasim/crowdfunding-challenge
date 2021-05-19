window.addEventListener('resize', () => {
    if(window.innerWidth >= 500){
        Array.from(document.querySelectorAll('.header__item')).forEach((item) => {
            if(item.classList.length === 1){
                item.style.display = 'flex';
            }
        })
    }else{
        Array.from(document.querySelectorAll('.header__item')).forEach((item) => {
            if(item.classList.length === 1){
                item.style.display = 'none';
            }
        })
        document.querySelector('.header__burger').checked = false;
    }
})

document.querySelector('.btn--primary').addEventListener('click', (e) => {
    document.querySelector('.modal').style.display = 'block'; 
    document.querySelector('.modal__content').style.display = 'block'; 
    e.preventDefault();
})

document.querySelector('.about').addEventListener('click', (e) => {
    if(e.target.classList.contains('btn--secondary')){
        document.querySelector('.modal').style.display = 'block'; 
        document.querySelector('.modal__content').style.display = 'block'; 
    }
    e.preventDefault();
})

document.querySelector('.btn--bookmark').addEventListener('click', (e) => {
    let parent = e.currentTarget;
    if(parent.classList.contains('btn--bookmarked')){
        parent.classList.remove('btn--bookmarked');
        let newNode = document.createTextNode(' Bookmark');
        parent.lastElementChild.replaceChild(newNode, parent.lastElementChild.firstChild);
        return e.preventDefault();
    }
    let newNode = document.createTextNode(' Bookmarked');
    parent.lastElementChild.replaceChild(newNode, parent.lastElementChild.firstChild)
    parent.classList.add('btn--bookmarked');
    e.preventDefault();
})

document.querySelector('.modal').addEventListener('click', (e) => {
    if(e.target.classList.contains('modal') || e.target.closest('.modal__cross') || e.target.classList.contains('modal-success__done') ){
         document.querySelector('.modal').style.display = 'none';
         return document.querySelector('.modal-success').style.display = 'none';
    }
    if(e.target.id === "no"){
        let currentElement = e.target.closest('.modal-card');
        stylizeCard(currentElement);
    }
    if(e.target.id === "bam"){
        let currentElement = e.target.closest('.modal-card');
        stylizeCard(currentElement);
        // displayForm(currentElement);
    }
    if(e.target.id === "bla"){
        let currentElement = e.target.closest('.modal-card');
        stylizeCard(currentElement);
    }

})

let currentForm;

document.querySelector('.modal__form').addEventListener('submit', (e) => {
    let input = currentForm.parentElement.querySelector('.modal-pledge__amount');
    
    if(input){
        
        if(input.value != ''){
            let money = (+document.querySelector('.stats__amount--mon').innerText.split('$')[1].replace(',', '').trim() + +input.value);
            let backers = (+document.querySelector('.stats__amount--bac').innerText.replace(',', '').trim() + 1);
            document.querySelector('.stats__amount--mon').innerText = '$'+ money.toLocaleString('en-US');
            document.querySelector('.stats__amount--bac').innerText = backers.toLocaleString('en-US');
            document.querySelector('.stats__bar').style = `--percent: ${(money/100000)*100}`;

            document.querySelector('.modal__content').style.display = 'none';
            input.value = '';
            input.closest('.modal-pledge').style.display = 'none';
            input.closest('.modal-card').style = "";
            document.querySelector('.modal-success').style.display = 'block';
            input.closest('.modal-card').querySelector('[type="radio"]').checked = false;
        }else{
            input.classList.add('shake');
            input.focus();
            window.setTimeout(() => {
                input.classList.remove('shake');
            }, 300);
        }
    }else{
        let backers = (+document.querySelector('.stats__amount--bac').innerText.replace(',', '').trim() + 1);
        document.querySelector('.stats__amount--bac').innerText = backers.toLocaleString('en-US');
        
        document.querySelector('.modal__form').querySelector('.modal-pledge').style.display = 'none';
        document.querySelector('.modal__content').style.display = 'none';
        document.querySelector('.modal__form').querySelector('.modal-card').style = "";
        document.querySelector('.modal-success').style.display = 'block';
        document.querySelector('.modal__form').querySelector('[type="radio"]').checked = false;
    }
    e.preventDefault();
});

document.querySelector('.header').addEventListener('click', (e) => {
    if(e.target.classList.contains('header__burger')){
        if(!e.target.checked){
            Array.from(document.querySelectorAll('.header__item')).forEach((item) => {
                if(item.classList.length === 1){
                    item.style.display = 'none';
                }
            })
        }else{
            Array.from(document.querySelectorAll('.header__item')).forEach((item) => {
                if(item.classList.length === 1){
                    item.style.display = 'flex';
                }
            })
        }
    }
})



function stylizeCard(node){
    Array.from(document.querySelectorAll('.modal-card')).forEach((ele) => {
        if(ele.isSameNode(node)){
            ele.style.border = '1px solid hsl(176, 72%, 28%)';
            ele.lastElementChild.style.display = 'flex';
            currentForm =  ele.lastElementChild.querySelector('.modal-pledge__submit');
            ele.lastElementChild.querySelector('.modal-pledge__amount') && ele.lastElementChild.querySelector('.modal-pledge__amount').focus();
        }else{
            ele.style = "";
            ele.querySelector('.modal-pledge').style.display = 'none';
        }
    })
}

