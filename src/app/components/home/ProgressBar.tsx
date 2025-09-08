interface ProgressBarProps {
  percentage: number;
  title: string;
}

function ProgressBar({ percentage, title }: ProgressBarProps) {
  const getAnimationClass = (percentage: number) => {
    switch (percentage) {
      case 93:
        return "animate-fill-93";
      case 100:
        return "animate-fill-100";
      case 95:
        return "animate-fill-95";
      case 90:
        return "animate-fill-90";
      case 85:
        return "animate-fill-85";
      default:
        return "";
    }
  };

  return (
    <>
      <p className="text-lg font-emOne uppercase mt-4">{title}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`bg-primary h-2.5 rounded-full ${getAnimationClass(
            percentage
          )}`}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
