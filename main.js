let getId = (id)=>{
    return document.getElementById(id);
}
getId('home_btn').addEventListener('click',()=>{
    getId('home').style.display = 'block';
});
let show_hide = true;
getId('user').addEventListener('click',()=>{
    getId('div-log-in-sign-up').style.transition = '.5s';
    if(show_hide){
        getId('div-log-in-sign-up').style.display = 'block';
        show_hide = false;
    }else{
        getId('div-log-in-sign-up').style.display = 'none';
        show_hide = true;
    }
});
let close_open = true;
getId('close_open').addEventListener('click', () => {
    getId('container_btn').style.transition = '.5s';
    getId('close_open').style.transition = '.5s';
    document.querySelector('h1').style.transition = '.5s';
    getId('logo').style.transition = '.5s';
    for(let i = 1 ; i < 8 ; i++){
        getId(`options${i}`).style.transition = '.5s';
    }
    if (close_open) {
        getId('container_btn').style.width = '0px';

        document.querySelector('h1').style.left = '60px';
        getId('logo').style.left = '415px';

        for(let i = 1 ; i < 8 ; i++){
            getId(`options${i}`).style.left = '20px';
            getId(`options${i}`).style.marginRight = '10px';
        }

        let leftRightIcon = getId('left_right');
        leftRightIcon.classList.remove('fa-circle-chevron-left');
        leftRightIcon.classList.add('fa-circle-chevron-right');

        getId('close_open').style.left = '5px';
        close_open = false;
    } else {
        getId('container_btn').style.width = '100px';

        document.querySelector('h1').style.left = '150px';
        getId('logo').style.left = '510px';

        for(let i = 1 ; i < 8 ; i++){
            getId(`options${i}`).style.left = '100px';
            getId(`options${i}`).style.marginRight = '0px';
        }

        let leftRightIcon = getId('left_right');
        leftRightIcon.classList.remove('fa-circle-chevron-right');
        leftRightIcon.classList.add('fa-circle-chevron-left');

        getId('close_open').style.left = '105px';
        close_open = true;
    }
});
getId('log_in').addEventListener('click',()=>{
    getId('div-log-in-sign-up').style.display = 'none';
    show_hide = true;
    getId('home').style.display = 'none';
    getId('content_login').style.display = 'block';
    getId('content_sign_up').style.display = 'none';
    getId('container_btn').style.height = '60vh';
    getId('contact').style.display = 'none';
});
getId('sign_up').addEventListener('click',()=>{
    getId('div-log-in-sign-up').style.display = 'none';
    show_hide = true;
    getId('home').style.display = 'none';
    getId('content_login').style.display = 'none';
    getId('content_sign_up').style.display = 'block';
    getId('container_btn').style.height = '60vh';
    getId('contact').style.display = 'none';
});
getId('go_sign_up').addEventListener('click',()=>{
    getId('div-log-in-sign-up').style.display = 'none';
    show_hide = true;
    getId('home').style.display = 'none';
    getId('content_login').style.display = 'none';
    getId('content_sign_up').style.display = 'block';
    getId('container_btn').style.height = '60vh';
    getId('contact').style.display = 'none';
});
getId('exit').addEventListener('click',()=>{
    getId('div-log-in-sign-up').style.display = 'none';
    show_hide = true;
    getId('home').style.display = 'block';
    getId('content_login').style.display = 'none';
    getId('content_sign_up').style.display = 'none';
    getId('container_btn').style.height = '50vh';
    getId('contact').style.display = 'block';
});