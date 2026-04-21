
let products = [];

fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {
    products = data.products;
    render(products);
});

function render(data) {
    let rows = data.map(p => `
        <tr>
            <td>${p.id}</td>
            <td>${p.title}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td>${p.rating}</td>
            <td>${p.stock}</td>
            <td>${p.brand}</td>
        </tr>
    `);

    document.getElementById("tableBody").innerHTML = rows.join('');
}

function asc() {
    let sorted = [...products].sort((a,b)=>a.price-b.price);
    render(sorted);
}

function desc() {
    let sorted = [...products].sort((a,b)=>b.price-a.price);
    render(sorted)
}