// import utilities from astro:content
import { defineCollection, z } from "astro:content";
import { format } from "date-fns";
// define your collection
const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform((str) => format(new Date(str), "MMMM dd, yyyy")),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
  }),
});
// export a single collections object to register your collection.
// this key should match your collection directory name in src/content
export default {
  posts: postsCollection,
};
