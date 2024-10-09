<template>
    <div class="home">
        <Banner />
        <About />
        <Tools />
        <Projects />
        <Footer />
    </div>
</template>

<script>
import Banner from "@/components/sections/Banner.vue"
import About from '@/components/sections/About.vue'
import Hour from '@/components/Hour.vue'
import Tools from '@/components/sections/Tools.vue'
import Projects from '@/components/sections/Projects.vue'
import Footer from '@/components/sections/Footer.vue'

export default {
    name: 'Home',
    components: {
        Banner,
        About,
        Hour,
        Tools,
        Projects,
        Footer
    }
}
</script>