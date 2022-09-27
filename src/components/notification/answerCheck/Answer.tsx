import React, { useEffect, useState } from 'react';
import * as S from './style';
import questionAnswer from '../../../util/api/notificate';
import reportAnswer from '../../../util/api/notificate';

interface ModalProps {
  isShow: boolean;
  modalTitle: string;
  show: any;
  id: number | string;
}

const Answer = ({ isShow, modalTitle, show, id }: ModalProps) => {
  const accessToken = localStorage.getItem('access_token');
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  useEffect(() => {
    if (modalTitle == '문의') {
      setTitle('문의답변');
      questionAnswer
        .setQuestionAnswer(accessToken, id)
        .then(res => {
          setContent(res.data.reason);
        })
        .catch(err => {
          throw err;
        });
    } else if (modalTitle == '신고') {
      setTitle('신고결과');
      reportAnswer
        .setReportAnswer(accessToken, id)
        .then(res => {
          setContent(res.data.reason);
        })
        .catch(err => {
          throw err;
        });
    }
  }, []);

  if (!isShow) {
    return null;
  }

  return (
    <S.Modal>
      <div>
        <h2>{title}</h2>
        <div>{content}</div>
        <button onClick={show}>확인</button>
      </div>
    </S.Modal>
  );
};

export default Answer;
