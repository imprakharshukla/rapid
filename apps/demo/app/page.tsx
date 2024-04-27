"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Loader } from "@repo/ui";
import SyntaxHighlighter from 'react-syntax-highlighter';

import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import useRestAPI from "./features/hooks/use-rest-client";
import { toast } from "sonner";
import { useState } from "react";
export default function Page() {

  const [text, setText] = useState("")
  const { client } = useRestAPI()

  const { data: helloData, isLoading: isHelloLoading, error, refetch: refetchHello, isRefetching: isHelloRefetching } = client.hello.getHello.useQuery([
    "hello"
  ], {
  })

  const helloContractString = (`
  import { initContract } from "
    @ts-rest / core";
    import { z } from "zod";

    const c = initContract();

    export const helloContract = c.router({
      getHello: {
        method: "GET",
        path: "/hello",
        responses: {
          200: z.object({
            response: z.string(),
          }),
          500: z.object({
            response: z.string(),
          }),
        },
        summary: "Echo Hello",
      },

    });
  `)

  const queryCodeString = (`
   const { data: helloData, isLoading: isHelloLoading, error, refetch: refetchHello, isRefetching: isHelloRefetching } = client.hello.getHello.useQuery([
    "hello"
  ], {
  })

  `)


  // const { mutate: mutateTextData, data: textData, isLoading: isTextLoading } = client.text.getText.useMutation()

  return (
    <div className="w-full m-5 lg:mx-auto gap-2 grid lg:min-h-[600px] xl:min-h-[800px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="border-dashed h-[300px]">
          <CardHeader>
            <CardTitle>Hello API Endpoint</CardTitle>
            <CardDescription>GET endpoint using useQuery</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid gap-3 lg:max-w-md">
              {(isHelloLoading || isHelloRefetching) &&
                <Loader></Loader>
              }
              {
                (helloData && !isHelloLoading && !isHelloRefetching) &&
                <p>
                  {helloData.body.response}
                </p>
              }
              <Button variant={"outline"} onClick={() => {
                refetchHello()
              }}>Refetch</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-dashed h-[300px]">
          <CardHeader>
            <CardTitle>Text API Endpoint</CardTitle>
            <CardDescription>POST endpoint using Mutation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid gap-3 lg:max-w-md">
              <Label>Your name</Label>
              <Input onChange={(event) => {
                const value = event.target.value;
                setText(value)
              }} className="" />
              <Button onClick={() => {
                //     mutateTextData({
                //       body: {
                //         name: text
                //       }
                //     })
                //   }}>Send Request</Button>
                // </div>
                // {isTextLoading &&
                //   <Loader></Loader>
                // }
                // {
                //   textData &&
                //   <p>
                //     {textData.body.response}
                //   </p>
              }
              }></Button>
            </div>
          </CardContent>
        </Card>




      </div>
      <div>
        <Card className="border-dashed ">
          <CardHeader>
            <CardTitle>TS Rest Contracts (Shared)</CardTitle>
            <CardDescription>Use the @ts-rest/core package to define a contract. Nesting routers can help organize your resources. For example, /users/:id/posts could have a nested router contract.users.posts. This is the path that you'd use on the client to query the API</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border border-border rounded bg-card">
              <SyntaxHighlighter
                language="typescript"
                style={atomOneDark}
                wrapLongLines
                customStyle={{
                  flex: '1',
                  background: 'transparent',
                }}
              >
                {helloContractString}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>

      </div>
      <div>
        <Card className="border-dashed ">
          <CardHeader>
            <CardTitle>TS React Query (Frontend)</CardTitle>
            <CardDescription>This is a client using @ts-rest/react-query, using @tanstack/react-query under the hood.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border border-border rounded">
              <SyntaxHighlighter
                language="typescript"
                style={atomOneDark}
                wrapLongLines
                customStyle={{
                  flex: '1',
                  background: 'transparent',
                }}
              >
                {queryCodeString}
              </SyntaxHighlighter>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  );
}
