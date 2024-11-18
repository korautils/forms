export interface CallbackType<T> {
  (event: T): any;
}

export interface CallbackMultipleParams<T> {
  (...event: T[]): any;
}

export interface Callback {
  (): any;
}

export interface GlobalProps {}

export type SIZES = "small" | "medium";

export type VARIANT = "standard" | "outlined" | "filled";
