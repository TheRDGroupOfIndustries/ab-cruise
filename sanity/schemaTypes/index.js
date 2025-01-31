import { blockContentType } from "./blockContentType";

import { navbarLinksType } from "./navbarLinksTypes/navbarLinksType";

import { heroType } from "./homeTypes/heroType";
import { aboutUsType } from "./homeTypes/aboutUsType";
import { galleryType } from "./homeTypes/galleryType";
import { bookingInfoType } from "./homeTypes/bookingInfoType";
import { testimonialType } from "./homeTypes/testimonialType";

import { categoryType } from "./blogTypes/categoryType";
import { postType } from "./blogTypes/postType";
import { authorType } from "./blogTypes/authorType";
import { contactUsType } from "./homeTypes/contactUsType";

export const schema = {
  types: [
    navbarLinksType,

    heroType,
    aboutUsType,
    galleryType,
    testimonialType,
    bookingInfoType,
    contactUsType,

    blockContentType,
    categoryType,
    postType,
    authorType,
  ],
};
