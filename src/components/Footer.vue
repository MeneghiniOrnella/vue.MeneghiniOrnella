<template>
  <div class="footer">
    <hr/>
    <div class="icons-group footer">
      <a href="mailto:meneghini.ornella@gmail.com"  target="_blank"><font-awesome-icon icon="fa-solid fa-envelope" /> Mail</a>
      <a href="https://www.linkedin.com/in/meneghiniornella/?locale=en_US"  target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin" /> LinkedIn</a>
      <a href="https://github.com/MeneghiniOrnella?tab=repositories"  target="_blank"><font-awesome-icon icon="fa-brands fa-github" /> GitHub</a>
    </div>
    <p>This page was created by Ornella Meneghini 😁</p>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
.footer {
  margin-bottom: 2.5rem;
}

.footer a {
  background: none;
  color: rgb(150, 72, 170);
}
.footer a:focus, .footer a:hover, .footer a:active {
  color: rgb(131, 35, 155);
  text-decoration: underline;
}
</style>