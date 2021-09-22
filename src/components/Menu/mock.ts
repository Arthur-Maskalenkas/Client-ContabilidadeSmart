import { LinkMenuDesktopProps } from 'components/LinkMenuDesktop'
import { LinkMenuMobileProps } from 'components/LinkMenuMobile'

export const DropPremiumMockMobile: LinkMenuMobileProps = {
  title: 'Premium',
  dropdownOptions: [
    {
      title: 'Aceleradora',
      slug: 'aceleradora'
    },
    {
      title: 'BPO financeiro',
      slug: 'bpo_financeiro'
    }
  ]
}

export const DropNossoTrabalhoMockMobile: LinkMenuMobileProps = {
  title: 'Nosso Trabalho',
  dropdownOptions: [
    { title: 'Contabil', slug: 'contabil' },
    { title: 'Legalização', slug: 'legalizacao' },
    { title: 'Departamento Pessoal', slug: 'departamento_pessoal' },
    { title: 'Fiscal e Tributária', slug: 'fiscal_e_tributaria' },
    { title: 'Pessoa Fisica', slug: 'pessoa_fisica' },
    { title: 'Certificado Digital', slug: 'certificado_digital' }
  ]
}

export const DropBlogMockMobile: LinkMenuMobileProps = {
  title: 'Blog',
  dropdownOptions: [
    { title: 'infoproduto', slug: 'infoproduto' },
    { title: 'Midias Sociais', slug: 'midias_sociais' },
    { title: 'Tendencias', slug: 'tendencias' },
    { title: 'Noticias', slug: 'noticias' },
    { title: 'Mei', slug: 'mei' },
    { title: 'Contabilidade', slug: 'contabilidade' }
  ]
}

export const DropPremiumMockDesktop: LinkMenuDesktopProps = {
  title: 'Premium',
  LinkMenuDesktopOptions: [
    { title: 'Aceleradora', slug: 'link 2' },
    { title: 'BPO financeiro', slug: 'BPO financeiro' }
  ]
}

export const DropNossoTrabalhoMockDesktop: LinkMenuDesktopProps = {
  title: 'Nosso Trabalho',
  LinkMenuDesktopOptions: [
    { title: 'Contabil', slug: 'contabil' },
    { title: 'Legalização', slug: 'legalizacao' },
    { title: 'Departamento Pessoal', slug: 'departamento_pessoal' },
    { title: 'Fiscal e Tributária', slug: 'fiscal_e_tributaria' },
    { title: 'Pessoa Fisica', slug: 'pessoa_fisica' },
    { title: 'Certificado Digital', slug: 'certificado_digital' }
  ]
}

export const DropBlogMockDesktop: LinkMenuDesktopProps = {
  title: 'Blog',
  LinkMenuDesktopOptions: [
    { title: 'infoproduto', slug: 'infoproduto' },
    { title: 'Midias Sociais', slug: 'midias_sociais' },
    { title: 'Tendencias', slug: 'tendencias' },
    { title: 'Noticias', slug: 'noticias' },
    { title: 'Mei', slug: 'mei' },
    { title: 'Contabilidade', slug: 'contabilidade' }
  ]
}
