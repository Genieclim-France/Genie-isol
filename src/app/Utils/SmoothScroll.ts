export const scrollToElement = (
  e: React.MouseEvent<HTMLAnchorElement>,
  elementId: string
) => {
  e.preventDefault();
  const element = document.querySelector(elementId);
  element?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
