import { MenuAsideProps } from 'components/MenuAside'

const menuasideMock: MenuAsideProps = {
  maisVistosData: [
    { title: 'MaisVistosData titulo 1', slug: 'MaisVistosData slug 1' }
  ],
  tagsData: [
    {
      title: 'ads',
      slug: 'ads',
      posts: [{ id: '1' }]
    }
  ],
  menuData: [
    {
      title: 'MenuData title 1',
      slug: 'menuData slug 1',
      dropdownOptions: [
        { titleOption: 'menuData titleOption 1', slug: 'menuData slugOption 1' }
      ]
    }
  ]
}

export { menuasideMock }
