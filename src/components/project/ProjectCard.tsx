interface ProjectCardProps {
  title: string;
}

export default function ProjectCard({ title }: ProjectCardProps) {
  return <div>{title}</div>;
}
