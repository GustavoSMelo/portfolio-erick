<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const projectProductionCounter = ref(0);

const increaseProjectCounter = () => {
    if (projectProductionCounter.value < 50) {
        setTimeout(() => {
            projectProductionCounter.value++
            increaseProjectCounter();
        }, 40)
    }
};

onMounted(() => {
    increaseProjectCounter();
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
                        <h4>{{projectProductionCounter}}</h4> <span>Projetos em producao</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>00</h4> <span>Dashboards</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>00</h4> <span>Pipelines</span>
                    </div>
                    <div class="projectCounterDetails">
                        <h4>00</h4> <span>Certificacoes</span>
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
