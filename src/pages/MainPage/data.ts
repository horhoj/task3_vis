import { getUUID } from '@utils/getUUID';

export interface DataItem {
  id: string;
  cid: string;
  start_date: string;
  end_date: string;
}

export const DATA: DataItem[] = [
  {
    id: getUUID(),
    cid: '0',
    start_date: '2021-01-01 00:00:00',
    end_date: '2021-01-01 06:00:00',
  },
  {
    id: getUUID(),
    cid: '1',
    start_date: '2021-01-01 03:00:00',
    end_date: '2021-01-01 07:00:00',
  },
  {
    id: getUUID(),
    cid: '2',
    start_date: '2021-01-01 02:00:00',
    end_date: '2021-01-01 09:00:00',
  },
  {
    id: getUUID(),
    cid: '3',
    start_date: '2021-01-01 08:00:00',
    end_date: '2021-01-01 08:30:00',
  },
  {
    id: getUUID(),
    cid: '4',
    start_date: '2021-01-01 08:45:00',
    end_date: '2021-01-01 12:00:00',
  },
  {
    id: getUUID(),
    cid: '5',
    start_date: '2021-01-01 10:00:00',
    end_date: '2021-01-01 13:00:00',
  },
  {
    id: getUUID(),
    cid: '6',
    start_date: '2021-01-01 11:00:00',
    end_date: '2021-01-01 16:00:00',
  },
  {
    id: getUUID(),
    cid: '7',
    start_date: '2021-01-01 14:00:00',
    end_date: '2021-01-01 15:00:00',
  },
  {
    id: getUUID(),
    cid: '8',
    start_date: '2021-01-01 15:30:00',
    end_date: '2021-01-01 18:00:00',
  },
  {
    id: getUUID(),
    cid: '9',
    start_date: '2021-01-01 16:30:00',
    end_date: '2021-01-01 19:59:00',
  },
  {
    id: getUUID(),
    cid: '10',
    start_date: '2021-01-01 17:00:00',
    end_date: '2021-01-01 19:00:00',
  },
  {
    id: getUUID(),
    cid: '11',
    start_date: '2021-01-01 19:30:00',
    end_date: '2021-01-01 19:45:00',
  },
];
