import getHomePageData from "@/composables/api/home";

export default async function Home() {
  const response = await getHomePageData();

  return (
    <>
      <h1 className="mb-[35px]">Main page with personal layout</h1>
      <div>
        <pre
          style={{
            overflow: "auto",
            maxWidth: "100vw",
          }}
        >
          {JSON.stringify(response)}
        </pre>
      </div>
    </>
  );
}
