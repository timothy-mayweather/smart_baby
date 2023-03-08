import React from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Home(props) {
  return (
    <GuestLayout>
      <Head title="Home" />
      <div>
        Home Page
      </div>
      <div className="d-flex items-center justify-content-end mt-4">
        {props.auth.user ? (
          <Link href={route('dashboard')}>
            <button type="button" className="btn btn-dark ml-4">Dashboard</button>
          </Link>
        ) : (
          <>
            <Link href={route('login')}>
              <button type="button" className="btn btn-dark ml-4">Log in</button>
            </Link>

            <Link href={route('register')}>
              <button type="button" className="btn btn-dark ml-4">Register</button>
            </Link>
          </>
        )}
      </div>
    </GuestLayout>
  );
}
