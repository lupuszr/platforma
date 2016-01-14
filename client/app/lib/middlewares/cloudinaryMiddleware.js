import cloudinary from 'cloudinary'
import { cloudinaryConfig } from "lib/api"

export default function cloudinaryMiddleware() {
  return next => action => {
    const {cloudImg, type, ...rest } = action;

    if (!cloudImg) return next(action);
    
    const SUCCESS = type;

    const REQUEST = type + '_REQUEST';
    const FAILURE = type + '_FAILURE';

    next({ ...rest, type: REQUEST });

    return promise
      .then(res => {
        next({ ...rest, res, type: SUCCESS });

        return true;
      })
      .catch(error => {
        next({ ...rest, error, type: FAILURE });
        console.log(error);

        return false;
      });
  };
}
