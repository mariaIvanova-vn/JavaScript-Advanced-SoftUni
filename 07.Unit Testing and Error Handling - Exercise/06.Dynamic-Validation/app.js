function validate() {
    let email=document.getElementById('email');
    let regex=new RegExp('^[a-z]+@[a-z]+\\.[a-z]+');

    email.addEventListener('change', ()=>{
        if(regex.test(email.value)){
            email.classList.remove('error');
        }else{
            email.classList.add('error');
        }
    })
}