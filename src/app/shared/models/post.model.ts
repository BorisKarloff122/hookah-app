export interface IPostModel{
  id:number,
  post_header:string,
  post_text: string,
  post_image: string[],
  post_action: string,
  post_button_text: string,
  post_slider: string[]
}

export type IPostModelDTO = Omit<IPostModel, 'id'>
