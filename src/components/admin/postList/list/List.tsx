/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect } from 'react';
import { CheckIcon } from '../../../../assets/admin';
import { ListDetail } from '../listDetail';
import * as S from './style/index';

interface listProps {
  postId: number | string;
  title: string;
  target: string;
  writer: string;
  date: string;
  check: boolean;
  option: number;
}

const List = ({ postId, title, target, writer, date, check, option }: listProps) => {
  const [color, setColor] = useState<string>('');
  useEffect(() => {
    check ? setColor('#00C02A') : setColor('#808080');
  }, []);

  const [divDisplayBool, setDivDisplayBool] = useState<boolean>(false);
  const openDetail = () => {
    setDivDisplayBool(!divDisplayBool);
  };
  const dateMonth = date.slice(5, 7);
  const dateDay = date.slice(8, 10);

  const dateString = dateMonth + '/' + dateDay;

  return (
    <>
      <article onClick={openDetail}>
        <S.MainContest>
          <p>{postId}</p>
          <h3>{title}</h3>
          <div>
            <p>{target}</p>
            <p>{writer}</p>
            <p>{dateString}</p>
            <div>
              <CheckIcon color={color} />
            </div>
          </div>
        </S.MainContest>
      </article>
      <ListDetail
        id={postId}
        closeDetail={(e: any) => setDivDisplayBool(e)}
        option={option}
        styles={divDisplayBool}
        check={check}
      />
    </>
  );
};

export default List;
