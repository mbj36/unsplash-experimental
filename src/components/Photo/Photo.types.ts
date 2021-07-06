export type CollectionType = {
  id: string;
  alt_description: string;
  width: number;
  height: number;
  urls: {
    large: string;
    regular: string;
    raw: string;
    small: string;
    thumb: string;
  };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};
