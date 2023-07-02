"use client"

import { useStateRouter } from "@/app/components/hooks/useStateRouter"
import Link from "next/link"

import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/app/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form"
import { Input } from "@/app/components/ui/input"
import { Card } from "@/app/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/app/components/ui/alert"

export const LoginForm = ({ type }: { type: "Login" | "Sign up" }) => {
  const { router, isError, setIsError } = useStateRouter(false)

  let formSchema: any

  if (type === "Login") {
    formSchema = z.object({
      name: z.string().optional(),
      email: z.string().email({ message: "Invalid Email" }),
      password: z.string().min(5, { message: "Invalid Password" }),
    })
  } else {
    formSchema = z.object({
      name: z.string().min(1, { message: "Enter Your Name" }),
      email: z.string().email({ message: "Invalid Email" }),
      password: z.string().min(5, { message: "Invalid Password" }),
    })
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  async function onSubmit(values: z.infer<typeof formSchema>) {}

  return (
    <Card className="flex w-full items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-8 w-1/2"
        >
          <div className="space-y-2">
            <h1 className="text-4xl">{type}</h1>
            <p className="font-light">
              Join a fast growing community of successful students
            </p>
          </div>
          {isError ? (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              {type === "Login" ? (
                <AlertDescription>
                  This account cannot be found, consider{" "}
                  <Link href="/sign_up" className="underline text-blue-500">
                    signing up
                  </Link>
                </AlertDescription>
              ) : (
                <AlertDescription>
                  An account is already registered to this email, consider{" "}
                  <Link href="/login" className="underline text-blue-500">
                    logging in
                  </Link>
                </AlertDescription>
              )}
            </Alert>
          ) : null}
          {type === "Sign up" ? (
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="john doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : null}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormDescription>
                  Must be at least 5 characters long
                </FormDescription>
                <FormControl>
                  <Input placeholder="johndoe0!" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">{type}</Button>
        </form>
      </Form>
    </Card>
  )
}
