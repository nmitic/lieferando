import {
  UIBreadcrumbs,
  UILink,
  Typography
} from '../../../adaptersUiLib';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  link: {
    cursor: 'pointer'
  }
}));

const Breadcrumbs = props => {
  const router = useRouter();
  const classes = useStyles()

  const generateBreadcrumbPathObject = (paths, homePathName) => {
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

  console.log(router.asPath, generateBreadcrumbPathObject(router.asPath))
  const pathsToRender = generateBreadcrumbPathObject(router.asPath, 'help center');

  return (
    <UIBreadcrumbs aria-label='breadcrumb' className={classes.root}>
      {
        pathsToRender.map((item, index) => {
          return (
            // Do not render link for the last path in the breadcrumbs
            index + 1 !== pathsToRender.length ?
              <Link 
                href={item.path} 
                key={item.path}
              >
                <UILink className={classes.link}>
                  {item.name}
                </UILink>
              </Link> 
              :
              <Typography>{item.name}</Typography>
          )
        })
      }
    </UIBreadcrumbs>
  );
}

export default Breadcrumbs;