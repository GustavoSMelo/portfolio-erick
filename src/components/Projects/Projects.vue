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

const handleAccessProject = (projectNumber: 1 | 2 | 3 | 4) => {
    switch (projectNumber) {
        case 1:
            window.open('https://github.com/Duniinjja/chatbot-01', 'blank');
            break;
        case 2:
            window.open('https://github.com/Duniinjja/Verificador-de-categoria', 'blank');
            break;
        case 3:
            window.open('https://github.com/Duniinjja/Analista-de-categoria---Desktop', 'blank');
            break;
        case 4:
            window.open('https://github.com/Duniinjja/Sistema-de-Gestao', 'blank');
            break;
        default:
            window.open('https://github.com/Duniinjja/chatbot-01', 'blank');
            break;
    };
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

                if (entry.target.classList.contains('projectItem4')) {
                    const projectItem3 = window.document.querySelector('.projectItem4') as any;
                    projectItem3.style.opacity = 1;
                    projectItem3?.classList.add('projectItemAnimate');
                }
            }
        })
    };

    const observer = new IntersectionObserver(observerIntersectCallback);
    const classes = ['.titleTextProject', '.projectItem1', '.projectItem2', '.projectItem3', '.projectItem4'];

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
                <h1>AI.Chatbot</h1>
                <img src="../../assets/project1.jpeg" />
                <p>
                    Projeto desenvolvido para auxiliar usuários na correta categorização de gastos por meio de
                    palavras-chave e perguntas em linguagem natural. Iniciado como um chatbot simples baseado em regras,
                    o projeto evoluiu para uma versão web interativa, permitindo consultas mais intuitivas e rápidas.
                    O objetivo é reduzir dúvidas, padronizar lançamentos e facilitar o dia a dia dos usuários,
                    oferecendo respostas claras e acessíveis de forma automatizada.
                </p>

                <button type="button" @click="handleAccessProject(1)">Ver repositorio</button>
            </li>

            <li :class="['projectItem', 'projectItem2']">
                <h1>Verificador de categoria</h1>
                <img src="../../assets/project2.jpeg" />
                <p>
                    Verificador de Categoria é uma ferramenta criada para validar e padronizar a classificação de
                    receitas e despesas, garantindo que todas as categorias estejam corretamente mapeadas no de/para. O
                    objetivo é aumentar a confiabilidade dos dados financeiros, reduzir erros manuais e facilitar
                    análises e relatórios, além de evoluir continuamente com versionamento e validações automáticas.
                </p>

                <button type="button" @click="handleAccessProject(2)">Ver repositorio</button>
            </li>
            <li :class="['projectItem', 'projectItem3']">
                <h1>Analista de categoria</h1>
                <img src="../../assets/project3.jpeg" />
                <p>
                    Analista de Categoria é a evolução do Verificador de Categoria para ambiente desktop. Nessa versão,
                    o usuário pode subir uma planilha e o sistema analisa automaticamente os dados com base nas
                    categorias informadas, validando-as a partir de uma lista de de/para. O objetivo é agilizar
                    análises, reduzir erros manuais e dar mais autonomia ao analista no processo de categorização. </p>

                <button type="button" @click="handleAccessProject(3)">Ver repositorio</button>
            </li>
            <li :class="['projectItem', 'projectItem4']">
                <h1>Up System</h1>
                <img src="../../assets/project4.jpeg" />
                <p>
                    O Up System é um sistema de gestão empresarial em desenvolvimento, criado com o objetivo de
                    centralizar o controle e a administração de múltiplas empresas em uma única plataforma. O projeto
                    busca oferecer uma solução organizada, eficiente e escalável para a gestão de processos
                    empresariais.
                    Desenvolvido em Python, o Up System está sendo construído com foco em evolução contínua, permitindo
                    a implementação gradual de novas funcionalidades conforme as necessidades do negócio e do mercado.
                    O sistema tem como propósito simplificar a gestão, melhorar o controle de informações e servir como
                    uma base sólida para futuras expansões e integrações. </p>

                <button type="button" @click="handleAccessProject(4)">Ver repositorio</button>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" src="./projects.style.scss" />
