<script setup lang="ts">
import { onMounted, ref } from 'vue';

const titleTyped = ref('');
const titleString = '> Projetos';

const handleTypeTitle = (): void => {
    for (let i = titleTyped.value.length; i < titleString.length; i++) {
        setTimeout(() => {
            titleTyped.value += titleString[i];
        }, 100 * i);
    }
};

onMounted(() => {
    const observerIntersectCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('titleTextProject')) {
                    handleTypeTitle();
                }

                if (entry.target.classList.contains('projectItem1')) {
                    const projectItem1 = window.document.querySelector('.projectItem1') as any;
                    projectItem1!.style.opacity = 1;
                    projectItem1?.classList.add('projectItemAnimate');
                }

                if (entry.target.classList.contains('projectItem2')) {
                    const projectItem2 = window.document.querySelector('.projectItem2') as any;
                    projectItem2.style.opacity = 1;
                    projectItem2?.classList.add('projectItemAnimate');
                }

                if (entry.target.classList.contains('projectItem3')) {
                    const projectItem3 = window.document.querySelector('.projectItem3') as any;
                    projectItem3.style.opacity = 1;
                    projectItem3?.classList.add('projectItemAnimate');
                }
            }
        })
    };

    const observer = new IntersectionObserver(observerIntersectCallback);
    const classes = ['.titleTextProject', '.projectItem1', '.projectItem2', '.projectItem3'];

    classes.forEach(className => {
        const element = window.document.querySelector(className);
        if (element) observer.observe(element);
    });
});
</script>

<template>
    <div class="projectsContainer">
        <h1 class="titleTextProject">{{ titleTyped }}</h1>

        <ul class="projectsList">
            <li :class="['projectItem', 'projectItem1']">
                <h1>Automacao</h1>
                <video controls>
                    <source src="../../assets/videoBoilerplate.mp4" type="video/mp4" />
                </video>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sequi quasi, eos voluptas
                    quaerat,
                    neque dolores culpa blanditiis aut cupiditate iure accusantium numquam. Similique obcaecati placeat
                    magni esse accusamus dolore.
                </p>

                <button type="button">Baixar</button>
            </li>
            <li :class="['projectItem', 'projectItem2']" >
                <h1>Automacao</h1>
                <video controls>
                    <source src="../../assets/videoBoilerplate.mp4" type="video/mp4" />
                </video>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sequi quasi, eos voluptas
                    quaerat,
                    neque dolores culpa blanditiis aut cupiditate iure accusantium numquam. Similique obcaecati placeat
                    magni esse accusamus dolore.
                </p>

                <button type="button">Baixar</button>
            </li>
            <li :class="['projectItem', 'projectItem3']">
                <h1>Automacao</h1>
                <video controls>
                    <source src="../../assets/videoBoilerplate.mp4" type="video/mp4" />
                </video>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti sequi quasi, eos voluptas
                    quaerat,
                    neque dolores culpa blanditiis aut cupiditate iure accusantium numquam. Similique obcaecati placeat
                    magni esse accusamus dolore.
                </p>

                <button type="button">Baixar</button>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" src="./projects.style.scss" />
