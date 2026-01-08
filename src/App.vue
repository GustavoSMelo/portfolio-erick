<script setup lang="ts">
import './global.scss';
import 'primeicons/primeicons.css';

import Navbar from './components/Navbar/Navbar.vue';
import Introduction from './components/Introduction/Introduction.vue';
import About from './components/About/About.vue';
import Projects from './components/Projects/Projects.vue';
import Skills from './components/Skills/Skills.vue';
import Experience from './components/Experience/Experience.vue';
import ExperienceDetails from './components/ExperienceDetails/ExperienceDetails.vue';
import Contact from './components/Contact/Contact.vue';
import Footer from './components/Footer/Footer.vue';
import { ref } from 'vue';

const choosedExpDetails = ref(0);

const handleChooseExpDetails = (choosed: 1 | 2 | 3) => {
    choosedExpDetails.value = choosed;
};

const handleCloseExpDetails = () => {
    choosedExpDetails.value = 0;
};
</script>
<template>
    <Navbar />
    <Introduction />
    <About />
    <Projects />
    <Skills />
    <Experience :handle-choose-exp-details="handleChooseExpDetails" />
    <ExperienceDetails v-if="choosedExpDetails > 0" :handle-close-exp-details="handleCloseExpDetails" />
    <Contact />
    <Footer />
</template>
