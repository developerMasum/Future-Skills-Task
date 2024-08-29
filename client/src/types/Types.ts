export type TCard = {
  _id: string;
  title: string;
  description: string;
  link: string;
};

export interface IPostResponse {
  users: {
    data: {
      result: TCard[];
    };
  };
}
