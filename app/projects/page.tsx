import Gallery from "@/components/layout/Gallery";
import Header from "@/components/shared/Header";
import { projects } from "@/portfolio/projects/projects";

export default function Projects() {
  return (
    <>
      <Header title="Projects" />
      <div className="flex flex-col items-center justify-center mx-auto">
        <Gallery list={projects} />
      </div>
    </>
  );
}
