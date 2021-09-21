export type EmitType = "decimal" | "binary-coded decimal";

export interface DecimalDetail {
  dayOfYear: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface BinaryCodedDecimalDetail {
  dayOfYear: string[];
  hours: string[];
  minutes: string[];
  seconds: string[];
}

export interface TimeEmitterDetail {
  decimal: DecimalDetail;
  binaryCodedDecimal: BinaryCodedDecimalDetail;
}
