async function fetchProducts() {
  let json = await fetch('https://ranekapi.origamid.dev/json/api/produto');
  json = await json.json();
  return json;
}

export default fetchProducts;
