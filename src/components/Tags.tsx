
export interface INpmTagProps {
  name?: string;
}

export function NpmTag(props: INpmTagProps) {
  const { name } = props
  if (!name) {
    return null
  }
  return (
    <>
      <a href="###">
        <img src={`https://badge.fury.io/js/${name}.svg`} alt="npm version" height="14" />
      </a>
      <a href={`https://www.npmjs.com/package/${name}`}>
        <img src={`https://img.shields.io/npm/dm/${name}.svg`} alt="npm downloads" height="14" />
      </a>
    </>
  );
}