<script setup>
import HelloWorld from './components/HelloWorld.vue'
import { onMounted } from 'vue'

import { send } from 'i11rzed3m';

onMounted(async () => {
  let message = {
    title: "Título de la notificación en VueClinet",
    body: "Cuerpo de la notificación en VueClinet",
  };

  try {
    const response = await send('http://localhost:3000', message, 'BOj7mhqma4xxLqDH1bwkWCR-9MbuJsoA9Q9J0Y0mtjZ7MGWsM_h5183Lz2Q-sS8J-zPYATq-rXHPcud1THQoZ08');
    console.log('Notificación enviada:', response);
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
  }
});
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
