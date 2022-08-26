export const interface PostType {
  id: string;
  title: string;
  body: string;
}

export const interface LocationGenerics = MakeGenerics<{
  LoaderData: {
    posts: PostType[];
    post: PostType;
  };
}>;