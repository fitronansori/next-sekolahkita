import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  highlighted_text?: string;
  className?: string;
  title_class_name?: string;
  description_class_name?: string;
  center?: boolean;
};

const SectionHeader = ({
  title,
  description,
  highlighted_text,
  className,
  title_class_name,
  description_class_name,
  center = true,
}: SectionHeaderProps) => {
  const renderTitle = () => {
    if (highlighted_text) {
      const parts = title.split(highlighted_text);
      return (
        <>
          {parts[0]}
          <span className="text-primary">{highlighted_text}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <div className={cn("", center && "text-center", className)}>
      <h2
        className={cn(
          "mb-4 text-3xl font-bold tracking-tight sm:text-4xl",
          title_class_name
        )}
      >
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground mx-auto max-w-2xl text-lg",
            description_class_name
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
