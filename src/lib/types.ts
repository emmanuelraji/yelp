export type BusinessType = {
  id: string;
  name: string;
  rating: number;
  review_count: number;
  location: {
    city: string;
    state: string;
    zip_code: string;
  };
  image_url: string;
  categories: [{ title: string }];
};

export type Options = {
  [key: string]: string;
};
