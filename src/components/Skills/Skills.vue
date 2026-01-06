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
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
                <li>
                    <img src="../../assets/programming1.png" />
                    <p>Python</p>
                    <hr />
                    <hr />
                </li>
            </ul>
        </div>
    </div>
</template>
<style lang="scss" scoped src="./skills.style.scss" />
