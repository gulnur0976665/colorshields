namespace GALLERY {
  type galleryRequest = void;

  type galleryResponse = {
    title: string;
    images: {
      image: string;
    }[];
  }[];
}
