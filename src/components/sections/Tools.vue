<template>
    <section class="skills">
        <h3>{{ $t('hSkills') }}</h3>
        <div class="cards-group">
            <div v-for="tool in tools" class="tool">
                <img :src="require(`@/assets/tools/${tool.img}`)" :title="tool.title" :alt="tool.title" />
                <span class="toolTitle">{{ tool.title }}</span>
            </div>
        </div>
    </section>
</template>

<script>
import data from "@/data/tools.json";

export default {
    name: 'Tools',
    props: {
        msg: String
    },
    computed: {
        tools() {
            return data.map((tool) => tool)
        }
    }
}
</script>

<style scoped>
.tool {
    margin: 0.6em 1.4em;
}

.tool img {
    height: 5em;
    width: 5em;
}

.tool img:hover {
    animation: rotate-tool 2s linear 0.5s 4 normal forwards running;
}

@keyframes rotate-tool {
    from {
        transform: rotate(0);
        filter: hue-rotate(50deg);
    }

    to {
        transform: rotate(-360deg);
        filter: hue-rotate(360deg);
    }
}

.toolTitle {
    display: none;
    position: absolute;
}

.toolTitle:hover {
    display: inline;
}
</style>