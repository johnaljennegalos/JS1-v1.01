let randomBtn = document.getElementById('random-btn');
let resultEl =  document.getElementById('result');

function generateRandomPassword(){
    let bucket = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-='

    // let length = 12
    let password = '';
    //
    // for(let i = 0; i < length; i++) {
    //     let char = Math.floor(Math.random() * bucket.length);
    //     password += bucket[char];
    // }

    const random = new Uint32Array(10)
    window.crypto.getRandomValues(random)

    for(let i = 0; i < 10; i++){
        password += bucket[random[i] % bucket.length]
    }


    resultEl.style.color = 'white'
    resultEl.innerText = password;
}

randomBtn.addEventListener('click', generateRandomPassword);


