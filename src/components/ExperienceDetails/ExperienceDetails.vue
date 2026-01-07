<script lang="ts" setup>
import { ref } from 'vue';

const { handleCloseExpDetails } = defineProps<{
    handleCloseExpDetails: () => void
}>();
const playAnimationClose = ref('');

const handleAnimateClose = () => {
    playAnimationClose.value = 'experienceDetailsContentDiSpawn';

    setTimeout(() => {
        handleCloseExpDetails();
    }, 800);
};
</script>

<template>
    <div class="experienceDetailsContainer" @click="handleAnimateClose">
        <div :class="['experienceDetailsContent', playAnimationClose]" @click="event => event.stopPropagation()">
            <header>
                <h1>Detalhes da<br />experiencia</h1>
                <i class="pi pi-times" @click="handleAnimateClose"></i>
            </header>

            <section>
                <span>
                    <figure>
                        <img src="../../assets/erickcarrinho.png" alt="logoEmpresa" />
                        <figcaption>Empresa nome</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <b>Cargo: </b>
                            <p>Analista de dados</p>
                        </li>

                        <li>
                            <b>Periodo do servico: </b>
                            <p>10/10/2010 ~ 10/10/2010</p>
                        </li>

                        <li>
                            <b>Localidade: </b>
                            <p>Sao Paulo/SP</p>
                        </li>
                    </ul>
                </span>
                <h2>Detalhes do servico</h2>
                <p class="workDescription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis eos enim ipsa molestias minima
                    sit quasi magnam obcaecati, suscipit tenetur? Iusto delectus sed maxime officiis, quod architecto
                    illum quasi nemo.</p>

                <button type="button" @click="handleAnimateClose">Fechar</button>
            </section>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./experienceDetails.style.scss" />
