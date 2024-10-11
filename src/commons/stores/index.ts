import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const isWhoStateConfig = {
  key: `isWhoState/${uuidv4()}`,
  default: 'HA_PAK',
};

export const isWhoState = atom(isWhoStateConfig);
