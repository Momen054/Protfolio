const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle?.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const projects = {
  ecommerce: {
    title: "E-Commerce API",
    overview: "A RESTful e-commerce backend API designed to manage products, categories, users, authentication, authorization, carts, orders, and related business operations.",
    features: ["User authentication", "Authorization and role-based access", "Product and category management", "Cart management", "Order management", "JWT authentication", "Refresh token handling", "Validation and database integration"],
    tech: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "ASP.NET Core Identity", "JWT", "Refresh Tokens", "AutoMapper", "FluentValidation"],
    architecture: "The project is organized around backend responsibilities and maintainable application code. Replace this text with your exact architecture details as the project evolves.",
    database: "SQL Server with Entity Framework Core. Authentication and authorization use ASP.NET Core Identity and JWT-based access tokens.",
    github: "https://github.com/Momen054/ECommerce-API"
  },
  hotel: {
    title: "Hotel Management System",
    overview: "A hotel management backend system for managing guests, rooms, reservations, invoices, payments, and hotel services.",
    features: ["Guest management", "Room management", "Room types", "Reservations", "Invoices", "Payments", "Services", "Role-based authorization"],
    tech: ["C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "REST API", "AutoMapper", "FluentValidation", "Repository Pattern", "Unit of Work"],
    architecture: "The project uses Repository Pattern and Unit of Work to organize data access and keep application responsibilities separated.",
    database: "SQL Server integrated through Entity Framework Core for reservations, rooms, invoices, payments, and related entities.",
    github: "https://github.com/Momen054/HotelManagement"
  },
  book: {

    title: "Book Management System",

    overview: "A book management backend system for managing books, authors, categories, publishers, borrowings, reservations, reviews, and fines.",

    features: [
        "Book management",
        "Author management",
        "Category management",
        "Publisher management",
        "Borrowing management",
        "Reservations",
        "Reviews",
        "Fine management",
        "Role-based authorization"
    ],

    tech: [
        "C#",
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "REST API",
        "ASP.NET Core Identity",
        "JWT Authentication",
        "AutoMapper",
        "FluentValidation",
        "Repository Pattern",
        "Unit of Work"
    ],

    architecture: "The project follows Clean Architecture with Repository Pattern and Unit of Work to separate application responsibilities and organize data access.",

    database: "SQL Server integrated through Entity Framework Core for books, authors, categories, publishers, borrowings, reservations, reviews, and fines.",

    github: "https://github.com/Momen054/BookManagement"

}
};

const modal = document.querySelector("#project-modal");
const closeModal = () => {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

document.querySelectorAll(".project-details").forEach(button => {
  button.addEventListener("click", () => {
    const data = projects[button.dataset.project];
    if (!data) return;

    document.querySelector("#modal-title").textContent = data.title;
    document.querySelector("#modal-overview").textContent = data.overview;
    document.querySelector("#modal-architecture").textContent = data.architecture;
    document.querySelector("#modal-database").textContent = data.database;

    const featureList = document.querySelector("#modal-features");
    featureList.innerHTML = "";
    data.features.forEach(feature => {
      const li = document.createElement("li");
      li.textContent = feature;
      featureList.appendChild(li);
    });

    const techList = document.querySelector("#modal-tech");
    techList.innerHTML = "";
    data.tech.forEach(tech => {
      const span = document.createElement("span");
      span.textContent = tech;
      techList.appendChild(span);
    });

    document.querySelector("#modal-github").href = data.github;
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  });
});

modal?.addEventListener("click", e => {
  if (e.target.matches("[data-close]")) closeModal();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

document.querySelector("#contact-form")?.addEventListener("submit", e => {
  e.preventDefault();
  const note = document.querySelector("#form-note");
  note.textContent = "Your message is ready, but this frontend-only form is not connected to a backend yet.";
  note.style.color = "var(--accent)";
});
