import { v4 as uuidv4 } from "uuid";

export const DEFAULT_CARDS = [
  //BACKLOG
  {
    title: "Investigate authentication latency issues",
    id: uuidv4(),
    column: "backlog",
  },
  {
    title: "Plan API versioning strategy for mobile clients",
    id: uuidv4(),
    column: "backlog",
  },
  {
    title: "Explore new UI component library options",
    id: uuidv4(),
    column: "backlog",
  },

  //TODO
  {
    title: "Write technical spec for cache invalidation service",
    id: uuidv4(),
    column: "todo",
  },
  {
    title: "Schedule performance testing for checkout flow",
    id: uuidv4(),
    column: "todo",
  },
  {
    title: "Create documentation for new onboarding process",
    id: uuidv4(),
    column: "todo",
  },

  //DOING
  {
    title: "Implement error tracking for GraphQL resolvers",
    id: uuidv4(),
    column: "doing",
  },
  {
    title: "Migrate legacy user service to TypeScript",
    id: uuidv4(),
    column: "doing",
  },
  {
    title: "Optimize database queries for analytics dashboard",
    id: uuidv4(),
    column: "doing",
  },

  //COMPLETED
  {
    title: "Onboard new team members to CI/CD pipeline",
    id: uuidv4(),
    column: "done",
  },
];