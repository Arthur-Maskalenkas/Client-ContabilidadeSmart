import { MenuProps } from '.'

const MenuMock: MenuProps = {
  menuSelects: [
    { title: 'infoprodutores' },
    {
      title: 'Premium',
      options: [
        { titleOption: 'Aceleradora', slug: 'aceleradora' },
        { titleOption: 'BPO financeiro', slug: 'bpo_financeiro' }
      ]
    },
    {
      title: 'Nosso trabalho',
      options: [
        { titleOption: 'Contabil', slug: 'contabil' },
        { titleOption: 'Legalização', slug: 'legalizacao' },
        { titleOption: 'Departamento Pessoal', slug: 'departamento_pessoal' },
        { titleOption: 'Fiscal e Tributária', slug: 'fiscal_e_tributaria' },
        { titleOption: 'Pessoa Fisica', slug: 'pessoa_fisica' },
        { titleOption: 'Certificado Digital', slug: 'certificado_digital' }
      ]
    },
    { title: 'sobre nós' },
    {
      title: 'Blog',
      options: [
        { titleOption: 'infoproduto', slug: 'infoproduto' },
        { titleOption: 'Midias Sociais', slug: 'midias_sociais' },
        { titleOption: 'Tendencias', slug: 'tendencias' },
        { titleOption: 'Noticias', slug: 'noticias' },
        { titleOption: 'Mei', slug: 'mei' },
        { titleOption: 'Contabilidade', slug: 'contabilidade' }
      ]
    },
    { title: 'Home' }
  ]
}

export default MenuMock
