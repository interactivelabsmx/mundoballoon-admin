interface WithTypename {
  __typename?: string;
}

export default function removeTypename<T>(obj: T & WithTypename) {
  const newObj = { ...obj };
  delete newObj.__typename;
  return newObj;
}
