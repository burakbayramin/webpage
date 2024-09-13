'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileDown, Link } from "lucide-react"

export function PersonalPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Burak Bayramin</h1>
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center space-x-2">
            <Github className="h-5 w-5 text-gray-500" />
            <a href="https://github.com/burakbayramin" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              github.com/burakbayramin
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="h-5 w-5 text-gray-500" />
            <a href="https://www.linkedin.com/in/burak-bayramin/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              linkedin.com/in/burak-bayramin
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Link className="h-5 w-5 text-gray-500" />
            <a href="https://medium.com/@burakbyrmn" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              medium.com/@burakbyrmn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-gray-500" />
            <a href="mailto:burakbyrmn@gmail.com" className="text-blue-600 hover:underline">
              burakbyrmn@gmail.com
            </a>
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full" variant="outline" asChild>
            <a href="https://drive.google.com/file/d/1N5oaTN_lBzWobTjug77F8TJQrD46P0f_/view?usp=sharing" download>
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}