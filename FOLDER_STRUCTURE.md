# Folder Structure Documentation

This documentation explains the folder structure of the application and the role of each folder and file within it. This structure is designed to help maintain scalability, modularity, and clarity as the project grows.

## Folder Breakdown
`app/(root)` (Root Folder):

This is the root folder that houses all the application logic and related configurations. The files and folders under this directory are structured to separate the concerns of the app, ensuring easy maintainability.

`app/(routes)` (Routing):

This folder contains all the routing logic for the application. Routing refers to the mechanism that determines how the app should respond to user requests. Example: `app/(routes)/events` This will redirect to /events

- **Purpose:** The `(routes)` folder ensures that all request handling is modular and easily maintainable.

`common/` (Reusable Logic):

The `common` folder contains all the reusable components, types, and utility functions that can be used throughout the application.

`common/components` (Common UI Components):

This folder contains the components used to build the user interface. These are reusable building blocks that help construct pages and layouts.

- **Purpose:** To keep UI components modular and reusable across different parts of the application.

`common/type` (TypeScript Types):

This folder holds TypeScript types, interfaces, and custom types used across the application. It centralizes type definitions to avoid repetition and ensure consistency.

- **Purpose:** To maintain type safety and centralize definitions of interfaces and types used throughout the app.

`config/` (Configuration Files):

The `config` folder contains configuration files that manage application settings, environment variables, database connections, and other external service configurations.

- **Purpose:** To store and manage configuration files that control various aspects of the application, such as environment-specific settings and integrations.

`styles/` (Stylesheets):
The styles folder contains the global and modular stylesheets for the application. This includes CSS, SCSS, or styled-components used to design the user interface.

- **Purpose:** The styles folder contains the global and modular stylesheets for the application. This includes CSS, SCSS, or styled-components used to design the user interface.

