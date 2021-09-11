import Sobre, { SobreTemplateProps } from 'templates/Sobre'

export default function sobre(props: SobreTemplateProps) {
  return <Sobre {...props} />
}

export function getStaticProps() {
  return {
    props: {
      description:
        'Bom, eu estava sem ideias de projetos então decidi criar um crud completo com esse projeto. Nele eu utilizo o NexJS gerando paginas dinamicas, estaticas, do lado do servidor e varias outras configuraçõesque ele proporciona.',
      imagem: { src: 'img/perfil.jpg', alt: 'imagem de perfil' }
    }
  }
}
