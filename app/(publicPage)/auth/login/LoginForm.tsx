'use client';

import { loginAction } from '@/app/(publicPage)/auth/login/actions';
import { Logo } from '@/components/Globals/Logo/Logo';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
// @ts-ignore
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [loginFormState, loginFormAction] = useFormState(loginAction, null);
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="flex justify-center gap-3">
          <Logo />
          <p className="font-bold text-inherit">ACME</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <h1 className="text-lg font-bold">Login</h1>
          <p>Last submission request returned: {loginFormState}</p>
          <form action={loginFormAction} className="mt-6 flex flex-col gap-4">
            <Input
              name="email"
              type="email"
              label="Email"
              labelPlacement="inside"
              placeholder="Enter your email"
              defaultValue="superadmin@mail.com"
            />
            <Input
              name="password"
              type="password"
              label="Password"
              labelPlacement="inside"
              placeholder="Enter your password"
              defaultValue="Pa55word"
            />
            <Link href="#" className="self-end text-sm">
              Forgot password?
            </Link>
            <Button
              type="submit"
              variant="solid"
              color="primary"
              className="my-2"
            >
              Login
            </Button>
            <Button
              type="button"
              variant="solid"
              color="primary"
              className="my-2"
            >
              Get Cookies
            </Button>
            <p className="text-xs">
              Don&apos;t have an account yet?{' '}
              <Link href="#" className="text-xs">
                Call your IT support
              </Link>
              <Link href="/authManagement/users" className="text-xs">
                Go to users
              </Link>
            </p>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
