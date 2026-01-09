


async function getPost(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5&_page=1');
    const data = await response.json();
    console.log(data);

    return data
}

getPost();