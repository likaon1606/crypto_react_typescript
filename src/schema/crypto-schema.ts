import { z } from 'zod'

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string(),
})

//* forma en singular para que sea mas facil de entender y convertirlo a objeto
export const CryptoCurrencyResponseSchema = z.object({
  CoinInfo: z.object({
    FullName: z.string(),
    Name: z.string(),
  })
})

// forma en plural para convertirlo en array
export const CryptoCurrenciesResponseSchema = z.array(CryptoCurrencyResponseSchema)