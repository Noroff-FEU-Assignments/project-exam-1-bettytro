const postgrid = document.getElementById('blogposts');
const count = document.getElementById('count');
const nextpage = document.getElementById('nextpage');
const page = document.getElementById('page')

API_URL = "https://api.minnanogeipenn.no/wp-json/wp/v2/posts?_embed&per_page=50"

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let i = 0;
        data.forEach(post => {
            i += 1
            if (i < 10) {
                html = `
            <a class="post show" href="blogpost.html?id=${post.id}">
            <div class="boxall">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" width="240">
            <h3>${post.title.rendered}</h3>
            <p>${post.excerpt.rendered}</p>
            </div>
            </a>
            `
            } else {
                html = `
            <a class="post hide" href="blogpost.html?id=${post.id}">
            <div class="boxall">
            <img src="${post._embedded['wp:featuredmedia']['0'].source_url}" width="240">
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

nextpage.addEventListener("click", function() {
    let counts = 0;
    const postlist = document.querySelectorAll('.post')
    console.log(postlist);
    const post = Array.from(postlist);
    console.log(post);
    let firstpage = post.slice(0, 9);
    console.log(firstpage)
    firstpage.forEach(function(posts) {
        posts.style.display = "none";
    })
    page.innerText = '2';
    let secondpage = post.splice(9, 11);
    console.log(secondpage)
    secondpage.forEach(function(posts) {
        posts.style.display = "block";
        counts += 1;
    })
    count.innerText = counts;
    nextpage.style.display = "none";
    lastpage.style.display = "inline-block";
})

lastpage.addEventListener("click", function() {
    let counts = 0;
    nextpage.style.display = "inline-block";
    lastpage.style.display = "none";
  const postlist = document.querySelectorAll('.post')
    console.log(postlist);
    const post = Array.from(postlist);
    console.log(post);
    let firstpage = post.slice(0, 9);
    firstpage.forEach(function(posts) {
        posts.style.display = "block";
        counts += 1;
    })
    let secondpage = post.splice(9, 11);
    console.log(secondpage)
    secondpage.forEach(function(posts) {
        posts.style.display = "none";
    })
    count.innerText = counts;
    page.innerText = "1";
})