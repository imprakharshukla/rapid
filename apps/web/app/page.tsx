"use client";

import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Input, Label, Loader } from "@repo/ui";


import useRestAPI from "./features/hooks/use-rest-client";
import { toast } from "sonner";
import { useState } from "react";
export default function Page() {

  const [text, setText] = useState("")
  const { client } = useRestAPI()

  const { data: helloData, isLoading: isHelloLoading, error } = client.hello.getHello.useQuery([
    "hello"
  ], {
  })

  const { mutate: mutateTextData, data: textData, isLoading: isTextLoading } = client.text.getText.useMutation()

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Hello API Endpoint</CardTitle>
            <CardDescription>GET endpoint using useQuery</CardDescription>
          </CardHeader>
          <CardContent>
            {isHelloLoading &&
              <Loader></Loader>
            }
            {
              helloData &&
              <p>
                {helloData.body.response}
              </p>
            }
          </CardContent>
        </Card>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Text API Endpoint</CardTitle>
            <CardDescription>POST endpoint using Mutation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid gap-3 max-w-md">
              <Label>Your name</Label>
              <Input onChange={(event) => {
                const value = event.target.value;
                setText(value)
              }} className="" />
              <Button onClick={() => {
                mutateTextData({
                  body: {
                    name: text
                  }
                })
              }}>Send Request</Button>
            </div>
            {isTextLoading &&
              <Loader></Loader>
            }
            {
              textData &&
              <p>
                {textData.body.response}
              </p>
            }
          </CardContent>
        </Card>


      </div>
    </div>
  );
}
