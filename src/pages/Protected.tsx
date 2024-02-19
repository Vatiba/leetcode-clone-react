import Head from 'entities/Head';

export default function Protected() {
  return (
    <>
      <Head title="Home" />
      <div className="hero flex-grow">
        <div className="hero-content flex-col lg:flex-row">
          <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Protecte screen</h1>
            <p className="pt-6">Provident cupiditate voluptatem et in.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
