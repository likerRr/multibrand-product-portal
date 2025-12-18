import { proxy } from '@repo/infra/config/proxy';

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

export { proxy };
