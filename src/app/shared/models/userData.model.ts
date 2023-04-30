export interface IUserData{
  id: number
  name: string,
  password: string,
}

export type IUserDataDTO = Omit<IUserData, 'id'>
