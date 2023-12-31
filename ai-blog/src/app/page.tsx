import Trending from "./(home)/Trending";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      <Trending />
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          {/*<Tech />*/}
          {/*<Travel />*/}
          {/*<Other />*/}
          <div className="md:block hidden">{/*<Subscribe />*/}</div>
        </div>
        <div className="basis-1/4">{/*<SideBar />*/}</div>
      </div>
    </main>
  );
}
