import { MenuProps } from 'components/Menu'

const mock: MenuProps = {
  items: [
    {
      title: 'infoprodutores',
      slug: 'infoprodutores'
    },
    {
      title: 'Premium',
      dropdownOptions: [
        {
          titleOption: 'Aceleradora',
          slug: 'aceleradora'
        },
        {
          titleOption: 'BPO financeiro',
          slug: 'bpo_financeiro'
        }
      ]
    },
    {
      title: 'Nosso trabalho',
      dropdownOptions: [
        {
          titleOption: 'Contabil',
          slug: 'contabil'
        },
        {
          titleOption: 'Legalização',
          slug: 'legalizacao'
        },
        {
          titleOption: 'Departamento Pessoal',
          slug: 'departamento_pessoal'
        },
        {
          titleOption: 'Fiscal e Tributária',
          slug: 'fiscal_e_tributaria'
        },
        {
          titleOption: 'Pessoa Fisica',
          slug: 'pessoa_fisica'
        },
        {
          titleOption: 'Certificado Digital',
          slug: 'certificado_digital'
        }
      ]
    },
    {
      title: 'sobre nós',
      slug: 'sobre nós'
    },
    {
      title: 'Blog',
      dropdownOptions: [
        {
          titleOption: 'infoproduto',
          slug: 'infoproduto'
        },
        {
          titleOption: 'Midias Sociais',
          slug: 'midias_sociais'
        },
        {
          titleOption: 'Tendencias',
          slug: 'tendencias'
        },
        {
          titleOption: 'Noticias',
          slug: 'noticias'
        },
        {
          titleOption: 'Mei',
          slug: 'mei'
        },
        {
          titleOption: 'Contabilidade',
          slug: 'contabilidade'
        }
      ]
    },
    {
      title: 'Home',
      slug: 'home'
    }
  ]
}

export default mock
