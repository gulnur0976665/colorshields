import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    gallery: build.query<GALLERY.galleryResponse, GALLERY.galleryRequest>({
      query: () => ({
        url: "/gallery/",
        method: "GET",
      }),
      providesTags: ["gallery"],
    }),
  }),
});
export const { useGalleryQuery } = api;
