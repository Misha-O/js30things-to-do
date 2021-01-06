const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const search = document.getElementById("search-input");
const suggestions = document.getElementById("suggestions");

search.addEventListener("input", () => {
  searchAndFilter(search.value);
});

async function searchAndFilter(searchByInput) {
  const response = await fetch(endpoint);
  const data = await response.json();

  //   get matches to current input
  let matches = data.filter((item) => {
    const regex = new RegExp(`^${searchByInput}`, "gi");

    // retrieves the result of matching a string against regex
    return item.city.match(regex) || item.state.match(regex);
  });

  if (searchByInput.length === 0) {
    matches = [];
    suggestions.innerHTML = "";
  }

  // output results in html
  const outputResults = (matches) => {
    const html = matches
      .map((match) => {
        const regex = new RegExp(search.value, "gi");
        const cityName = match.city.replace(
          regex,
          `<span class="hl">${search.value}</span>`
        );
        const stateName = match.state.replace(
          regex,
          `<span class="hl">${search.value}</span>`
        );
        return `
          <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(
              match.population
            )}</span>
          </li>
        `;
      })
      .join("");
    suggestions.innerHTML = html;
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  outputResults(matches);
}
