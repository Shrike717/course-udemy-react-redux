import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID 1EKSln9C2FYGMAD0nrP0334wDoPu2IgX34xz9bsSME8',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
