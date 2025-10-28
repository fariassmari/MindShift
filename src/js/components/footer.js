export function criaFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    footer.innerHTML = `
        <footer class="footer" id="footer">
            <div class="container-footer">
                <div class="footer-section">
                    <h2 class="footer-logo">
                        <img src="./src/img/logo.webp" alt="Logo MindShift">
                    </h2>
                    <p class="footer-description">Reorganize sua vida da melhor maneira.</p>
                </div>

                <nav class="footer-social-nav">
                    <h3 class="footer-title">Descubra mais</h3>
                    <ul class="footer-social-list">
                        <li>
                            <a href="#" aria-label="Acesse nosso perfil no TikTok">
                                <i class="bi bi-tiktok" aria-hidden="true"></i>
                                TikTok
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Acesse nosso perfil no Twitter/X">
                                <i class="bi bi-twitter-x" aria-hidden="true"></i>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Acesse nosso perfil no Instagram">
                                <i class="bi bi-instagram" aria-hidden="true"></i>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="Acesse nosso canal no YouTube">
                                <i class="bi bi-youtube" aria-hidden="true"></i>
                                YouTube
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="footer-bottom">
                &copy; 2025 MindShift. Todos os direitos reservados.
            </div>
        </footer>
    `;
    return footer;
}