let containerEl = document.getElementById('container');
let postContainer = document.getElementById('post-container');
let loader = document.querySelector('.loader');
let circle = document.getElementById('circle');

let page = 0

async function getPost(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const datas = await response.json();

    if(datas.length === 0){
        observer.disconnect();
    }

    datas.forEach((data) => {

        let postDiv = document.createElement('div');
        postDiv.classList.add('post');

        let titleDiv = document.createElement('h2');
        titleDiv.textContent = data.id + "." + data.title;

        let bodyDiv = document.createElement('p');
        bodyDiv.textContent = data.body;

        postDiv.appendChild(titleDiv);
        postDiv.appendChild(bodyDiv);

        postContainer.appendChild(postDiv);

    })


    console.log(datas);
}

let observer = new IntersectionObserver((entries) => {
    const entry = entries[0]

    if(entry.isIntersecting){
        page++
        getPost()
    }
})

observer.observe(loader)

