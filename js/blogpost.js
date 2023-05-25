const tit = document.getElementById('title');
const cont = document.getElementById('content');
const img = document.getElementById('image');
const modal = document.getElementById('modal');
const modalimg = document.getElementById('modalimg');

API_URL = "https://api.minnanogeipenn.no/wp-json/wp/v2/posts/"
const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
const id = urlParams.get('id');
console.log(id);
fetch(API_URL + id)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let content = data.content.rendered;
        let id = data.id;
        let title = data.title.rendered;
        let image = data._links['wp:featuredmedia']['0'].href;
        console.log(image);
        const IMG_URL = image;
        console.log(IMG_URL)
        fetch(IMG_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var imageurl = data.media_details.sizes.large.source_url;
            var imagefull = data.source_url;
            console.log(imageurl)
            img.innerHTML += `<img src="${imageurl}" alt="${title}">`
            modalimg.innerHTML += `<img id="imagesrc" src="${imagefull}" alt="${title}">`
        })
        console.log(image);
        console.log(title);
        tit.innerHTML += title;
        cont.innerHTML += content;
        let desc = `${title} | Article ${id} by Elisabeth Trondsen`
        document.title = `My blog | ${title}`;
        document.querySelector('meta[name="description"]').setAttribute("content", desc);
    })

    img.addEventListener("click", function() {
        modal.showModal();
    })
    function onClick(event) {
        if (event.target === modal) {
          modal.close();
        }
      }
      modal.addEventListener("click", onClick);      