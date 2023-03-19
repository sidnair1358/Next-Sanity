import { client } from "../lib/client.js";
import fs from "fs";

import perfumeData from "./perfumes.js";

perfumeData.forEach(async (perfume) => {
  try {
    const imageAsset = await client.assets.upload(
      "image",
      fs.createReadStream(perfume.image),
      { filename: perfume.image }
    );
    const imageAssetId = imageAsset._id;

    await client.create({
      _type: "product",
      name: perfume.name,
      slug: { current: perfume.slug },
      price: perfume.price,
      details: perfume.details,
      image: [
        {
          _key: imageAssetId,
          _type: "image",
          asset: {
            _ref: imageAssetId,
            _type: "reference",
          },
        },
      ],
    });

    console.log(`Created a new product: ${perfume.name}`);
  } catch (error) {
    console.log("=== error productUpload.js [35] ===", error.message);
  }
});
