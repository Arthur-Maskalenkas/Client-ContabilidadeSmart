import { LinkMenuDesktopProps } from '.'

const mockWithDropdownOptions: LinkMenuDesktopProps = {
  title: 'Premium',
  dropdownOptions: [
    { titleOption: 'Opçao 1', slug: 'Opçao 1' },
    { titleOption: 'opçao 2', slug: 'opçao 2' }
  ]
}

const mockWithoutDropdownOptions: LinkMenuDesktopProps = {
  title: 'Premium',
  slug: 'premium'
}

export { mockWithDropdownOptions, mockWithoutDropdownOptions }
