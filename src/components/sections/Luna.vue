<script setup>
import { ref, onMounted } from "vue";

const cube = ref(null);

const animate = () => {
  if (cube.value) {
    cube.value.rotation.y += 0.01;
  }
  requestAnimationFrame(animate);
};

onMounted(() => {
  animate();
});
</script>

<template>
  <TresCanvas clear-color="#eee">
    <TresPerspectiveCamera :position="[0, 0, 6]" />
    <TresDirectionalLight :position="[0, 0, 6]" />
    <TresAmbientLight :intensity="0.5" />

    <TresMesh ref="cube">
      <TresBoxGeometry />
      <TresMeshStandardMaterial color="yellow" />
    </TresMesh>
  </TresCanvas>
</template>
