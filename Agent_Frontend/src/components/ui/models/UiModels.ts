export type ErrorPayload = {
  statusCode: number;
  message: string;
};

export interface GreetingProps {
  username: string;
}

export type TimePeriod = "weekly" | "monthly" | "3months" | "6months";

export interface TimeFilterProps {
  value: TimePeriod;
  onChange: (val: TimePeriod) => void;
}
