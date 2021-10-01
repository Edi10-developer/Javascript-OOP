class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById("product_list");
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
          <div class="card-body">
            <strong>Product Name: </strong> ${product.name}
            <strong>Product Price: </strong> ${product.price}
            <strong>Product Year: </strong> ${product.year}
          </div>
        </div>
        `;
        productList.appendChild(element);

    }

    deleteProduct() {

    }

    showMessage() {

    }
}

// DOM Events
document.getElementById("product_form")
    .addEventListener("submit", (e) => {
        const name  = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year  = document.getElementById('year').value;
        
        e.preventDefault(); 

        console.log(name, price, year);

        const product = new Product(name, price, year);
        const ui      = new UI();
        ui.addProduct(product);
        ui.resetForm()<

    })
    resetForm() {
        document.getElementById("product_form").reset();
    };