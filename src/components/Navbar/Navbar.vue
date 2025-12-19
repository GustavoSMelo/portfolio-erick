<script lang="ts" setup>
import { ref } from 'vue';

const mobileMenuIsActive = ref(false);
const mobileMenuDesappearsAnimation = ref(false);

const handleMobileMenu = (newValue: boolean) => {
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
            <button type="button">Sobre</button>
            <button type="button">Projetos</button>
            <button type="button">Skills</button>
            <button type="button">Experiencia</button>
            <button type="button">Contato</button>
            <button type="button">Baixar CV</button>
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
                <li>Sobre</li>
                <li>Projetos</li>
                <li>Skills</li>
                <li>Experiencia</li>
                <li>Contato</li>
                <li>Baixar CV</li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped src="./navbar.style.scss" />
