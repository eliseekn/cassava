$(function() {
    let productsList = '';

    for (let i = 1; i <= 10; i++) {
        productsList += `
            <div class="product-card">
                <img src="assets/img/thumb.svg" alt="">
                
                <div>
                    <h5>Production de manioc</h5>
                    <p>150000 FCFA</p>
                    <a href="#" class="button-link button-link__header add-to-cart">Ajouter au panier</a>
                </div>
            </div>
        `;
    }

    $("#products-list").html(productsList);
});