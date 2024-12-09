"use-strict";

import axios from 'axios';

// Masters default function for all masters

export const expoClient = (url, method) => {
   return axios({
       url: 'https://mmworkspace.com/expo/api/' + url,
       method
    });
    
}

  
