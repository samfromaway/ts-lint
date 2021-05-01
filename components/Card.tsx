type CardProps = { title: number; description: string };

export default function Card({ title, description }: CardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
