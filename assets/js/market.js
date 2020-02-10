$(function() {
    let productsList = '';

    for (let i = 1; i <= 10; i++) {
        productsList += `
            <div class="product-card">
                <img src="assets/img/thumb.svg" alt="">
                
                <div>
                    <h5>Description du produit</h5>
                    <p>Prix en FCFA</p>
                    <a href="#" class="btn__green add-to-cart">Ajouter au panier</a>
                </div>
            </div>
        `;
    }

    $("#products-list").html(productsList);
});