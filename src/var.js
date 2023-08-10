export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: process.env.REACT_APP_KEY_API,
    },
};
const HOST = 'https://api.themoviedb.org/3';
export const URLTMDB = {
    movie: {
        now: HOST + '/movie/now_playing',
        popular: HOST + '/movie/popular',
        top: HOST + '/movie/top_rated',
        upcoming: HOST + '/movie/upcoming',
        videos: HOST + '/movie/id/videos',
        detailsID: HOST + '/movie/id',
        recomendationsID: HOST + '/movie/id/recommendations',
        credits: HOST + '/movie/id/credits',
    },
    serie: {
        now: HOST + `/tv/on_the_air`,
        popular: HOST + `/tv/popular`,
        top: HOST + `/tv/top_rated`,
        upcoming: HOST + `/tv/airing_today`,
        videos: HOST + `/tv/id/videos`,
        detailsID: HOST + '/tv/id',
        recomendationsID: HOST + '/tv/id/recommendations',
        credits: HOST + '/tv/id/credits',
    },
    search: {
        movie: HOST + `/search/multi?query=`,
        keyword: HOST + `/search/keyword?query=`,
    },
};

// export Quality = {
//
// }
export const imageURL = 'https://image.tmdb.org/t/p/w342/';
export const ProfileURL = 'https://image.tmdb.org/t/p/w45/';
export const imageURLoriginal = 'https://image.tmdb.org/t/p/w1280/';