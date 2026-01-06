<script setup lang="ts">
import './global.scss';
import 'primeicons/primeicons.css';

import Navbar from './components/Navbar/Navbar.vue';
import Introduction from './components/Introduction/Introduction.vue';
import About from './components/About/About.vue';
import Projects from './components/Projects/Projects.vue';
import Skills from './components/Skills/Skills.vue';

</script>
<template>
    <Navbar />
    <Introduction />
    <About />
    <Projects />
    <Skills />
</template>
