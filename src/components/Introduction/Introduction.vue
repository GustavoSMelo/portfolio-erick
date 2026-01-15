<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const projectProductionCounter = ref(0);
const certificationsCounter = ref(0);
const coffeeCounter = ref(0);
const workedHours = ref(0);

const increaseProjectCounter = () => {
    if (projectProductionCounter.value < 7) {
        setTimeout(() => {
            projectProductionCounter.value++
            increaseProjectCounter();
        }, 340);
    }
};

const increaseCertificationsCounter = () => {
    if (certificationsCounter.value < 26) {
        setTimeout(() => {
            certificationsCounter.value++;
            increaseCertificationsCounter();
        }, 100);
    }
};

const increaseCoffeeCounter = () => {
    if (coffeeCounter.value < 654) {
        setTimeout(() => {
            coffeeCounter.value++;
            increaseCoffeeCounter();
        }, 13);
    }
};

const increaseWorkedHours = () => {
        if (workedHours.value < 900) {
        setTimeout(() => {
            workedHours.value++;
            increaseWorkedHours();
        }, 10);
    }
};

onMounted(() => {
    increaseProjectCounter();
    increaseCertificationsCounter();
    increaseCoffeeCounter();
    increaseWorkedHours();
});

</script>

<template>
    <div class="introductionContainer">
        <div class="nameIntroduction">
            <div class="nameContainer">
                <h1>
                    Erick <br />
                    <span>Alves</span>
                </h1>

                <h3>Desenvolvedor Python / Analista de dados</h3>
                <p>Transformo dados em decisões e construo automações/serviços<br /> em Python.
                    Foco em BI, pipelines, APIs, dashboards<br /> e modelos preditivos.</p>


                <span class="gridProjects">
                    <div class="projectCounterDetails">
                        <h4>{{ projectProductionCounter }}</h4> <span>Projetos em produção</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>{{ certificationsCounter }}</h4> <span>Certificações</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>{{ coffeeCounter }}</h4> <span>Xícaras de café</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>{{ workedHours }}</h4> <span>Horas trabalhadas</span>
                    </div>

                </span>
            </div>

            <figure class="erickImage">
                <img src="../../assets/erick.png" alt="erick image" />
                <figcaption>Bem vindo ao meu perfil :D </figcaption>
            </figure>
        </div>
    </div>
</template>

<style src="./introduction.style.scss" lang="scss" scoped />
