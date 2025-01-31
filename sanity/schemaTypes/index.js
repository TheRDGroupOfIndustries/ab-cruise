import { blockContentType } from "./blockContentType";
import { categoryType } from "./blogTypes/categoryType";
import { postType } from "./blogTypes/postType";
import { authorType } from "./blogTypes/authorType";

import { heroType } from "./homeTypes/heroType";
import { aboutUsType } from "./homeTypes/aboutUsType";
import { galleryType } from "./homeTypes/galleryType";
import { bookingInfoType } from "./homeTypes/bookingInfoType";
import { testimonialType } from "./homeTypes/testimonialType";

export const schema = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroType,
    aboutUsType,
    galleryType,
    testimonialType,
    bookingInfoType,
  ],
};
