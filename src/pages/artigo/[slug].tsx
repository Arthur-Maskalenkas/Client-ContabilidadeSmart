import { useRouter } from 'next/dist/client/router'
import Artigo, { ArtigoTemplateProps } from 'templates/Artigo'

import { mockCategorias, mockPaginas, mockPostsRecentes } from 'components/Widget/mock'

import { maisVistosMock, tagsMock, navigationMock } from 'components/MenuAside/mock'

export default function Index(props: ArtigoTemplateProps) {
  const router = useRouter()

  // Se a rota não tiver sido gerada ainda, pode mostrar loading, uma tela de esqueleto...
  if (router.isFallback) return null

  return <Artigo {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'MEI' } }],
    fallback: true // Se não tiver sido feita em build time, ele vai gerar a pagina de erro
  }
}

const texto = `<body contenteditable="true" class="cke_editable cke_editable_themed cke_contents_ltr cke_show_borders" spellcheck="false"><address><p>Hoje em dia é possível aumentar a renda com produtos de venda direta além dos perfumes, cosméticos e produtos de alimentação? Sim.</p><p>Se antes você tinha que andar com uma mochila cargueira cheia de produtos e vender porta-a-porta agora é Net-a-net.</p><p>Hoje no Brasil e no mundo com o novo normal, estamos acompanhando a crescente profissionalização do mercado de venda direta, as grandes empresas brasileiras já estão atuando como multinacionais ou em início de expansão, esse passo foi dado ainda na década de 70 no mercado norte americano.</p><p>Veja os próximos passos no mercado brasileiro que sem dúvida vamos ter nos próximos anos com o novo normal:</p><ol><li>Uso da Internet tanto na venda direta, como prospecção de novos consumidores;</li><li>Novos produtos e linhas diferentes das tradicionais;</li><li>A procura de novas ferramentas e treinamentos online;</li></ol><p>Milhares de leitores tem ideia da importância crescente da internet, utilizando celulares smartphones das marcas Xiaomi, Iphone e Samsung como ferramenta e não um fim, seja para aprendizado ou para localizar e expandir novas listas de prospects.</p><p><br></p><p><strong>Veja a baixo anúncios da Avon nas décadas de 1940 e 1950</strong></p><p><span tabindex="-1" contenteditable="false" data-cke-widget-wrapper="1" data-cke-filter="off" class="cke_widget_wrapper cke_widget_inline cke_image_nocaption" data-cke-display-name="Imagem" data-cke-widget-id="6"><img alt="" data-cke-saved-src="https://contabilidadevotuporanga.com.br/wp-content/uploads/2020/10/anuncios-avon-contabilidade-votuporanga.jpg" src="https://contabilidadevotuporanga.com.br/wp-content/uploads/2020/10/anuncios-avon-contabilidade-votuporanga.jpg" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fcontabilidadevotuporanga.com.br%2Fwp-content%2Fuploads%2F2020%2F10%2Fanuncios-avon-contabilidade-votuporanga.jpg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22%22%2C%22height%22%3A%22%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22none%22%2C%22classes%22%3Anull%7D" data-cke-widget-upcasted="1" data-cke-widget-keep-attr="0" data-widget="image" class="cke_widget_element"><span class="cke_reset cke_widget_drag_handler_container" style="background:rgba(220,220,220,0.5);background-image:url(https://clevert.com.br/lib/ckeditor/plugins/widget/images/handle.png)"><img class="cke_reset cke_widget_drag_handler" data-cke-widget-drag-handler="1" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click e arraste para mover" height="15" draggable="true"></span><span class="cke_image_resizer" title="Click e arraste para redimensionar">​</span></span></p><p><span tabindex="-1" contenteditable="false" data-cke-widget-wrapper="1" data-cke-filter="off" class="cke_widget_wrapper cke_widget_inline cke_image_nocaption" data-cke-display-name="Imagem" data-cke-widget-id="5"><img alt="" height="484" data-cke-saved-src="https://contabilidadesmart.com.br/wp-content/uploads/2020/10/anuncios-avon-contabilidade-votuporanga.jpg" src="https://contabilidadesmart.com.br/wp-content/uploads/2020/10/anuncios-avon-contabilidade-votuporanga.jpg" width="710" data-cke-widget-data="%7B%22hasCaption%22%3Afalse%2C%22src%22%3A%22https%3A%2F%2Fcontabilidadesmart.com.br%2Fwp-content%2Fuploads%2F2020%2F10%2Fanuncios-avon-contabilidade-votuporanga.jpg%22%2C%22alt%22%3A%22%22%2C%22width%22%3A%22710%22%2C%22height%22%3A%22484%22%2C%22lock%22%3Atrue%2C%22align%22%3A%22none%22%2C%22classes%22%3Anull%7D" data-cke-widget-upcasted="1" data-cke-widget-keep-attr="0" data-widget="image" class="cke_widget_element"><span class="cke_reset cke_widget_drag_handler_container" style="background:rgba(220,220,220,0.5);background-image:url(https://clevert.com.br/lib/ckeditor/plugins/widget/images/handle.png)"><img class="cke_reset cke_widget_drag_handler" data-cke-widget-drag-handler="1" src="data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==" width="15" title="Click e arraste para mover" height="15" draggable="true"></span><span class="cke_image_resizer" title="Click e arraste para redimensionar">​</span></span></p><p><br></p><p><br></p><p>A cada dia percebemos que neste mercado em rápida mutação os distribuidores sejam novos ou antigos estão procurando ferramentas e treinamentos.</p><p><br></p><p>Estamos no início da revolução da indústria de vendas diretas no mundo e principalmente no Brasil, chegou o momento de você se posicionar e se profissionalizar ao máximo, aprenda sobre, gatilhos mentais, autoridade, montagem de sites, posicionamento, land pages, ads, adwords, adsense, avatar, persona, BMG, canvas, analitycs, trends, confererências onlines, SEO e muito mais.</address></body>`

export function getStaticProps() {
  return {
    props: {
      title: 'Será que vale a pena ser MEI',
      bannerPageProps: {
        backgroundImage:
          'https://contabilidadesmart.com.br/wp-content/uploads/2020/10/MEI-contabilidade-votuporanga-vantagens-leandromikk.jpg',
        data: '23 out 2020',
        tag: ''
      },
      description: texto,
      widgetCategorias: mockCategorias,
      widgetPaginas: mockPaginas,
      widgetPostsRecentes: mockPostsRecentes,
      menuAsideItems: {
        menuData: navigationMock,
        maisVistosData: maisVistosMock,
        tagsData: tagsMock
      }
    }
  }
}
