import fs from "fs";
import path from "path";

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export interface GalleryData {
  categories: string[];
  items: GalleryItem[];
}

const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;

function titleCase(str: string): string {
  return str.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}

export function getGalleryData(): GalleryData {
  const galleryDir = path.join(process.cwd(), "public", "gallery");

  let folderNames: string[];
  try {
    folderNames = fs
      .readdirSync(galleryDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name)
      .sort((a, b) => a.localeCompare(b));
  } catch {
    return { categories: ["All"], items: [] };
  }

  const displayNames = folderNames.map(titleCase);
  const categories = ["All", ...displayNames];

  const items: GalleryItem[] = [];
  let id = 1;

  for (const folderName of folderNames) {
    const folderPath = path.join(galleryDir, folderName);
    const displayName = titleCase(folderName);

    let files: string[];
    try {
      files = fs
        .readdirSync(folderPath)
        .filter((f) => IMAGE_EXT.test(f))
        .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    } catch {
      continue;
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const imagePath = `/gallery/${folderName}/${file}`;
      items.push({
        id: id++,
        title: `${displayName} ${i + 1}`,
        category: displayName,
        image: imagePath,
        caption: "",
      });
    }
  }

  return { categories, items };
}
