export interface IFeedModel{
  showTo?: string,
  id: number,
  post_header: string,
  post_link: string,
  post_brief: string,
  post_img: string,
  post_tags: string[]
}

export type IFeedModelDTO = Omit<IFeedModel, 'id'>
