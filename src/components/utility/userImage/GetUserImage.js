import { Toast } from 'native-base';
import UserGetImageService from '../../../api/userImage/UserImageGetService';

const getImageHandler = (userName, UpdateURL) => {
  const ImageList = [];
  UserGetImageService.fetchUserGetData()
    .then((parsedRes) => {
      for (const key in parsedRes) {
        if (key) {
          ImageList.push({
            ...parsedRes[key],
            id: key
          });
        }
      }
    })
    .then(() => {
      const data = ImageList;
      let uri = null;
      for (let i = 0; i < data.length; i += 1) {
        if (data[i].user === userName) {
          uri = data[i].image.imageUrl;
        }
      }
      UpdateURL(uri);
      // return uri
    })
    .catch((error) => {
      Toast.show({
        text: error,
        duration: 2000,
        type: 'danger'
      });
    });
};
export default getImageHandler;
