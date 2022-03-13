import axios from "axios";

const baseURL = 'http://localhost:3001';

export const uploadFile = (url, formData, onUploadProgress = () => { }) => {
  return axios({
    method: 'post',
    url,
    baseURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData,
    onUploadProgress
  });
}

export const mergeChunks = (url, data) => {
  return axios({
    method: 'post',
    url,
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    },
    data
  });
}