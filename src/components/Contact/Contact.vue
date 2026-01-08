<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const titleTyped = ref('');
const titleString = '> Contato';

const handleTypeTitle = (): void => {
    for (let i = titleTyped.value.length; i < titleString.length; i++) {
        setTimeout(() => {
            titleTyped.value += titleString[i];
        }, 100 * i);
    }
};

const handleOpenEmail = () => {
    const email = 'erick.nascimento12@hotmail.com';
    const body = 'Vim aqui pelo portfolio';
    const subject = 'Contato via portfolio';

    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`);
};

const handleOpenLinkedin = () => {
    window.open(`https://www.linkedin.com/in/erickalvesn/`, 'blank');
};

const handleOpenKaggle = () => {
    window.open('https://www.kaggle.com/erickalves12', 'blank');
};

const handleOpenGithub = () => {
    window.open('https://github.com/Duniinjja', 'blank');
};

const handleOpenWhatsapp = () => {
    window.open('https://api.whatsapp.com/send?phone=5511978289528');
};

onMounted(() => {
    const observerCallback = (entries: Array<IntersectionObserverEntry>) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('contactTitle')) handleTypeTitle();

                if (entry.target.classList.contains('contactItemList1')) {
                    const element = window.document.querySelector('.contactItemList1') as any;
                    element?.classList.add('contactItemListAnimation1');

                    observer.unobserve(element);
                }

                if (entry.target.classList.contains('contactItemList2')) {
                    const element = window.document.querySelector('.contactItemList2') as any;
                    element?.classList.add('contactItemListAnimation2');
                    observer.unobserve(element);
                }

                if (entry.target.classList.contains('contactItemList3')) {
                    const element = window.document.querySelector('.contactItemList3') as any;
                    element?.classList.add('contactItemListAnimation3');
                    observer.unobserve(element);
                }

                if (entry.target.classList.contains('contactItemList4')) {
                    const element = window.document.querySelector('.contactItemList4') as any;
                    element?.classList.add('contactItemListAnimation4');
                    observer.unobserve(element);
                }

                if (entry.target.classList.contains('contactItemList5')) {
                    const element = window.document.querySelector('.contactItemList5') as any;
                    element?.classList.add('contactItemListAnimation5');
                    observer.unobserve(element);
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback);

    const classes = ['.contactTitle', '.contactItemList1', '.contactItemList2', '.contactItemList3', '.contactItemList4', '.contactItemList5'];
    classes.forEach(className => {
        const element = window.document.querySelector(className);
        if (element) observer.observe(element);
    });
});
</script>
<template>
    <div class="contactContainer">
        <h1 class="contactTitle">{{ titleTyped }}</h1>

        <h3 class="contactSubtitle">
            Gostou do meu perfil ?<br />
            Entre em contato com as minhas redes:
        </h3>

        <ul class="contactList">
            <li class="contactItemList1" @click="handleOpenEmail"><img src="../../assets/google.png"
                    alt="Google Logo" /> Contate-me via Email
            </li>
            <li class="contactItemList2" @click="handleOpenLinkedin"><img src="../../assets/linkedin.png"
                    alt="Linkedin Logo" />Contate-me via
                Linkedin</li>
            <li class="contactItemList3" @click="handleOpenKaggle"> <img src="../../assets/k.png" alt="Kaggle Logo" />Contate-me via Kaggle</li>
            <li class="contactItemList4" @click="handleOpenGithub"><img src="../../assets/github.png" alt="Github Logo" />Contate-me via Github
            </li>
            <li class="contactItemList5" @click="handleOpenWhatsapp"><img src="../../assets/whatsapp.png" alt="Whatsapp Logo" />Contate-me via
                Whatsapp</li>
        </ul>
    </div>
</template>
<style lang="scss" scoped src="./contact.style.scss" />
