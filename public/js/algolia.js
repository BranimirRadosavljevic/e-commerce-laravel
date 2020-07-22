(function () {    	

const client = algoliasearch("3I5AWGHDUU", "41448dd57d7429e9da4bada38f2a61e2");
const products = client.initIndex('products');

autocomplete('#aa-search-input', {}, [
    {
      source: autocomplete.sources.hits(products, { hitsPerPage: 10 }),
      displayKey: 'name', 
      templates: {
        header: '<div class="aa-suggestions-category">Products</div>',
        suggestion: function (suggestion) {
          const markup = `
            <div class="algolia-result">              
            <span>
            ${suggestion._highlightResult.name.value}
            </span>
            <img src="${window.location.origin}/storage/${suggestion.image}" alt="img" class="algolia-thumb">
            </div>
            <div class="algolia-details">
              <span>${suggestion._highlightResult.details.value}</span>
            </div>
          `;
          return markup;
        },
        empty({result}){
          return `<span class="aa-empty">No result.</span>`;
        }
      }
    },
    
]).on('autocomplete:selected', function(event, suggestion, dataset){
  window.location.href = window.location.origin + "/shop/" + suggestion.slug;
});

})();