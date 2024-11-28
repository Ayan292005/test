let cont = document.querySelector(".container")
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

fetch("http://localhost:4000/products")
.then(res => (res.json()))
.then(data=>{
const product = data.find(product => product.id == productId);
    cont.innerHTML=`
           <div class="col" style="margin-top: 50px;">
                <div class="card mb-3" style="width:600px;height:auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;margin:0 auto">
                    <div class="card-body">
                        <img src="https://i5.walmartimages.com/seo/Apple-iPhone-X-64GB-Unlocked-GSM-Phone-w-Dual-12MP-Camera-Space-Gray-B-Grade-Used_15c2b968-bb85-41a4-9292-b017f78fe797.a66ebbf32b6d53b6d6eb14c47434ac04.jpeg" alt="" style="width:100%">
                        <h5 class="card-title">${product.brand}</h5>
                        <p class="card-text"><strong>Model:</strong> ${product.model}</p>
                        <p class="card-text"><strong>Price:</strong> ${product.price}$</p>
                        <p class="card-text"><strong>Operating System:</strong> ${product.operatingSystem}</p>
                        <p class="card-text"><strong>Year:</strong> ${product.year}</p>
                        <div class="d-flex justify-content-end" style="gap:10px"> 
                        <a href="./index.html" class="btn btn-info">Back</a>
                        <button type="button" class="btn btn-danger"> <i class="fa-regular fa-heart" style="font-size:18px;color:white"></i></button>
                        <button type="button" class="btn btn-success"><i class="fa-solid fa-cart-shopping" style="font-size:18px;color:white"></i></button>
                        </div>
                       
                    </div>
                </div>
            </div>
`
})