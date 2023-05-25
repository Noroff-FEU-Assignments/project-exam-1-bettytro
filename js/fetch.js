const postgrid = document.getElementById('postgrid');
API_URL = "https://api.minnanogeipenn.no/wp-json/wp/v2/posts?_embed"

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let i = 0;
        data.forEach(post => {
            i += 1
            if (i < 4) {
                html = `
            <a class="slide" href="blogpost.html?id=${post.id}">
            <div class="box">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" width="240" alt="">
            <h3>${post.title.rendered}</h3>
            <p>${post.excerpt.rendered}</p>
            </div>
            </a>
            `
            } else {
                html = `
            <a class="slide hide" href="blogpost.html?id=${post.id}">
            <div class="box">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" width="240" alt="">
            <h3>${post.title.rendered}</h3>
            <p>${post.excerpt.rendered}</p>
            </div>
            </a>
            `
            }
            postgrid.innerHTML += html;
        });
        console.log(postgrid)
    }).catch(function (err) {
        console.log(err);
    })
