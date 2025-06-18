import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

// Ruta protegida
const isProtectedRoute = createRouteMatcher([
  "/propiedades/favoritos(.*)",
]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();

  if (isProtectedRoute(context.request) && !userId) {
    return redirectToSignIn();
  }

  // Clerk maneja el paso siguiente automáticamente
});
