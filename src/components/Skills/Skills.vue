<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const titleTyped = ref('');
const titleString = '> Skills';

const handleTypeTitle = (): void => {
    for (let i = titleTyped.value.length; i < titleString.length; i++) {
        setTimeout(() => {
            titleTyped.value += titleString[i];
        }, i * 100);
    }
};

onMounted(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('skillTitle')) {
                    handleTypeTitle();
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback);
    const classes = ['.skillTitle'];

    classes.forEach(className => {
        const element = window.document.querySelector(className);
        if (element) observer.observe(element);
    });
});
</script>
<template>
    <div class="skillsContainer">
        <h1 class="skillTitle">{{ titleTyped }}</h1>

        <div class="overflowWrapper">
            <ul>
                <li>
                    <img src="../../assets/programming3.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                 <li>
                    <img src="../../assets/programming6.png" />
                    <p>Power BI</p>
                    <hr />
                    <hr />
                </li>
                 <li>
                    <img src="../../assets/programming7.png" />
                    <p>Windows Ecosystem</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming5.png" />
                    <p>Excel Avancado</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/math9.png" />
                    <p>Analise de dados</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Automação</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/math5.png" />
                    <p>Tratamento de dados</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Relatório e indicadores</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming2.png" />
                    <p>Resolução de problemas</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming4.png" />
                    <p>Visual Basic</p>
                    <hr />
                    <hr />
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./skills.style.scss" />
