let count = 0;
let hamFlag = false;
const hamBurgerShow = mobileMenuShow = () =>{
    console.log('click 1');
    let element = document.getElementById('hamBurgerMenu');
    // console.log(element);
    // element.classList.add('visible');
    // element.classList.add('block');

    if(count == 1){
        element.classList.toggle('hidden');
        element.classList.toggle('invisible');
        
    }

    if(count<1){
        count++;
        element.classList.remove('hidden');
        element.classList.remove('invisible');
    }
    console.log('click 2');

}