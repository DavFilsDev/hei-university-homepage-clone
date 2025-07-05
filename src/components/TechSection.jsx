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

const technologiesUP = [
  { logo: java },
  { logo: python },
  { logo: js },
  { logo: c },
  { logo: ts },
];
const technologiesDown = [
  { logo: docker },
  { logo: nextjs },
  { logo: aws },
  { logo: serverless },
  { logo: react },
  { logo: openai },
];

export default function TechSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-[var(--primary)] max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Les technos et langages utilisées
        </h2>
        <p className="max-w-4xl mx-auto text-sm">
          Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center">
        {technologiesUP.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-25 object-contain"
            />
          </div>
        ))}
      </div>
      <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-items-center">
        {technologiesDown.map((tech) => (
          <div key={tech.name} className="flex flex-col items-center space-y-2">
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
