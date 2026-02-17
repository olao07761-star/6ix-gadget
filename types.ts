export enum ViewState {
  HOME = 'HOME',
  SWAP_FLOW = 'SWAP_FLOW',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  VERIFY = 'VERIFY',
}

export interface Device {
  id: string;
  name: string;
  brand: string;
  image: string;
  basePrice: number;
}

export enum Condition {
  EXCELLENT = 'Excellent',
  GOOD = 'Good',
  CRACKED = 'Cracked',
  FAULTY = 'Faulty',
}

export interface Quote {
  deviceId: string;
  condition: Condition;
  storage: string;
  hasAccessories: boolean;
  estimatedValue: number;
}
