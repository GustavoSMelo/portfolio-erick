<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { experienceList } from '../../helper/experienceList';

const { handleChooseExpDetails } = defineProps<{ handleChooseExpDetails: (choosed: 1 | 2 | 3) => void }>();
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
                if (entry.target.classList.contains('titleTypedExperience')) handleTitleType();

                if (entry.target.classList.contains('expItem1')) {
                    const expItem1 = window.document.querySelector('.expItem1') as any;
                    expItem1?.classList.add('expItem1Animate');

                    observer.unobserve(expItem1);
                }

                if (entry.target.classList.contains('expItem2')) {
                    const expItem2 = window.document.querySelector('.expItem2') as any;
                    expItem2?.classList.add('expItem2Animate');

                    observer.unobserve(expItem2);
                }

                if (entry.target.classList.contains('expItem3')) {
                    const expItem3 = window.document.querySelector('.expItem3') as any;
                    expItem3?.classList.add('expItem3Animate');

                    observer.unobserve(expItem3);
                }

                if (entry.target.classList.contains('expItem1Mobile')) {
                    const expItem1Mobile = window.document.querySelector('.expItem1Mobile') as any;
                    expItem1Mobile?.classList.add('expItemMobileAnimate');

                    observer.unobserve(expItem1Mobile);
                }

                if (entry.target.classList.contains('expItem2Mobile')) {
                    const expItem2Mobile = window.document.querySelector('.expItem2Mobile') as any;
                    expItem2Mobile?.classList.add('expItemMobileAnimate');

                    observer.unobserve(expItem2Mobile);
                }

                if (entry.target.classList.contains('expItem3Mobile')) {
                    const expItem3Mobile = window.document.querySelector('.expItem3Mobile') as any;
                    expItem3Mobile?.classList.add('expItemMobileAnimate');

                    observer.unobserve(expItem3Mobile);
                }
            };
        })
    };

    const observer = new IntersectionObserver(observerCallback);
    const classes = ['.titleTypedExperience', '.expItem1', '.expItem2', 'expItem3', '.expItem1Mobile', '.expItem2Mobile', '.expItem3Mobile'];

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
            <li class="experienceItem expItem1">
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(1)"></i>
                <span>
                    <h3>{{ experienceList[0]?.position }}</h3>
                    <h3>{{ experienceList[0]?.startAt }} ~ {{ experienceList[0]?.endAt }}</h3>
                    <h3>{{ experienceList[0]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(1)">Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem expItem2">
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(2)"></i>
                <span>
                    <h3>{{ experienceList[1]?.position }}</h3>
                    <h3>{{ experienceList[1]?.startAt }} ~ {{ experienceList[1]?.endAt }}</h3>
                    <h3>{{ experienceList[1]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(2)">Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem expItem3">
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(3)"></i>
                <span>
                    <h3>{{ experienceList[2]?.position }}</h3>
                    <h3>{{ experienceList[2]?.startAt }} ~ {{ experienceList[2]?.endAt }}</h3>
                    <h3>{{ experienceList[2]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(3)">Ver detalhes</b>
                </span>
            </li>
        </ul>

        <!-- Mobile Version:  -->
        <ul class="experienceListMobile">
            <li class="experienceItem expItem1Mobile">
                <hr class="experienceTrackItem" />
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(1)"></i>
                <span>
                    <h3>{{ experienceList[0]?.position }}</h3>
                    <h3>{{ experienceList[0]?.startAt }} ~ {{ experienceList[0]?.endAt }}</h3>
                    <h3>{{ experienceList[0]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(1)">Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem expItem2Mobile">
                <hr class="experienceTrackItem" />
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(2)"></i>
                <span>
                    <h3>{{ experienceList[1]?.position }}</h3>
                    <h3>{{ experienceList[1]?.startAt }} ~ {{ experienceList[1]?.endAt }}</h3>
                    <h3>{{ experienceList[1]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(2)">Ver detalhes</b>
                </span>
            </li>

            <li class="experienceItem expItem3Mobile">
                <i class="pi pi-circle-fill checkpoint" @click="handleChooseExpDetails(3)"></i>
                <span>
                    <h3>{{ experienceList[2]?.position }}</h3>
                    <h3>{{ experienceList[2]?.startAt }} ~ {{ experienceList[2]?.endAt }}</h3>
                    <h3>{{ experienceList[2]?.companyName }}</h3>
                    <b @click="handleChooseExpDetails(3)">Ver detalhes</b>
                </span>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped src="./experience.style.scss" />
