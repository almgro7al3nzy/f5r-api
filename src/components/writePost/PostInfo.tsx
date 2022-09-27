import React, { FC, useEffect } from 'react';
import * as S from './style';

interface Props {
  id: string;
  title: string;
  placeholder: string;
  content: number | string;
  setPrice?: (payload: number) => void;
  setDate?: (payload: string) => void;
  setHeadCount?: (payload: number) => void;
}

const PostInfo: FC<Props> = props => {
  const { id, title, content, placeholder, setPrice, setDate, setHeadCount } = props;

  useEffect(() => {
    console.log(1234, content);
  }, [content]);

  const inputChangeHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (id === 'pay') setPrice && setPrice(Number(event.currentTarget.value));
    else if (id === 'people') setHeadCount && setHeadCount(Number(event.currentTarget.value));
    else if (id === 'date') setDate && setDate(event.currentTarget.value);
  };

  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.currentTarget.value = event.currentTarget.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*)\./g, '$1');
  };

  return (
    <S.PostInfoContent>
      <S.SubTitle>
        {title}
        <span>*</span>
      </S.SubTitle>
      <input
        placeholder={placeholder}
        onChange={inputChangeHander}
        value={content}
        maxLength={id === 'pay' ? 8 : undefined}
        onInput={id === 'date' ? undefined : onInput}
      />
    </S.PostInfoContent>
  );
};

export default PostInfo;
