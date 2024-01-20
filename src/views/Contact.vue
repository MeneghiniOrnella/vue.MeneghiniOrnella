<template>
    <section class="contact">
        <h3>Contact me</h3>
        <p>Hi! Get in touch! You could send me a message on these pages, that contain more information about me and what I like to do.</p>
        <br />
        <div class="cards-group">
            <div class="card">
                <h4>
                    <a href="https://www.linkedin.com/in/meneghiniornella/" target="_blank">
                        LinkedIn <br />
                        <span>Contact me</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="https://github.com/MeneghiniOrnella?tab=repositories" target="_blank">
                        GitHub <br />
                        <span>See proyects</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="mailto:meneghini.ornella@gmail.com" target="_blank">
                        Email <br />
                        <span>Send me an email</span>
                    </a>
                </h4>
            </div>
            <div class="card">
                <h4>
                    <a href="https://codepen.io/meneghiniornella" target="_blank">
                        Codepen <br />
                        <span>See little proyects</span>
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