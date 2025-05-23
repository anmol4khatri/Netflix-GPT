export const Netflix_Logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const PROXY_URL = import.meta.env.VITE_PROXY_URL || "" ;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json'
    }
};

export const IMG_CDN_PREFIX = "https://image.tmdb.org/t/p/w500/";

export const AI_API_KEY = import.meta.env.VITE_AI_API_KEY || "";