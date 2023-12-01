
const ProjectCards = ({ projects }) => {
  return (
    <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
      {projects.map((project) => (
        <a href={project.link} target="_blank" key={project.name}>
          <div className="bg-neutral-800 p-4  rounded-md card">
            <h1 className="mb-2 font-semibold">{project.name}</h1>
            <p className="text-sm text-neutral-300 font-medium">{project.description}</p>
            <img
              src={project.imageSrc}
              alt={`Visit the ${project.name} site`}
              className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "
            />
          </div>
        </a>
      ))}
    </section>
  );
};

export default ProjectCards;
