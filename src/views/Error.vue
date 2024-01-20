<template>
    <div class="error">
        <h1>404</h1>
        <h2>Error: Page not found 😓</h2>
        <img alt="random image" src="https://picsum.photos/300/200?random" title="random image">
        <a href="/">Home</a>
    </div>
</template>

<script>
export default {
    name: 'Error',
}
</script>

<style scoped>
.error {
    background: #dbc6e7;
    margin: 3em;
    padding: 2em;
    border-radius: 16px;
}

.error h1 {
    animation: error-rotate 2s linear 0.5s 4 normal forwards running;
}

.error img {
    margin-bottom: 2.5em;
}

.error img:hover {
    animation: error-rotate 2s linear 0.5s 4 normal forwards running;
}

@keyframes error-rotate {
    0% {
        transform: rotate(0);
    }

    40% {
        transform: rotate(10deg);
        color: #3f3f3f;
        scale: 1.1;
    }

    80% {
        transform: rotate(-10deg);
        color: #050022;
        scale: 1.1;
    }

    100% {
        transform: rotate(0deg);
    }
}
</style>