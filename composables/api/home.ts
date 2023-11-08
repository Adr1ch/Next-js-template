import getBaseUrl from "@/lib/get-base-url/getBaseUrl";

const getHomePageData = async () => {
  const res = await fetch(
    `${getBaseUrl()}/api/pages?populate=deep,10&?filters[slug][$eq]=home-page`,
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
