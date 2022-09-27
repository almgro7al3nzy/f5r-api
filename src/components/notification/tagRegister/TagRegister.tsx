import React, { useEffect, useState } from 'react';
import * as S from './style';
import { Tag } from './tag/index';
import { delete_icon, exit_icon } from '../../../assets/alarm';
import tagGet from '../../../util/api/notificate';
import tagPost from '../../../util/api/notificate';
import tagDelete from '../../../util/api/notificate';
import { useHistory } from 'react-router';

const TagRegister = () => {
  const history = useHistory();

  const accessToken = localStorage.getItem('access_token');

  const [tag, setTag] = useState<any>();
  const [tagName, setTagName] = useState<string>('');

  const getTag = () => {
    tagGet
      .setTagGet(accessToken)
      .then(res => {
        setTag(res.data);
      })
      .catch(err => {
        throw err;
      });
  };

  const postTag = () => {
    tagPost
      .setTagPost(accessToken, tagName)
      .then(res => {})
      .catch(err => {
        throw err;
      });
  };

  const onSubmit = () => {
    if (tagName.replace(/ /g, '') == '') {
      alert('설정할 태그를 입력하세요');
    } else {
      postTag();
      history.go(0);
      getTag();
    }
  };

  const deleteTag = (tagId: number) => {
    tagDelete
      .setTagDelete(accessToken, tagId)
      .then(res => {
        history.go(0);
      })
      .catch(err => {
        throw err;
      });
  };

  useEffect(() => {
    getTag();
  }, []);

  return (
    <S.Wrapper>
      <S.AlarmHeader>
        <div>
          <img
            src={exit_icon}
            alt=''
            onClick={() => {
              history.goBack();
            }}
          />
        </div>
        <h2>알람</h2>
        <div></div>
      </S.AlarmHeader>
      <S.Register>
        <input
          type='text'
          placeholder='등록할 태그를 입력하세요.'
          onChange={e => setTagName(e.target.value)}
        />
        <button onClick={() => onSubmit()}>등록하기</button>
      </S.Register>
      <h1>등록된 태그</h1>
      <article>
        {tag?.map((tagItem: any, index: number) => {
          return (
            <S.TagList key={index}>
              <Tag tag={tagItem.tag} />
              <img src={delete_icon} alt='' onClick={() => deleteTag(tagItem.tag_id)} />
            </S.TagList>
          );
        })}
      </article>
    </S.Wrapper>
  );
};

export default TagRegister;
