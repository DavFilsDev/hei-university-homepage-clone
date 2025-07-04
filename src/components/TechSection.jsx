import java from '../assets/tech/java.png';
import python from '../assets/tech/py.png';
import js from '../assets/tech/js.png';
import c from '../assets/tech/c.png';
import ts from '../assets/tech/ts.png';
import docker from '../assets/tech/docker-300x77.png';
import nextjs from '../assets/tech/nextJs.png';
import aws from '../assets/tech/aws.png';
import serverless from '../assets/tech/serverless.png';
import react from '../assets/tech/react.png';
import openai from '../assets/tech/openapi.png';

const technologies = [
  { name: "Java", logo: java },
  { name: "Python", logo: python },
  { name: "JavaScript", logo: js },
  { name: "C", logo: c },
  { name: "TypeScript", logo: ts },
  { name: "Docker", logo: docker },
  { name: "Next.js", logo: nextjs },
  { name: "AWS", logo: aws },
  { name: "Serverless", logo: serverless },
  { name: "React", logo: react },
  { name: "OpenAPI", logo: openai },
];

export default function TechSection() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Les technos et langages utilisées
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center">
        {technologies.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-16 object-contain hover:scale-110 transition-transform duration-300"
            />
            <p className="text-sm text-gray-700">{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
