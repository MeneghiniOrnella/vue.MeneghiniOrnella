<template>
    <div class="time"
        v-show="time"
    >
        <p><span>Arg </span>{{ time }}</p>
    </div>
</template>

<script>
export default {
    name: 'Hour',

    data: () => ({
        time: '',
    }),

    methods: {
        printHours: () => {
            return new Date().getHours();
        },
        printMinutes: () => {
            return new Date().getMinutes();
        },
    },

    mounted: () => {
        this.time = this.printHours()+":"+this.printMinutes();
    },
}
</script>

<style>
.time{
    position: relative;
    background-color: #0ff;
    border: 1px solid #747474;
    border-radius: 12px;
    width: 4rem;
    height: 1rem;
    padding: 0.4rem;
}
.time p {
    position: absolute;
    font-size: 0.8em;
    text-align: center;
    width: 4rem;
    bottom: -0.6em;
}
</style>