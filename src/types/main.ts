import type {
  AllyDriverContract,
  LiteralStringUnion,
  Oauth2DriverConfig,
} from '@adonisjs/ally/types'

export interface MicrosoftDriverContract
  extends AllyDriverContract<MicrosoftToken, MicrosoftScopes> {
  version: 'oauth2'
}

export type MicrosoftDriverConfig = Oauth2DriverConfig & {
  scopes?: LiteralStringUnion<MicrosoftScopes>[]
  tenantId?: string
}

export type MicrosoftToken = {
  expiresAt: Date
  expiresIn: number
  refreshToken: string
  scope: string[]
  token: string
  type: 'bearer'
}

export type MicrosoftScopes = 'openid'
