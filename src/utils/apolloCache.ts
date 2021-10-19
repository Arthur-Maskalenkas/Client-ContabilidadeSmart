import { InMemoryCache } from '@apollo/client'
import { concatPagination } from '@apollo/client/utilities'

// A query QueryGames retorna -> games <-, e é isso que o cache vai acumular games

// ** fluxo:
// > Eu pego uma lista de free (retorna games assim como varias outras query)
// > o cache fica [game1,game2,game3]
// > Assim que outra parte usa alguma query que retorne game, ela vai receber independente de tudo [game1,game2,game3], e não [game4,game5,game6]
// **

// Para quebrar o fluxo, eu separei o cacheamento por 'where' e 'sort'. Assim fica algo como: (caso puxe 3 games de 3 queries diferentes)

//**
// > games: {"where: {"release_date_lte":"2021-01-29"}, "sort":"release_date:desc"}: [] 8 items"}
// > games: {"where: {"release_date_gt":"2021-01-29"}, "sort":"release_date:asc"}: [] 8 items"}
// > games: {"where: {"price": 0}}: [] 8 items
// > Antes ficaria tudo em games com 24 items
//**
export default new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: concatPagination(['where', 'sort'])
      }
    }
  }
})
