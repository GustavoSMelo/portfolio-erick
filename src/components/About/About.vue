<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const titleTyped = ref('');
const titleString = '> Sobre mim';

const handleTypeTitle = () => {
    for (let i = titleTyped.value.length; i < titleString.length; i++) {
        setTimeout(() => {
            titleTyped.value += titleString[i];
        }, 100 * i);
    }
};

onMounted(() => {
    const observerIntersectCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('titleText')) {
                    handleTypeTitle();
                }

                if (entry.target.classList.contains('aboutBox')) {
                    const element = window.document.querySelector('.aboutBox');
                    element?.classList.add('aboutBoxShowAnimate');
                }

                if(entry.target.classList.contains('erickCartContainer')) {
                    const element = window.document.querySelector('.erickCartContainer');
                    element?.classList.add('erickCartContainerAnimation');
                }
            }
        })
    };

    const observer = new IntersectionObserver(observerIntersectCallback);

    const classes = [
        '.titleText',
        '.aboutBox',
        '.erickCartContainer'
    ];

    classes.forEach(className => {
        const element = window.document.querySelector(`${className}`);

        if (element) observer.observe(element);
    })
});

</script>
<template>
    <div class="aboutContainer">
        <h1 class="titleText">{{ titleTyped }}</h1>

        <div class="aboutBox">
            <figure class="mathFigures">
                <img src="../../assets/math1.png" alt="math1" />
                <img src="../../assets/math2.png" alt="math2" />
                <img src="../../assets/math3.png" alt="math3" />
                <img src="../../assets/math4.png" alt="math3" />
                <img src="../../assets/math5.png" alt="math3" />
                <img src="../../assets/math6.png" alt="math3" />
                <img src="../../assets/math7.png" alt="math3" />
                <img src="../../assets/math8.png" alt="math3" />
                <img src="../../assets/math9.png" alt="math3" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sint tempora incidunt, sequi
                exercitationem rem? Dolores, illum corporis labore at amet nobis dolor laborum obcaecati nihil, iusto
                dicta excepturi modi.</p>
            <figure class="programmingFigures">
                <img src="../../assets/programming1.png" alt="math1" />
                <img src="../../assets/programming2.png" alt="math2" />
                <img src="../../assets/programming3.png" alt="math3" />
                <img src="../../assets/programming4.png" alt="math3" />
                <img src="../../assets/programming5.png" alt="math3" />
                <img src="../../assets/programming6.png" alt="math3" />
                <img src="../../assets/programming7.png" alt="math3" />
                <img src="../../assets/programming8.png" alt="math3" />
                <img src="../../assets/programming9.png" alt="math3" />
            </figure>
        </div>

        <h2 class="rotatedBoxAlertText">Essa caixa nao esta torta, e apenas uma questao de perspectiva</h2>

        <figure class="erickCartContainer">
            <img class="erickCart" src="../../assets/erickcarrinho.png" alt="Erick carrinho" />
            <hr />
        </figure>
    </div>
</template>
<style lang="scss" src="./about.style.scss" scoped />
