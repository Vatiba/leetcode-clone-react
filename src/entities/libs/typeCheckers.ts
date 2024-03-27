import { Token, User } from "entities/types";

export const isNumber = (x: any): x is number => {
   return typeof x === 'number' && !Number.isNaN(Number(x));
}

export const isString = (x: any): x is string => {
   return typeof x === 'string';
}

export const isTokenObj = (obj: any): obj is Token => {
   return obj?.tokenType && obj?.accessToken && obj?.accessTokenExpires && obj?.refreshToken
}

export const isUser = (x: any): x is User => {
   return x?.id || x?.phone || x?.first_name || x?.last_name || x?.email ||
      x?.lang || x?.note || x?.theme || x?.fcm_token || x?.status || x?.isSuperUser
}