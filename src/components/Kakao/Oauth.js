const CLIENT_ID = '1df12272e6274e51c67dce444cff02e6';
const REDIRECT_URI = 'http://localhost:3000/oauth/callback/kakao';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
