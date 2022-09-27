import React, { useEffect, useState } from 'react';
import OptionsTemplate from '../../../default/profile/optionsTemplate';
import Footer from '../../../footer';
import Header from '../../../header';
import * as S from './style';
import { modify } from '../../../../assets/mypage';
import { INPUT_ELEMENT } from '../../../../constance/modifyInfo';
import mypage from '../../../../util/api/mypage';
import { useHistory } from 'react-router';

const ModifyInfo = () => {
  const [isShow, setIsShow] = useState(true);
  const [inputs, setInputs] = useState({
    room_number: '',
    bank_name: '',
    account_number: '',
  });
  const { room_number, bank_name, account_number } = inputs;
  const infoArray = Object.values(inputs);
  const { getMyInfo, modifyInfo } = mypage;
  const { push } = useHistory();

  useEffect(() => {
    getMyInfo()
      .then(res => {
        const { room_number, account_number } = res.data;
        const account = account_number.split(' ');
        setInputs({
          ...inputs,
          room_number,
          bank_name: account[0],
          account_number: account[1],
        });
      })
      .catch(err => {
        throw err;
      });
  }, []);

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const account = bank_name + ' ' + account_number;
    if (window.confirm('정보를 수정하시겠습니까?')) {
      modifyInfo(room_number, account)
        .then(res => {
          alert('정보가 수정되었습니다.');
          push('/mypage');
        })
        .catch(err => {
          throw err;
        });
    }
  };

  return (
    <S.Wrapper>
      <Header />
      <OptionsTemplate
        top={320}
        image={modify}
        text={'내 정보 수정하기'}
        setIsShow={setIsShow}
        isShow={isShow}
      />
      {isShow && (
        <S.ModifyForm onSubmit={onSubmit}>
          {INPUT_ELEMENT.map((ele, i) => {
            return (
              <S.InputWrapper key={ele.id}>
                <input
                  onChange={onChange}
                  value={infoArray[i]}
                  name={ele.id}
                  type='text'
                  id={ele.id}
                  required
                />
                <label htmlFor={ele.id}>{ele.text}</label>
              </S.InputWrapper>
            );
          })}
          <button>확인</button>
        </S.ModifyForm>
      )}
      <Footer />
    </S.Wrapper>
  );
};

export default ModifyInfo;
