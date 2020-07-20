(function () {    	

const client = algoliasearch("3I5AWGHDUU", "41448dd57d7429e9da4bada38f2a61e2");
const products = client.initIndex('products');

autocomplete('#aa-search-input', {}, [
    {
      source: autocomplete.sources.hits(products, { hitsPerPage: 10 }),
      displayKey: 'name',
      templates: {
        header: '<div class="aa-suggestions-category">Products</div>',
        suggestion({_highlightResult}) {
          return `<span>${_highlightResult.name.value}</span>`;
        }
      }
    },
    
]);

})();