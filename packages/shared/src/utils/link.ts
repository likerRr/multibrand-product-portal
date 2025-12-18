export const prefixHref = (prefix: string, href: string) => {
  const normHref = href.startsWith('/') ? href.slice(1) : href;

  return `/${prefix}/${normHref}`;
};
