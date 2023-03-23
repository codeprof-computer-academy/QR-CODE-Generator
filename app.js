// target the generate button

document.querySelector('.generate-btn').addEventListener('click', (event)=>{

    event.preventDefault();

    // target the qr text input field
    let qr_text_input = document.querySelector('.qr-text-input');
    let qrImage = document.querySelector('.qrImage');
    let imgBox = document.querySelector('.imgBox');
    let download_link = document.querySelector('.download-link');

    let input_text = qr_text_input.value;

    if(input_text.trim().length > 0){
        let API_link = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input_text

        // setting src attribute for  image
        qrImage.src = API_link;
        imgBox.classList.add('show')

        // set the href attribute for anchor tag
        download_link.href = API_link
    }else{
           qr_text_input.classList.add('error')

        //    to remove the error class after 1s
           setTimeout(()=>{
               qr_text_input.classList.remove('error')
           },1000)

    }


})