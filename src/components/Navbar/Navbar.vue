<script lang="ts" setup>
import { ref } from 'vue';
import type { INavbar } from './navbar.interface';

const mobileMenuIsActive = ref(false);
const mobileMenuDesappearsAnimation = ref(false);

const handleMobileMenu = (newValue: boolean): void => {
    if (newValue === false) {
        mobileMenuDesappearsAnimation.value = true;

        setTimeout(() => {
            mobileMenuIsActive.value = newValue;
            mobileMenuDesappearsAnimation.value = false
            return;
        }, 800);

        return;
    }

    mobileMenuIsActive.value = newValue;
};

const handleDownloadCV = (): void => {
    const cvLink = window.document.createElement('a');
    cvLink.href = '/curriculo.pdf';
    cvLink.download = 'ErickAlves-CV.pdf'
    cvLink.click();
    document.removeChild(cvLink);
};

const scrollTo = (view: INavbar['scrollToView']): void => {
    switch (view) {
        case "about":
            const about = window.document.querySelector('.aboutContainer');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenu(false)
            break;
        case "contact":
            const contact = window.document.querySelector('.contactContainer');
            if (contact) contact.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenu(false)
            break;
        case "experience":
            const experience = window.document.querySelector('.experienceContainer');
            if (experience) experience.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenu(false)
            break;
        case "projects":
            const projects = window.document.querySelector('.projectsContainer');
            if (projects) projects.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenu(false)
            break;
        case "skills":
            const skills = window.document.querySelector('.skillsContainer');
            if (skills) skills.scrollIntoView({ behavior: 'smooth' });
            handleMobileMenu(false)
            break;
    };
};

</script>
<template>
    <nav class="navbarContainer">
        <figure>
            <i class="pi pi-crown" />
            <figcaption>
                <span>Erick</span> <br />
                <span class="lastName">Alves</span>
            </figcaption>
        </figure>

        <div class="controlsButtonsContainer">
            <button type="button" @click="scrollTo('about')">Sobre</button>
            <button type="button" @click="scrollTo('projects')">Projetos</button>
            <button type="button" @click="scrollTo('skills')">Skills</button>
            <button type="button" @click="scrollTo('experience')">Experiência</button>
            <button type="button" @click="scrollTo('contact')">Contato</button>
            <button class="btnDownloadCv" type="button" @click="handleDownloadCV">Baixar CV</button>
        </div>

        <span class="mobileIcon" @click="handleMobileMenu(true)"><i class="pi pi-bars"></i></span>

        <div class="mobileMenu" v-show="mobileMenuIsActive">
            <span class="closeMenu" @click="handleMobileMenu(false)"></span>
            <ul
                :class="['mobileMenuControlsList', mobileMenuDesappearsAnimation ? 'mobileMenuControlsListDesappear' : '']">
                <figure>
                    <i class="pi pi-crown" />
                    <figcaption>
                        <span>Erick</span> <br />
                        <span class="lastName">Alves</span>
                    </figcaption>
                </figure>
                <li @click="scrollTo('about')">Sobre</li>
                <li @click="scrollTo('projects')">Projetos</li>
                <li @click="scrollTo('skills')">Skills</li>
                <li @click="scrollTo('experience')">Experiência</li>
                <li @click="scrollTo('contact')">Contato</li>
                <li @click="handleDownloadCV">Baixar CV</li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped src="./navbar.style.scss" />
