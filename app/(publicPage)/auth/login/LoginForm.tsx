'use client';

import { loginAction } from '@/app/(publicPage)/auth/login/actions';
import { Logo } from '@/components/Globals/Logo/Logo';
import { Button } from '@nextui-org/button';
import { Card, CardBody, CardHeader } from '@nextui-org/card';
import { Divider } from '@nextui-org/divider';
import { Input } from '@nextui-org/input';
import { Link } from '@nextui-org/link';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';
import { useEffect } from 'react';
// @ts-ignore
import { useFormState } from 'react-dom';

export default function LoginForm() {
  const [loginFormState, loginFormAction] = useFormState(loginAction, null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    if (!!loginFormState) {
      onOpen();
    }
  }, [loginFormState, onOpen]);
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center">
        <Card className="w-[400px]">
          <CardHeader className="flex justify-center gap-3">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </CardHeader>
          <Divider />
          <CardBody>
            <h1 className="text-lg font-bold">Login</h1>
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

      <Button onPress={onOpen}>Open Modal</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
