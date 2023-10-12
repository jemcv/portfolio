
const ProjectCards = ({ projects }) => {
  return (
    <section className="grid gap-4 my-4 md:grid-cols-2 md:items-center md:justify-center">
      {projects.map((project) => (
        <div className="bg-gray-300 p-4 rounded-md card" key={project.name}>
          <h1 className="mb-2 font-semibold">{project.name}</h1>
          <p className="text-sm font-medium">{project.description}</p>
          <a href={project.link} target="_blank">
            <img
              src={project.imageSrc}
              alt={`Visit the ${project.name} site`}
              className="mt-2 mx-auto w-auto h-64 object-cover rounded-md "
            />
          </a>
        </div>
      ))}
    </section>
  );
};

export default ProjectCards;