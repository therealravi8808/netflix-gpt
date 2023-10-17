import React from 'react'

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMoviesTrailer';


const VideoBackground = ({movieId}) => {

     const trailerVideo =useSelector(store=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);

  return (
    <div>
        <iframe width="560" height="315" 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key} 
        title="YouTube video player"
         
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         >

          </iframe>
    </div>
  )
}

export default VideoBackground;

// {
//     "id": 926393,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Deleted Scene",
//         "key": "WwAUIwb04c4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-10-05T19:00:13.000Z",
//         "id": "651f27585b124000c6056331"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Extended Preview",
//         "key": "sshjnrT-ThY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-10-04T19:00:21.000Z",
//         "id": "651dbb508c22c0013d12e4ae"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Special Features Preview",
//         "key": "Mk9HJU2G9kg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-10-03T19:28:24.000Z",
//         "id": "651cad6c8c22c00103642f85"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Now In Cinemas",
//         "key": "N1J-Hzqhvck",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-13T01:30:12.000Z",
//         "id": "6501f0b4d7dcd200e2fda94f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Now In Cinemas",
//         "key": "iDa1M7LLOjk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-13T01:00:18.000Z",
//         "id": "6501f0bdffc9de0eded4c5b1"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Now In Cinemas",
//         "key": "nX9QjEq2otQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-13T00:30:17.000Z",
//         "id": "6501f0c4d7dcd200ffec5960"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Critics Agree Teaser",
//         "key": "LDhJI27RBJc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-13T00:30:14.000Z",
//         "id": "6501f0cee0ca7f00cbeb1a8f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "No Gun No Problem Teaser",
//         "key": "eRGfV7cC-fY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-13T00:00:27.000Z",
//         "id": "6501f0d61bf26600ac756933"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "VwbAYIVs-x4",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-03T13:00:17.000Z",
//         "id": "65171a0ca199a600fe758d94"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "wz7wkSu56Ng",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-03T01:00:20.000Z",
//         "id": "65171a04967cc700c5188d3f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "7Fk5_ovKYtY",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-02T13:00:09.000Z",
//         "id": "65171991c50ad200ad7fd3ed"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "fW8d2DHw2ho",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-02T03:00:18.000Z",
//         "id": "65171972a199a600e1fb8e30"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "OAGRdDb3lWM",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-01T13:00:29.000Z",
//         "id": "651719bea199a600ab18a092"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "yuocsXqn6w0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-01T11:00:47.000Z",
//         "id": "651719b7c50ad2010bfd3af4"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "j-rtF7kWDao",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-01T10:13:54.000Z",
//         "id": "651719b1967cc7011c8ee611"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "9NQYq7XGBGo",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-09-01T03:00:09.000Z",
//         "id": "651719a9c50ad200ad7fd3f8"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "In Cinemas Sept 13",
//         "key": "YD9vv4xRRIU",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-08-31T13:00:25.000Z",
//         "id": "64f08f26dbbb4200ab5eb7bc"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Touché Clip",
//         "key": "TNwjWX3VrpE",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-08-31T10:01:55.000Z",
//         "id": "64f070baebb99d01008b218d"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Median Nerve Clip",
//         "key": "6YToEsPmTew",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-08-31T10:01:53.000Z",
//         "id": "64f070aeebb99d00e3e7950e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "9 Seconds Clip",
//         "key": "hk5BCCc7K8I",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-08-31T10:01:52.000Z",
//         "id": "64f070a177d23b010d6ba66f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Picky Eaters ft. Stephen A. Smith & Dan Orlovsky",
//         "key": "J-uMC4sUVuQ",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-08-27T16:10:41.000Z",
//         "id": "64ed7fea1feac100fe5e86bb"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "You should have watched this before making travel plans",
//         "key": "-boBmFEMefk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-08-24T21:57:58.000Z",
//         "id": "64e926ab90ea4b00c739940e"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer 2",
//         "key": "fQfrzHFmVe8",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-08-24T08:05:36.000Z",
//         "id": "64f07102caa50800e9519d75"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Franchise Recap",
//         "key": "sKAe-e_JsgI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Featurette",
//         "official": true,
//         "published_at": "2023-08-09T19:08:25.000Z",
//         "id": "64d42835f14dad00c6f6aadf"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "inN061MtPOg",
//         "site": "YouTube",=? youtubekey
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-04-25T13:00:09.000Z",
//         "id": "6449c38a2cefc20451ae8456"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Red Band Trailer",
//         "key": "19ikl8vy4zs",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-04-25T12:59:55.000Z",
//         "id": "644815a1f04d0102fb97e446"
//       }
//     ]
//   }

