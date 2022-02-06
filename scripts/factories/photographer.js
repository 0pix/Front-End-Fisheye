// function photographerFactory(data) {
//   const { name, portrait, city, country, tagline, price } = data;

//   const picture = `assets/photographers/${portrait}`;

//   function getUserCardDOM() {
//     //*** */ Create elements
//     const article = document.createElement("article");
//     const link = document.createElement("a");
//     const img = document.createElement("img");
//     const h2 = document.createElement("h2");
//     const texteDiv = document.createElement("div");
//     const cityCountry = document.createElement("h3");
//     const taglinePara = document.createElement("p");
//     const pricePara = document.createElement("p");

//     //*** */  HTML content
//     img.setAttribute("src", picture);
//     link.href = "./../../photographer.html";
//     h2.textContent = name;
//     cityCountry.textContent = city + ", " + country;
//     taglinePara.textContent = tagline;
//     pricePara.textContent = price + "€/jour";
//     pricePara.classList.add("price");

//     //*** HTML Childs
//     article.appendChild(link);
//     article.appendChild(texteDiv);
//     link.appendChild(img);
//     link.appendChild(h2);
//     texteDiv.appendChild(cityCountry);
//     texteDiv.appendChild(taglinePara);
//     texteDiv.appendChild(pricePara);
//     return article;
//   }
//   return { getUserCardDOM };
// }

function photographerFactory(target, data) {
  target.innerHTML = data
    .map(
      (photographer) =>
        `
    <article>
      <a href="./photographer.html?id=${photographer.id}">
       <img src="assets/photographers/${photographer.portrait}" alt="photo de ${photographer.name}">
        <h2>${photographer.name}</h2>
      </a>
      <div>
        <h3>${photographer.city}${photographer.country}</h3>
        <p>${photographer.tagline}</p>
        <p class="price">${photographer.price}€/jour</p>
      </div>
    </article>
    `
    )
    .join("");
}
