import moment from "moment";
import getBaseUrl from "@/lib/get-base-url/getBaseUrl";
import getHomePageData from "@/composables/api/home";

const transformArticlesData = (data: any) => {
  const articles = data?.find((i: any) => i?.__component?.includes("articles"));

  const articlesList = articles.articlesList.map(({ article }: any) => {
    const {
      title,
      intro,
      slug,
      date,
      authorName,
      image,
      category,
      authorPhoto,
    } = article.data.attributes;

    const authorImage = getBaseUrl() + authorPhoto.data.attributes.url;

    const articleImage = getBaseUrl() + image.data.attributes.url;

    const categoriesList = category.data.map(({ attributes }: any) => {
      const { title, categorySlug } = attributes;

      return {
        title,
        slug: categorySlug,
      };
    });

    return {
      title,
      intro,
      href: `/blog/${slug}`,
      categories: categoriesList,
      date: moment(date).format("MMMM Do YYYY, h:mm:ss a"),
      authorName,
      authorImage,
      articleImage,
    };
  });

  return {
    title: articles.title,
    intro: articles.intro,
    list: articlesList,
  };
};

async function homeService() {
  const { data } = await getHomePageData();

  const blocksData = data?.[0]?.attributes?.blocks;

  const articles = transformArticlesData(blocksData) as {
    title: string;
    intro: string;
    list: {
      title: string;
      intro: string;
      href: string;
      categories: {
        title: string;
        slug: string;
      }[];
      date: string;
      authorName: string;
      authorImage: string;
      articleImage: string;
    }[];
  };

  return {
    articles,
  };
}

export default homeService;
