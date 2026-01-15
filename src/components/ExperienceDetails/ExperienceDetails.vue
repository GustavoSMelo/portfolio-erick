<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';
import { type IExperienceList, experienceList } from '../../helper/experienceList';

const { choosedExperience, handleCloseExpDetails } = defineProps<{
    choosedExperience: 0 | 1 | 2 | 3,
    handleCloseExpDetails: () => void
}>();
const playAnimationClose = ref('');
const experienceDetailsInfo = ref<IExperienceList>();

const handleAnimateClose = () => {
    playAnimationClose.value = 'experienceDetailsContentDiSpawn';

    setTimeout(() => {
        handleCloseExpDetails();
    }, 800);
};

onBeforeMount(() => {
    const expList = experienceList[choosedExperience - 1] as IExperienceList;
    experienceDetailsInfo.value = { ...expList };
});
</script>

<template>
    <div class="experienceDetailsContainer" @click="handleAnimateClose">
        <div :class="['experienceDetailsContent', playAnimationClose]" @click="event => event.stopPropagation()">
            <header>
                <h1>Detalhes da<br />experiência</h1>
                <i class="pi pi-times" @click="handleAnimateClose"></i>
            </header>

            <section>
                <span>
                    <figure>
                        <img :src="`/${experienceDetailsInfo?.companyImage}`" alt="logoEmpresa" />
                        <figcaption>{{ experienceDetailsInfo?.companyName }}</figcaption>
                    </figure>
                    <ul>
                        <li>
                            <b>Cargo: </b>
                            <p>{{ experienceDetailsInfo?.position }}</p>
                        </li>

                        <li>
                            <b>Periodo do serviço: </b>
                            <p>{{ experienceDetailsInfo?.startAt }} ~ {{ experienceDetailsInfo?.endAt }}</p>
                        </li>

                        <li>
                            <b>Localidade: </b>
                            <p>{{ experienceDetailsInfo?.locale }}</p>
                        </li>
                    </ul>
                </span>
                <h2>Detalhes do serviço</h2>
                <p class="workDescription">{{ experienceDetailsInfo?.description }}</p>

                <button type="button" @click="handleAnimateClose">Fechar</button>
            </section>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./experienceDetails.style.scss" />
