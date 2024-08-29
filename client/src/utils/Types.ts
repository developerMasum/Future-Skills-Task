export type TPost = {
  _id: string;
  tittle: string;
  description: string;
  link: string;
};

export interface IPostResponse {
  users: {
    data: {
      result: TPost[];
    };
  };
}
