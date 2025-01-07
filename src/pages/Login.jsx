
import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
  const handleForm = (e) => {
    e.prevenDefault();
  }
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to Your Account</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="w-full flex-col flex gap-5" onSubmit={handleForm} >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Email@email.com" type="email" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input id="password" placeholder="Password" type="Password" />
              </div>
            </div>
            <CardFooter className="flex justify-between p-0">
              <Button variant="outline" type="reset" >Clear</Button>
              <Button type="submit" >Login</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>

    </div>
  )
}

export default Login
