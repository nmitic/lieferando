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

const Breadcrumbs = ({pathsObject}) => {
  const classes = useStyles()

  return (
    <UIBreadcrumbs aria-label='breadcrumb' className={classes.root}>
      {
        pathsObject.map((item, index) => {
          return (
            // Do not render link for the last path in the breadcrumbs
            index + 1 !== pathsObject.length ?
              <Link 
                href={item.path} 
                key={item.path}
              >
                <UILink className={classes.link}>
                  {item.name}
                </UILink>
              </Link> 
              :
              <Typography key={item.name}>{item.name}</Typography>
          )
        })
      }
    </UIBreadcrumbs>
  );
}

export default Breadcrumbs;