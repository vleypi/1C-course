export const ROUTES = {
  home: "/",
  profile: "/profile",
  module: (module: string) => `/modules/${module}`,
  topic: (module: string, topic: string) => `/modules/${module}/topics/${topic}`,
  lesson: (module: string, topic: string, lesson: string) =>
    `/modules/${module}/topics/${topic}/lessons/${lesson}`,
} as const;
