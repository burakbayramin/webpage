"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Github, Linkedin, Mail, FileDown, Link } from "lucide-react";

export function PersonalPage() {
  const projects = [
    {
      title: "Quiksy",
      description:
        "I developed a project that showcases the implementation of microservices architecture using Spring Boot and Spring Cloud. The application involves creating modular services, containerizing them with Docker, and orchestrating them using Kubernetes. I deployed the microservices on Google Cloud's Kubernetes Engine (GKE), demonstrating how to manage and scale applications in a cloud environment.",
      githubLink: "https://github.com/burakbayramin/quiksy",
      liveDemoLink: "",
      image: "/images/1.PNG",
    },
    {
      title: "Ordering System",
      description:
        "This project demonstrates microservices architecture while applying Clean Architecture, Hexagonal Architecture, and Domain-Driven Design (DDD) principles.",
      githubLink: "https://github.com/burakbayramin/ordering-system",
      liveDemoLink: "",
      image: "/images/2.png",
    },
    {
      title: "Booknest",
      description: "Microservice project for a book store.",
      githubLink: "",
      liveDemoLink: "",
      image: "/images/3.PNG",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Burak Bayramin</h1>
      <Card className="w-full max-w-md">
        <CardContent className="space-y-4 pt-6">
          <div className="flex items-center space-x-2">
            <Github className="h-5 w-5 text-gray-500" />
            <a
              href="https://github.com/burakbayramin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/burakbayramin
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="h-5 w-5 text-gray-500" />
            <a
              href="https://www.linkedin.com/in/burak-bayramin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/burak-bayramin
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Link className="h-5 w-5 text-gray-500" />
            <a
              href="https://medium.com/@burakbyrmn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              medium.com/@burakbyrmn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-gray-500" />
            <a
              href="mailto:burakbyrmn@gmail.com"
              className="text-blue-600 hover:underline"
            >
              burakbyrmn@gmail.com
            </a>
          </div>
        </CardContent>
        <CardFooter className="pt-6">
          <Button className="w-full" variant="outline" asChild>
            <a
              href="https://drive.google.com/file/d/1N5oaTN_lBzWobTjug77F8TJQrD46P0f_/view?usp=sharing"
              download
            >
              <FileDown className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </CardFooter>
      </Card>
      <div className="w-full max-w-full mt-16 px-4 md:px-8">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Projects</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project, index) => (
            <Card key={index} className="w-full sm:w-3/5 md:w-2/5">
              <CardHeader className="p-4 pb-0">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </CardHeader>
              <CardContent className="p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-md"
                />
              </CardContent>
              <CardContent className="p-4">
                <p className="text-lg text-gray-700">{project.description}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex space-x-4">
                  <Button variant="link" asChild>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-6 w-6 mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button variant="link" asChild>
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Link className="h-6 w-6 mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
