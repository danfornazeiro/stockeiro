"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: z.email("E-mail inválido"),
    password: z
      .string()
      .trim()
      .min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "A confirmação deve ter no mínimo 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

const SignUpForm = () => {
  const router = useRouter();

  const handleSignInWithGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await authClient.signUp.email({
      name: values.username,
      email: values.email,
      password: values.password,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Conta criada com sucesso!");
          router.push("/");
        },
        onError: (error) => {
          if (error.error.code === "USER_ALREADY_EXISTS") {
            toast.error("E-mail ou senha inválidos.");

            return form.setError("email", {
              message: "E-mail já cadastrado.",
            });
          }
          toast.error(error.error.message);
        },
      },
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 md:flex-row md:gap-12 md:px-12">
      {/* Texto à esquerda (desktop) */}
      <div className="hidden text-center md:block md:w-1/2 md:text-left">
        <h1 className="text-2xl font-medium text-gray-900 md:text-3xl">
          Crie sua conta para acessar a plataforma
        </h1>
      </div>

      {/* Card de cadastro */}
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-xl font-medium text-gray-900 md:hidden">
          Crie sua conta
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">
                    Nome de usuário
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder=""
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder=""
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">Senha</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder=""
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-gray-700">
                    Confirmar senha
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder=""
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-sm text-red-500" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-blue-600 text-white transition-colors hover:bg-blue-700"
            >
              Criar conta
            </Button>
          </form>
        </Form>

        <div className="mt-4 text-center">
          <Link
            href="/authentication/sign-in"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Já tem conta? Entrar
          </Link>
        </div>

        <div className="my-4 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">ou</span>
          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        <Button
          onClick={handleSignInWithGoogle}
          variant="outline"
          className="flex w-full items-center justify-center gap-2 border-gray-300"
        >
          <FcGoogle className="text-xl" />
          Criar conta com o Google
        </Button>
      </div>
    </div>
  );
};

export default SignUpForm;
