interface IExperienceList {
    companyName: string;
    companyImage: string;
    startAt: string;
    endAt: string;
    locale: string;
    position: string;
    description: string;
}

const experienceList: Array<IExperienceList> = [
    {
        companyImage: 'dow.png',
        companyName: 'DOW Chemical',
        startAt: '01/07/2019',
        endAt: '12/02/2020',
        locale: 'Sao Paulo/SP',
        position: 'Business Analyst',
        description: 'Atuação na área financeira com análise de dados, controle de gastos, faturamento em XML e organização fiscal, utilizando Egestor. Experiência em e-commerce, relatórios gerenciais e automação de rotinas financeiras com Python.'
    },
    {
        companyImage: 'AA.png',
        companyName: 'Alcoolicos Anonimos',
        startAt: '22/09/2021',
        endAt: '01/06/2024',
        locale: 'Sao Paulo/SP',
        position: 'Data Analyst',
        description: 'Experiência em controle de documentos, otimização de processos e elaboração de relatórios e gráficos analíticos para apoio à tomada de decisões, utilizando Power BI, Excel, VBA, Python entre outros'
    },
    {
        companyImage: 'grupouop.jpg',
        companyName: 'Grupo UOP',
        startAt: '06/10/2025',
        endAt: 'Atual',
        locale: 'Sao Paulo/SP',
        position: 'Data Analyst',
        description: 'Atuo no Grupo UOP como Analista de Dados e Desenvolvedor, focado em análise de dados, automações e relatórios para apoio à tomada de decisão, garantindo organização e confiabilidade das informações.'
    },
];

export { experienceList }; export type { IExperienceList };

