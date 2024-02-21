import { FormEvent } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'entities/auth';
import Head from 'entities/Head';
import { Container } from 'shared';
import { LoginWidget } from 'widgets/login';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  type LocationState = {
    from?: Location
  }
  const from = (location.state as LocationState)?.from?.pathname || '/';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username') as string;

    auth.signin(username, () => {
      // Sends the user back to the page he tried to visit
      // when he was redirected to the login page.
      navigate(from, { replace: true });
    });
  }

  return (
    <>
      <Head title="Login" />
      <Container className='flex justify-center my-36'>
        <LoginWidget />
      </Container>
    </>
  );
}
