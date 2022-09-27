export const TRADETITLE = '거래 게시물 작성';
export const GROUPTITLE = '공구 게시물 작성';
export const POSTTITLEANDHASHTAG = [
  {
    id: 'title',
    content: '제목',
    placeholder: '제목을 입력해 주세요 (최대 30자)',
    isNotNull: true,
  },
  {
    id: 'hashtag',
    content: '해시태그',
    placeholder: '사용할 해시태그를 입력해 주세요 [최대 5개][,으로 구분]',
    isNotNull: false,
  },
];
export const PICTURETITLE = '사진';
export const PCITUREEXPLAIN = '상품 사진을 등록해 주세요 (최대 5장)';
export const NOMODIFYPICTURE = '상품 사진은 수정할 수 없습니다.';
export const EXPLAINPOSTTITLE = '설명';
export const EXPLAINPOSTTEXTAREA = '상품 소개글을 써주세요! (최대 1000자)';
export const PAYTITLE = '가격';
export const PAYINPUT = '제시 가격을 입력해 주세요 (숫자만)';
export const GROUPINFO = [
  { id: 'pay', content: '가격', placeholder: '상품 구입할 가격을 입력해 주세요 (숫자만)' },
  { id: 'people', content: '인원', placeholder: '공동구매할 인원수를 입력해 주세요 (숫자만)' },
  {
    id: 'date',
    content: '기간',
    placeholder: '공동구매 기간을 입력해 주세요 (ex: 2021-11-18)',
  },
];

export const CHECKBTN = '게시물 등록하기';
export const MODIFYBTN = '게시물 수정하기';
