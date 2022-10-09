import React from "react";
import sampleArray from "./sampleArray";
import Result from "./Result";
import axios from "axios";


export default function Header() {
// var resultList = [];

// const options = {
//   method: 'GET',
//   url: 'https://g-search.p.rapidapi.com/location',
//   params: {location_name: 'London', country_code: 'GB'},
//   headers: {
//     'X-RapidAPI-Key': '54d50f0e99mshb7de659a859ef4ap144725jsn3db4a2f0ba21',
//     'X-RapidAPI-Host': 'g-search.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

    return (
    <div>
        <div>
        <div class="px-6 py-7">
        <div class="mb-3 lg:w-3/5 sm:w-3/4 flex">
            <h1 class="text-5xl pr-7 brand">NOODLE</h1>
            <input type="search" value="football" class="form-control rounded-l-full w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
            <button class="rounded-r-full btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
            </button>
        </div>
        </div>
        </div>
        <div class="px-10 py-5">
            {sampleArray.map(Result)}
      </div>
    </div>
    )
  }