let row = document.querySelector(".row");
let myURL="http://localhost:4000/products"

function displayProducts(products) {
    row.innerHTML = '';
    products.forEach(product => {
        row.innerHTML += `
          <div class="col" style="margin-top: 50px;">
                <div class="card mb-3" style="width:300px;height:auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;">
                    <div class="card-body">
                        <img src="https://i5.walmartimages.com/seo/Apple-iPhone-X-64GB-Unlocked-GSM-Phone-w-Dual-12MP-Camera-Space-Gray-B-Grade-Used_15c2b968-bb85-41a4-9292-b017f78fe797.a66ebbf32b6d53b6d6eb14c47434ac04.jpeg" alt="" style="width:100%">
                        <h5 class="card-title">${product.brand}</h5>
                        <p class="card-text"><strong>Model:</strong> ${product.model}</p>
                        <p class="card-text"><strong>Price:</strong> ${product.price}</p>
                        <div class="d-flex justify-content-end" style="gap:10px"> 
                        <button type="button" class="btn btn-danger"> <i class="fa-regular fa-heart" style="font-size:20px;color:white"></i></button>
                        <button type="button" class="btn btn-success"><i class="fa-solid fa-cart-shopping" style="font-size:20px;color:white"></i></button>
                       
                        </div>
                       
                    </div>
                </div>
            </div>
        `;
    });

    
}

async function getAllProducts(url) {
    try {
        let response = await axios.get(url);
        return { products: response.data, error: null };
    } catch (error) {
        console.error(error);
        return { products: [], error: error.message };
    }
}

async function getData() {
    let { products, error } = await getAllProducts(myURL);
    if (error) {
        row.innerHTML = `<p>Error: ${error}</p>`;
    } else {
        displayProducts(products)
    }
}
getData()