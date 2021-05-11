document.querySelector('.btn--primary').addEventListener('click', (e) => {
    document.querySelector('.modal').style.display = 'block'; 
    e.preventDefault();
})

document.querySelector('.btn--bookmark').addEventListener('click', (e) => {
    let parent = e.currentTarget;
    if(parent.classList.contains('btn--bookmarked')){
        parent.classList.remove('btn--bookmarked');
        let newNode = document.createTextNode(' Bookmark');
        parent.replaceChild(newNode, e.currentTarget.lastElementChild.nextSibling);
        return e.preventDefault();
    }
    let newNode = document.createTextNode(' Bookmarked');
    parent.replaceChild(newNode, e.currentTarget.lastElementChild.nextSibling)
    parent.classList.add('btn--bookmarked');
    e.preventDefault();
})

document.querySelector('.modal').addEventListener('click', (e) => {
    if(e.target.classList.contains('modal') || e.target.closest('.modal__cross')){
        return document.querySelector('.modal').style.display = 'none';
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

        }else{
            input.classList.add('shake');
            input.focus();
            window.setTimeout(() => {
                input.classList.remove('shake');
            }, 300);
        }
    }else{

    }
    e.preventDefault();
});



function stylizeCard(node){
    Array.from(document.querySelectorAll('.modal-card')).forEach((ele) => {
        if(ele.isSameNode(node)){
            ele.style.border = '1px solid hsl(176, 72%, 28%)';
            ele.lastElementChild.style.display = 'flex';
            currentForm =  ele.lastElementChild.querySelector('.modal-pledge__submit');
            ele.lastElementChild.querySelector('.modal-pledge__amount') && ele.lastElementChild.querySelector('.modal-pledge__amount').focus();
        }else{
            ele.style = "";
            ele.lastElementChild.style.display = 'none';
        }
    })
}

function displayForm(node){

}