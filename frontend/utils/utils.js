export const formatDate = date => new Date(date).toUTCString();

export const generateBreadcrumbPathObject = (paths, homePathName) => {
  const homePath = { path: '/', name: homePathName };
  const isOnRootPath = paths === '/';
  const arrayOfPaths = paths.split('/');
  //remove the first item which is empty string
  arrayOfPaths.shift();

  // If current path is root return root path, as there is no need to iterate over the path
  if (isOnRootPath) {
    return [homePath]
  }
  // otherwise build the paths array object
  return arrayOfPaths.reduce((acc, curr, index) => [...acc, { path: `${acc[index].path}${curr}/`, name: curr }], [homePath]);
}