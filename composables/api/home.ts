import getBaseUrl from "@/lib/get-base-url/getBaseUrl";
import { pagesPath, filterBySlug } from "@/utils/const";
const getHomePageData = async () => {
  const res = await fetch(
    `${getBaseUrl()}${pagesPath}&${filterBySlug("home-page")}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }

  const home = await res.json();

  return home;
};

export default getHomePageData;
