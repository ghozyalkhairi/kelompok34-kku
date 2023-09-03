import { Select } from "@chakra-ui/react";
import { StaticImageData } from "next/image";
import { Dispatch, FC, SetStateAction } from "react";

interface ProjectSelectorProps {
  projects: {
    id: number;
    title: string;
    images: StaticImageData[];
  }[];
  setSelectedProject: Dispatch<
    SetStateAction<{
      id: number;
      title: string;
      images: StaticImageData[];
    }>
  >;
}

const ProjectSelector: FC<ProjectSelectorProps> = ({
  projects,
  setSelectedProject,
}) => {
  return (
    <Select
      w="100%"
      onChange={(e) => {
        const selectedProject = projects.find(
          (project) => project.id === Number(e.target.value)
        );
        if (selectedProject) {
          setSelectedProject(selectedProject);
        }
      }}
      defaultValue={projects[0].id}
      color="brand.secondary"
      borderColor="brand.secondary"
      mb="4"
    >
      {projects.map((project) => (
        <option
          key={project.id}
          value={project.id}
          style={{
            backgroundColor: "#303030",
          }}
        >
          {project.title}
        </option>
      ))}
    </Select>
  );
};

export default ProjectSelector;
