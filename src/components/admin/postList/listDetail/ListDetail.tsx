import React, { FC, useEffect, useState } from 'react';
import * as S from './style/index';
import question from '../../../../util/api/admin/listDescription';
import reportPost from '../../../../util/api/admin/listDescription';
import reportUser from '../../../../util/api/admin/listDescription';
import Answer from './Answer';

interface detailProps {
  closeDetail: (e: any) => void;
  option: number;
  styles: boolean;
  id: number | string;
  check: boolean;
}

const ListDetail = ({ closeDetail, option, styles, id, check }: detailProps) => {
  const [named, setNamed] = useState<string>('');
  const [dateDisplay, setDateDisplay] = useState<string>('');
  const [divDisplayAnswer, setDivDisplayAnswer] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photoUrl, setPhotoUrl] = useState<string>('');

  const accessToken = localStorage.getItem('access_token');

  useEffect(() => {
    switch (option) {
      case 1:
        setNamed('유저 비활성화 여부');
        setDateDisplay('block');
        setDivDisplayAnswer('flex');
        reportUser
          .setReportUser(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
            setPhotoUrl(res.data.photo_url);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 2:
        setNamed('게시물 비활성화 여부');
        setDateDisplay('none');
        setDivDisplayAnswer('flex');
        reportPost
          .setReportPost(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
            setPhotoUrl(res.data.photo_url);
          })
          .catch(err => {
            console.log(err);
          });
        break;
      case 3:
        setNamed('');
        setDateDisplay('none');
        setDivDisplayAnswer('none');
        question
          .setQuestion(id, accessToken)
          .then(res => {
            setDescription(res.data.description);
          })
          .catch(err => {
            console.log(err);
          });
        break;
    }
  }, []);

  return (
    <S.Detail style={{ display: styles ? 'block' : 'none' }}>
      <S.Content>
        <span>내용</span>
        <div>
          <p>{description}</p>
          <img src={photoUrl} alt='' />
        </div>
      </S.Content>
      <hr />
      <Answer
        close={(e: any) => closeDetail(e)}
        id={id}
        named={named}
        dateDisplay={dateDisplay}
        divDisplayAnswer={divDisplayAnswer}
        option={option}
        check={check}
      />
    </S.Detail>
  );
};

export default ListDetail;
