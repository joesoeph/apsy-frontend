'use server';

import { cookies } from 'next/headers';

export async function loginAction(previousState, formData) {
  const { email, password } = Object.fromEntries(formData);

  const response = await fetch(
    'http://localhost:3000/authManagement/auth/login',
    {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // email,
        // password,
      }),
    },
  );

  const responseBody = await response.json();

  console.log(responseBody);

  if (response.ok) {
    cookies().set('token', responseBody.accessToken, {
      httpOnly: true,
    });
    return null;
  } else {
    console.log(responseBody);
    return responseBody;
  }
}
