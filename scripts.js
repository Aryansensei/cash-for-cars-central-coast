document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".left-panel li");
  const contents = document.querySelectorAll(".right-panel .content");

  const showContent = (element) => {
    // Remove active class from all headings and contents
    headings.forEach((h) => h.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked or hovered heading and corresponding content
    element.classList.add("active");
    const contentId = element.getAttribute("data-content");
    document.getElementById(contentId).classList.add("active");
  };

  headings.forEach((heading) => {
    heading.addEventListener("click", () => {
      showContent(heading);
    });

    heading.addEventListener("mouseenter", () => {
      showContent(heading);
    });
  });
});
