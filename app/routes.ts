import {
  type RouteConfig,
  route,
  index,
  prefix,
} from '@react-router/dev/routes'

export default [
  index('routes/index.tsx'),
  route('favorites', 'routes/favorites.tsx'),
  route('character/:id', 'routes/character.tsx'),
  route('invalid-session', 'routes/invalid-session.tsx'),
  route('search', 'routes/search.tsx'),
  ...prefix('api', [
    route('favorites', 'routes/api/favorites.ts'),
    route('theme', 'routes/api/theme.ts'),
  ]),
] satisfies RouteConfig
