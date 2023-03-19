import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "sfne9uk1",
  dataset: "production",
  apiVersion: "2023-03-19",
  useCdn: true,
  token:
    "skJvt2GQEvYdAhEpE4z7E3B3e4RaW6EZaXqc8grfB6PMkFe2uSjZslmNVnWnjAj6ZyXsZAFQdSf2mFMritf6WUWu7gVKhlPxhJowD84kf47S8tSP27yBEWHiCjpSZNh3mIalXkiIh19AZSAMqSI1yLKn1w3sBk7t8UnG5ysAkIhd46j2IlKd",
});
const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
