<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const titleTyped = ref('');
const titleString = '> Experiencia';

const handleTitleType = () => {
    for (let i = titleTyped.value.length; i < titleString.length; i++) {
        setTimeout(() => {
            titleTyped.value += titleString[i];
        }, i * 100);
    }
};

onMounted(() => {
    const observerCallback = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('titleTypedExperience')) {
                    handleTitleType();
                }
            };
        })
    };

    const observer = new IntersectionObserver(observerCallback);
    const classes = ['.titleTypedExperience'];

    classes.forEach(className => {
        const element = window.document.querySelector(className);
        if (element) observer.observe(element);
    })
});
</script>
<template>
    <div class="experienceContainer">
        <h1 class="titleTypedExperience">{{ titleTyped }}</h1>

        <hr class="timelineExp" />
        <ul class="experienceList">
            <li class="experienceItem">
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem">
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem">
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>
        </ul>

        <!-- Mobile Version:  -->
        <ul class="experienceListMobile">
            <li class="experienceItem">
                <hr class="experienceTrackItem" />
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem">
                <hr class="experienceTrackItem" />
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem">
                <i class="pi pi-circle-fill checkpoint"></i>
                <span>
                    <h3>Analista de dados</h3>
                    <h3>10/10/2010 ~ 10/10/2010</h3>
                    <h3>Empresa Name inc.</h3>
                    <b>Ver detalhes</b>
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped src="./experience.style.scss" />
