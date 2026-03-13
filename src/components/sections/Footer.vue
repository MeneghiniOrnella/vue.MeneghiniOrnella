<template>
    <div class="footer">
        <hr />
        <div class="last-line">
            <a class="copy"
                :href="homeLink.href" 
                :aria-label="homeLink.ariaLabel"
            >
                {{ homeLink.name }} &copy; {{ year }}
            </a>
            <div class="icons-group footer">
                <a v-for="(social, index) in socials"
                    :key="index"
                    :href="social.href"
                    target="_blank"
                    rel="noopener"
                    :aria-label="social.ariaLabel"
                >
                    <font-awesome-icon
                        v-if="social.icon"
                        :icon="social.icon"
                    />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
const year = new Date().getFullYear()
const homeLink = {
    href: 'https://meneghiniornella.netlify.app/',
    ariaLabel: 'Go to home',
    name: 'Ornella Meneghini'
}
const socials = [
    {
        href: 'https://mailto:meneghini.ornella@gmail.com',
        ariaLabel: 'Go to my email and send me a message in a new windows',
        icon: ['fas', 'envelope']
    },
    {
        href: "https://www.linkedin.com/in/meneghiniornella/?locale=en_US",
        ariaLabel: 'Go to my LinkedIn profile and send me a message in a new windows',
        icon: ['fab', 'linkedin-in']
    },
    {
        href: "https://github.com/MeneghiniOrnella?tab=repositories",
        ariaLabel: 'Go to my Github profile and watch my repositories in a new windows',
        icon: ['fab', 'github']
    }
]
</script>

<style>
.footer a {
    background: none;
    color: var(--light-principal);
}

.footer a:focus,
.footer a:hover,
.footer a:active {
    color: var(--dark-principal);
    text-decoration: underline;
}

.footer .last-line {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 2.5em;
    padding-top: 1.2em;
    padding-bottom: 1.3em;
}

.footer p {
    text-align: center;
}

.footer .icons-group footer a {
    margin: 0 0.2rem;
    padding: 0;
}
</style>