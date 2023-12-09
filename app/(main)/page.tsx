import homeService from "@/composables/services/home";
import ArticlesWidget from "@/app/_components/_o/Article";
import { BACKEND } from "@/utils/mocked-backend";

export default async function Home() {
  // const { articles } = await homeService();

  const articlesSection = BACKEND.articles.list.map((article, index) => (
    <ArticlesWidget key={index} {...article} />
  ));

  return (
    <>
      <h1 className="mb-[35px]">Main page with personal layout</h1>
      <div>
        {/* <pre
          style={{
            overflow: "auto",
            maxWidth: "100vw",
          }}
        >
          {JSON.stringify(BACKEND.articles, null, 2)}
        </pre> */}
        <div className="grid gap-4 grid-cols-2">{articlesSection}</div>
      </div>
    </>
  );
}
