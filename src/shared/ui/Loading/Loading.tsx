import logo from 'shared/assets/img/logo.png';

function Logo() {
	return <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />;
}

export default function Loading() {
  return (
    <div className="p-4 w-full h-full">
      <Logo />
    </div>
  )
}
