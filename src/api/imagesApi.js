import axios from 'axios';

const BASE_URL = 'https://pixabay.com/';
const API_KEY = '19522595-24b394bcd15e2754e0ed68cbf';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImagesWithQuery = async (q, page) => {
  try {
    const { data } = await axios.get('api/', { params: { q, page } });

    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default fetchImagesWithQuery;
