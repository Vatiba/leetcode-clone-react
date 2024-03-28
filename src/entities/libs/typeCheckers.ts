import { Token, User } from "entities/types";

export const isNumber = (x: any): x is number => {
   return typeof x === 'number' && !Number.isNaN(Number(x));
}

export const isString = (x: any): x is string => {
   return typeof x === 'string';
}

export const isTokenObj = (obj: any): obj is Token => {
   return obj?.access && obj?.refresh
}

export const isUser = (x: any): x is User => {
   return x?.email || x?.first_name || x?.last_name ||
      x?.location || x?.phone
}