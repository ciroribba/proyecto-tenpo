export interface UserItem {
  email: string;
  gender: string;
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    country: string;
  };
  dob: {
        date: string;
        age: number;
      },
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}