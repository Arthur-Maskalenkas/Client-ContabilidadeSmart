import Noticias, { NoticiasTemplateProps } from 'templates/Noticias'

import mock from '../templates/Noticias/mock'

export default function noticias(props: NoticiasTemplateProps) {
  return <Noticias {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      NoticiaCardContainer: mock
    }
  }
}
