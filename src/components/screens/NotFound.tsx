import Head from '~/components/shared/Head';

export default function NotFoundScreen() {
  return (
    <>
      <Head title="Page not found" />
      <div className="hero flex-grow">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold py-6">Gözlenýän sahypa tapylmady</h1>
            {/* <p className="py-6">
              Gözlenýän sahypa tapylmady.
            </p> */}
            <a className="btn btn-primary" href="/">
              Esasy sahypa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
