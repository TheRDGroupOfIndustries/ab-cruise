// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title("AB Cruisers CMS")
    .items([
      // Homepage Items
      S.listItem()
        .title("Homepage Content")
        .child(
          S.list()
            .title("Homepage Content")
            .items([
              S.documentTypeListItem("hero").title("Hero Section"),
              S.documentTypeListItem("aboutUs").title("About Section"),
              S.documentTypeListItem("gallery").title("Gallery Section"),
              S.documentTypeListItem("testimonial").title(
                "Testimonial Section"
              ),
              S.documentTypeListItem("bookingInfo").title(
                "Booking Info Section"
              ),
              S.documentTypeListItem("contactUs").title("Contact Us Section"),
              // S.documentTypeListItem("contactUsInfo").title(
              //   "Contact Us Info Section"
              // ),
            ])
        ),

      // Blog Items
      S.listItem()
        .title("Blog Content")
        .child(
          S.list()
            .title("Blog Content")
            .items([
              S.documentTypeListItem("author").title("Authors"),
              S.documentTypeListItem("post").title("Blog Posts"),
              S.documentTypeListItem("category").title("Categories"),
            ])
        ),

      S.divider(),

      // Other document types
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          ![
            "hero",
            "aboutUs",
            "gallery",
            "testimonial",
            "bookingInfo",
            "contactUs",

            "author",
            "post",
            "category",
          ].includes(item.getId())
      ),
    ]);
