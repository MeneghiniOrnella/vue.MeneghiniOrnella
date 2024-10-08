<template>
    <div class="icons-group contact-home">
        <a href="mailto:meneghini.ornella@gmail.com" target="_blank"
            aria-label="Go to your email and send me a message in a new windows">{{ $t('contactBtn') }}</a>
        <a href="https://www.linkedin.com/in/meneghiniornella/?locale=en_US" target="_blank"
            aria-label="Go to my LinkedIn profile and send me a message in a new windows">Linkedin</a>
        <!-- <a href="src/assets/Meneghini-cv.pdf" download="meneghini_ornella_cv">Download <font-awesome-icon icon="fa-solid fa-circle-down" /></a> -->
    </div>
</template>

<script>
export default {
    name: 'BannerBtn',
}
</script>

<style scoped>
/* a {
    display: block;
    padding: 1em 1.4em;
    font-weight: 600;
    color: #000;
    text-decoration: none;
    background-color: var(--secondary);
    margin: 0 auto;
    cursor: pointer;
    border: none;
    border-radius: 50px;
}
a:focus,
a:hover {
    color: var(--principal);
    transform: scale(1.2);
} */
</style>