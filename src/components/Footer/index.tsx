import Link from 'next/link'

import Heading from 'components/Heading'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Content>
      <S.Column aria-labelledby="column-contact">
        <S.Heading color="black" size="small">
          Contact Us
        </S.Heading>

        <a href="mailto:sac@wongames.com">mm@mm.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <S.Heading color="black">Follow us</S.Heading>

        <nav>
          <a
            href="https://www.instagram.com/mixeria-milionaria"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/mixeria-milionaria"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/mixeria-milionaria"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/mixeria-milionaria"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-resources">
        <S.Heading color="black">Links</S.Heading>

        <nav>
          <Link href="/">
            <a>Inicio</a>
          </Link>
          <Link href="/mixarias">
            <a>Mixarias</a>
          </Link>
          <Link href="/buscar">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-contact">
        <S.Heading color="black">Location</S.Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Mixaria Milionaria 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
