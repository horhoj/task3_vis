import { FC } from 'react';
import { DATA } from '@pages/MainPage/data';
import styles from './MainPage.module.scss';

const BLOCK_WIDTH = 50;
const START_DATE = '2021-01-01 00:00:00';

const getSeek = (date: string) =>
  Math.round(
    ((new Date(date).getTime() - new Date(START_DATE).getTime()) /
      (1000 * 60 * 60)) *
      BLOCK_WIDTH,
  );

const getSize = (dateStart: string, dateEnd: string) =>
  Math.round(
    ((new Date(dateEnd).getTime() - new Date(dateStart).getTime()) /
      (1000 * 60 * 60)) *
      BLOCK_WIDTH,
  );

const GRID_DATA_COLUMN_LIST = Array(25)
  .fill(null)
  .map((_, index) => index);

const getTimeLabel = (hour: number) =>
  hour < 10 ? `0${hour}:00` : `${hour}:00`;

export const MainPage: FC = () => {
  return (
    <div className={styles.wrap}>
      <div
        className={styles.wrapInternal}
        style={{ width: `${BLOCK_WIDTH * 25}px` }}
      >
        <div style={{ minHeight: '30px' }}></div>
        {DATA.map((dataItem) => (
          <div
            key={dataItem.id}
            className={styles.block}
            style={{
              marginLeft: `${getSeek(dataItem.start_date)}px`,
              width: getSize(dataItem.start_date, dataItem.end_date),
            }}
          >
            <div className={styles.blockStartDateLabel}>
              {dataItem.start_date}
            </div>
            <div className={styles.blockEndDateLabel}>{dataItem.end_date}</div>
          </div>
        ))}
        <div className={styles.gridWrap}>
          {GRID_DATA_COLUMN_LIST.map((item) => (
            <div key={item} className={styles.gridColumnTitle}>
              <div>{getTimeLabel(item)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
