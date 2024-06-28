let accessKey = "TuaIjrMoG5NpbZHRaMSzY4d8oNB_BynEmdVflR0-6YA";
const SearchForm = document.getElementById("search-from");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMoreButton = document.getElementById("show-more-btn");

let keyword = " ";
let page = 1;
async function searchImages() {
  keyword = SearchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=16`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log(results);
  if (page === 1) {
    SearchResult.innerHTML = "";
  }
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    SearchResult.appendChild(image);
  });
  ShowMoreButton.style.display = "Block";
}
SearchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
ShowMoreButton.addEventListener("click", () => {
  page++;
  searchImages();
});
