# Portfolio Application

## Overview

This is a professional portfolio website built as a full-stack application showcasing a MERN developer's skills and experience. The application features a modern, responsive design with sections for hero introduction, about information, skills showcase, portfolio projects, work experience, and a contact form. It's built with React on the frontend and Express.js on the backend, with a PostgreSQL database for storing contact messages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The client-side is built using **React with TypeScript** and follows a modern component-based architecture:

- **Framework**: Vite-powered React application with TypeScript for type safety
- **UI Library**: Shadcn/ui components built on top of Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with CSS variables for theming and consistent design system
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation for type-safe form handling

The architecture uses a feature-based organization with reusable UI components, custom hooks for common functionality, and section-based page components for the portfolio content.

### Backend Architecture
The server-side follows a **REST API architecture** using Express.js:

- **Runtime**: Node.js with ES modules and TypeScript
- **Framework**: Express.js with middleware for JSON parsing and request logging
- **Storage Layer**: Abstract storage interface with in-memory implementation for development
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development Setup**: Hot-reload development server with Vite integration

The backend implements a simple contact form submission endpoint with Zod schema validation and proper error responses.

### Data Storage
The application uses a **hybrid storage approach**:

- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle migrations with shared schema definitions
- **Development Storage**: In-memory storage implementation for rapid development
- **Production Ready**: Database configuration ready for production deployment with Neon Database

Database tables include users for potential authentication and contact_messages for form submissions.

### Component Architecture
The frontend follows a **atomic design pattern**:

- **UI Components**: Low-level, reusable components from Shadcn/ui
- **Section Components**: Feature-specific components for portfolio sections
- **Page Components**: Top-level page layouts combining multiple sections
- **Custom Hooks**: Reusable logic for intersection observer, typewriter effects, and mobile detection

### Development Workflow
The project uses a **monorepo structure** with shared code:

- **Shared**: Common schemas and types shared between client and server
- **Client**: React frontend with Vite build system
- **Server**: Express.js backend with development hot-reload
- **Configuration**: Centralized TypeScript, Tailwind, and build configurations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18 with TypeScript, Vite for build tooling
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for styling and responsive design
- **State Management**: TanStack Query for server state and caching
- **Animation**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Hookform Resolvers for validation
- **Icons**: Lucide React for consistent iconography, React Icons for technology logos
- **Routing**: Wouter for lightweight client-side routing
- **Validation**: Zod for runtime type checking and schema validation

### Backend Dependencies
- **Server**: Express.js for HTTP server and middleware
- **Database**: Drizzle ORM with PostgreSQL driver (@neondatabase/serverless)
- **Validation**: Zod for request validation and Drizzle-Zod integration
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Session Management**: connect-pg-simple for PostgreSQL session store

### Development Tools
- **Build System**: Vite with React plugin and runtime error handling
- **TypeScript**: Full type checking across client, server, and shared code
- **Database Tooling**: Drizzle Kit for migrations and schema management
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Utilities**: date-fns for date handling, class-variance-authority for component variants