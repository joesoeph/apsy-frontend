export async function POST(request: Request) {
  const body = await request.json();
  const response = await fetch(
    'http://localhost:3000/authManagement/auth/login',
    {
      method: 'post',
      body,
    },
  );
  //   if (response.ok) {
  // }
  const responseBody = await response.json();
  console.log(responseBody, response.status);
  return Response.json({ message: 'Lah' });
}
