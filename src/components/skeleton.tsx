interface SkeletonProps {
  className: string;
}
export default function Skeleton(props: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-pink-300 rounded-sm ${props.className}`}
    ></div>
  );
}
