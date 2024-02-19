import Head from 'entities/Head';

export default function AboutUs() {
  return (
    <>
      <Head title="About us" />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-6">About us</h1>
          </div>
        </div>
      </div>
    </>
  );
}
