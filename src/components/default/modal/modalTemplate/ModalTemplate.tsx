import React, { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { uploadIcon } from '../../../../assets/modal';
import mypage from '../../../../util/api/mypage';
import userInfo from '../../../../util/api/userInfo';
import * as S from './style';

interface Props {
  subject: string;
  isShowModal: boolean;
  closeModal: () => void;
  id?: string;
}

const ModalTemplate: FC<Props> = ({ subject, isShowModal, closeModal, id }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });
  const { title, content } = inputs;
  const { report, imageUpload } = userInfo;
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const { push } = useHistory();

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const fileHandling = (e: any) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = () => {
    if (!(title && content)) {
      alert('빈칸이 있는지 확인해주세요.');
      return;
    }

    if (id) {
      // 유저, 게시물 신고
      report(title, content, id)
        .then(async res => {
          if (imageFile) {
            await imageUpload(res.data['report_id'], imageFile)
              .then(res => {
                setImageUrl('');
              })
              .catch(err => {
                throw err;
              });
          }
          alert('신고 내용이 접수되었습니다.');
          setInputs({
            title: '',
            content: '',
          });
          closeModal();
        })
        .catch(err => {
          if (err.response.status === 400) {
            alert('자기 자신은 신고할 수 없습니다.');
            setInputs({
              title: '',
              content: '',
            });
            closeModal();
          } else if (err.response.status === 401) {
            alert('로그인 후 이용 가능합니다.');
            push('/auth');
          }
          throw err;
        });
    } else {
      // 문의 사항 작성
      mypage
        .registerSuggestion(title, content)
        .then(res => {
          alert('문의 사항이 접수되었습니다.');
          setInputs({
            title: '',
            content: '',
          });
          closeModal();
        })
        .catch(err => {
          throw err;
        });
    }
  };
  return (
    <>
      {isShowModal && (
        <S.Wrapper>
          <S.ModalContainer>
            <S.Title>{subject}</S.Title>
            <S.ContentBox id={id}>
              <input
                name='title'
                value={title}
                onChange={onChange}
                placeholder='제목을 입력해주세요'
                autoFocus
              />
              <textarea
                name='content'
                value={content}
                onChange={onChange}
                placeholder='내용을 1000자 이하로 작성해주세요'
                maxLength={1000}
              />
              {id && (
                <S.ImageBox>
                  <span>사진은 최대 1장만 가능합니다.</span>
                  <label htmlFor='upload'>
                    <img src={imageUrl || uploadIcon} alt='' />
                  </label>
                  <input id='upload' type='file' onChange={fileHandling} />
                </S.ImageBox>
              )}
            </S.ContentBox>
            <S.ButtonBox>
              <button onClick={closeModal}>취소하기</button>
              <button onClick={onSubmit}>등록하기</button>
            </S.ButtonBox>
          </S.ModalContainer>
        </S.Wrapper>
      )}
    </>
  );
};

export default ModalTemplate;
