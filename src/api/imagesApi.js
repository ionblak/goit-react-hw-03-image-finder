import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

const key = '19522595-24b394bcd15e2754e0ed68cbf';

const fetchImagesWithQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `/api/?q=${searchQuery}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default fetchImagesWithQuery;
