import { LinkMenuMobileProps } from 'components/LinkMenuMobile'

export const DropPremiumMock: LinkMenuMobileProps = {
  title: 'Premium',
  dropdownOptions: [
    {
      title: 'Aceleradora',
      link: 'link 2'
    },
    {
      title: 'BPO financeiro',
      link: 'BPO financeiro'
    }
  ]
}

export const DropNossoTrabalhoMock: LinkMenuMobileProps = {
  title: 'Nosso Trabalho',
  dropdownOptions: [
    { title: 'Contabil', link: '#' },
    { title: 'Legalização', link: 'BPO financeiro' },
    { title: 'Departamento Pessoal', link: '#' },
    { title: 'Fiscal e Tributária', link: '#' },
    { title: 'Pessoa Fisica', link: '#' },
    { title: 'Certificado Digital', link: '#' }
  ]
}

export const DropBlogMock: LinkMenuMobileProps = {
  title: 'Nosso Trabalho',
  dropdownOptions: [
    { title: 'infoproduto', link: '#' },
    { title: 'Midias Sociais', link: 'BPO financeiro' },
    { title: 'Tendencias', link: '#' },
    { title: 'Noticias', link: '#' },
    { title: 'Mei', link: '#' },
    { title: 'Contabilidade', link: '#' }
  ]
}
