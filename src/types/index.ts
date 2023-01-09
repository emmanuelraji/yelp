export type businessType = {
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

export type optionsType = {
  [key: string]: string;
};

export type businessesProps = {
  businesses: businessType[];
  error: string | null;
  isLoading: boolean;
};

export type searchProps = {
  searchYelp: (term: string, location: string, sortBy: string) => Promise<void>;
};
