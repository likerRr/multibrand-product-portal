interface Input {
  id: string | number;
  title: string;
}

export const makeSlug = ({ id, title }: Input) => {
  const friendly = title.toLowerCase().trim().replace(/\s/g, '-');

  return `${friendly}-${id}`;
};

export const parseSlug = (slug: string) => {
  const parts = slug.split('-');
  const id = parts.pop() ?? '0';
  const title = parts.join('-') ?? '';

  return { id, title };
};
