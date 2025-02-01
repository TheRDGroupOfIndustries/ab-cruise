import { blockContentType } from "./blockContentType";

import { navbarLinksType } from "./layoutTypes/navbarLinksType";

import { heroType } from "./homeTypes/heroType";
import { aboutUsType } from "./homeTypes/aboutUsType";
import { galleryType } from "./homeTypes/galleryType";
import { bookingInfoType } from "./homeTypes/bookingInfoType";
import { testimonialType } from "./homeTypes/testimonialType";

import { categoryType } from "./blogTypes/categoryType";
import { postType } from "./blogTypes/postType";
import { authorType } from "./blogTypes/authorType";
import { contactUsType } from "./homeTypes/contactUsType";
import { footerType } from "./layoutTypes/footerType";

export const schema = {
  types: [
    navbarLinksType,
    footerType,

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
