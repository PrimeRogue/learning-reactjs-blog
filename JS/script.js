const searchInput = document.querySelector("form input");
const searchButton = document.querySelector("form button");
const postList = document.querySelectorAll("ul li a");
const postList_li = document.querySelectorAll("ul li");
const postListClone = [...postList];

function handleSearch(e) {
  e.preventDefault();
  const searchInputValue = searchInput.value.toLowerCase();
  postListClone.forEach(function (item) {
    if (!item.textContent.toLowerCase().includes(searchInputValue)) {
      item.parentNode.style.display = "none";
    } else item.parentNode.style.display = "block";
  });
}
searchButton.onclick = handleSearch;
searchInput.onkeyup = handleSearch;
