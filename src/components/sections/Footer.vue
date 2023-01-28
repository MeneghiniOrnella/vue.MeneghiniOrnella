<template>
  <div class="footer">
    <hr/>
    <div class="last-line">
      <a
        href="https://meneghiniornella.netlify.app/"
        class="copy">
        Ornella Meneghini &copy 2023
      </a>
      <div class="icons-group footer">
        <a
          href="mailto:meneghini.ornella@gmail.com"
          target="_blank"
        >
        <font-awesome-icon icon="fa-solid fa-envelope" />
        </a>
        <a
          href="https://www.linkedin.com/in/meneghiniornella/?locale=en_US"
          target="_blank"
        >
        <font-awesome-icon icon="fa-brands fa-home" />
        </a>
        <a
          href="https://github.com/MeneghiniOrnella?tab=repositories"
          target="_blank"
        >
        <font-awesome-icon icon="fa-brands fa-github" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer a {
    background: none;
    color: var(--light-principal);
}
.footer a:focus, .footer a:hover, .footer a:active {
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