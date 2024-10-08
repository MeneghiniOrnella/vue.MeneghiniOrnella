<template>
    <section class="contact">
        <h3>{{ $t('hContact') }}</h3>
        <p>{{ $t('pContact1') }}</p>
        <br />
        <div class="cards-group">
            <div class="card">
                <h4>
                    <a href="https://www.linkedin.com/in/meneghiniornella/" target="_blank"
                        aria-label="Go to your email and send me a message in a new windows">
                        LinkedIn <br />
                        <span>{{ $t('hContact') }}</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="https://github.com/MeneghiniOrnella?tab=repositories" target="_blank"
                        aria-label="Go to my Github profile and watch my repositories in a new windows">
                        GitHub <br />
                        <span>{{ $t('pContact2') }}</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="mailto:meneghini.ornella@gmail.com" target="_blank"
                        aria-label="Go to your email and send me a message in a new windows">
                        Email <br />
                        <span>{{ $t('pContact3') }}</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="https://codepen.io/meneghiniornella" target="_blank"
                        aria-label="Go to watch my Codepen Projects in a new windows">
                        Codepen <br />
                        <span>{{ $t('pContact4') }}</span>
                    </a>
                </h4>
            </div>
        </div>
    </section>
    <!-- 
    https://codepen.io/Abobakr/pen/NRRNbZ
    https://codepen.io/davidkpiano/pen/ZpRXGj
    https://anuraghazra.dev
    https://www.cassie.codes
    https://codepen.io/smashingmag/pen/MWGJNaw
-->
</template>

<script>

export default {
    name: 'Home',
}
</script>

<style>
.contact .cards-group .card a {
    width: auto;
    background: none;
    border: none;
}

.about-text {
    margin: 4rem;
}

.contact-home a {
    border-radius: 50px;
    font-weight: 600;
    color: #000;
    background-color: var(--secondary);
    cursor: pointer;
    text-decoration: none;
    border: none;
    width: 20rem;
}
</style>