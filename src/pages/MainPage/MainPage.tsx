import { FC } from 'react';
import { DATA } from '@pages/MainPage/data';
import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  return (
    <div className={styles.wrap}>
      {DATA.map((dataItem) => (
        <div key={dataItem.id}>111</div>
      ))}
    </div>
  );
};
