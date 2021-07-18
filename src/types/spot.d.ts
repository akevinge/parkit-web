type Spot = {
  id: string;
  isOccupied: boolean;
  lastStart: {
    seconds: number;
    nanoseconds: number;
  };
  rate: number;
  uid: string;
  user: string;
};
