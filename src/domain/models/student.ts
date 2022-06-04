export type Student = {
  name: string;
  email: string;
  phones?: Phone[];
};

type Phone = {
  countryCode: string;
  DDD: string;
  number: string;
};
