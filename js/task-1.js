const CategoryEl = document.querySelectorAll('.item');
console.log('Number of categories: ', CategoryEl.length);

CategoryEl.forEach((category) => {
    const nameCateg = category.querySelector('h2').textContent;
    const listCateg = category.querySelectorAll('ul li').length;

    console.log(`Category: ${nameCateg}`);
    console.log(`Elements: ${listCateg}`);
});