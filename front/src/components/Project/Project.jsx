import { logo } from "../Images";

const Project = () => {
  return (
    <div className="w-80 h-auto">
      <img
        src={logo}
        alt="project"
        className="rounded-xl shadow-lg hover:contrast-[0.8] transition duration-200 cursor-pointer"
      />
    </div>
  );
};

export default Project;
