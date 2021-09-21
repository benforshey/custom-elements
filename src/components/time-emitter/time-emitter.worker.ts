import { Temporal } from '@js-temporal/polyfill/dist/';
import { perCharacter, toBinary } from '../../utils/utils';
import { TimeEmitterDetail } from './types';

export const calcTime = async (): Promise<TimeEmitterDetail> => {
  const zDT = Temporal.Now.zonedDateTimeISO(Temporal.Now.timeZone());
  const binaryPerPlaceValue = perCharacter((s: string) =>
    toBinary(s).padStart(4, '0'),
  );

  const dayOfYear = zDT.dayOfYear.toString().padStart(3, '0');
  const hours = zDT.hour.toString().padStart(2, '0');
  const minutes = zDT.minute.toString().padStart(2, '0');
  const seconds = zDT.second.toString().padStart(2, '0');

  const decimal = {
    dayOfYear,
    hours,
    minutes,
    seconds,
  };

  return {
    decimal,
    binaryCodedDecimal: {
      dayOfYear: binaryPerPlaceValue(dayOfYear),
      hours: binaryPerPlaceValue(hours),
      minutes: binaryPerPlaceValue(minutes),
      seconds: binaryPerPlaceValue(seconds),
    },
  };
};
