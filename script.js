document.addEventListener('DOMContentLoaded', function() {
    // Message de confirmation dans la console du navigateur
    console.log("El Hama'ayan : Système prêt et sécurisé.");

    // Gestion simple du bouton Newsletter
    const newsletterBtn = document.querySelector('.btn-subscribe');
    if(newsletterBtn) {
        newsletterBtn.onclick = function() {
            alert("Merci de votre intérêt pour El Hama'ayan. Cette fonction sera bientôt active !");
        };
    }
});
