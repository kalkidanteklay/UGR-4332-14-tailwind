const button = document.querySelector('#button');
const menu = document.querySelector('#menu');
 
    button.addEventListener('click', () => {
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
        }else {
            menu.classList.add('hidden');
        }
        
    
        
})
