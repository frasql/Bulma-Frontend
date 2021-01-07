const url = 'https://jsonplaceholder.typicode.com/posts';


h = new Headers();
h.append('Accept', 'application-json')

let options = {
    method: 'GET',
    headers: h,
    mode: 'cors'
}

req = new Request(url, options);

fetch(req)
.then((response) => {
    if(response.ok) {
        return response.json();
    } else {
        throw new Error("Bad HTTPS Request");
    }
})
.then((data) => {
    let output = '';
    data.forEach((post) => {
        console.log(data);
        output += `
        <div class="card card-body mb-3">
          <div class="card-content">
            <p class="title has-text-centered">${post.title}</p>
          </div>
          <div class="card-content">
            <p class="subtitle has-text-centered">${post.body}</p>
          </div>  
        </div>
        `;
        });

        
        article = document.getElementById('article');
        article.innerHTML = output;
    })
.catch((err) => {
    console.log('Error:', err);
});