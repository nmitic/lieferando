import {
  UIBreadcrumbs,
  UILink,
  Typography
} from '../../../adaptersUiLib';

import Link from 'next/link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3)
  },
  link: {
    cursor: 'pointer'
  }
}));

const Breadcrumbs = ({ pathsObject }) => {
  const classes = useStyles()

  return (
    <UIBreadcrumbs aria-label='breadcrumb' className={classes.root}>
      {
        pathsObject.map((item, index) => {
          return (
            <div data-testid="breadcrumb-item" key={item.path}>
              {
                // Do not render link for the last path in the breadcrumbs
                index + 1 !== pathsObject.length ?
                  <Link
                    href={item.path}
                  >
                    <UILink className={classes.link}>
                      {item.name}
                    </UILink>
                  </Link>
                  :
                  <div data-testid="breadcrumb-item-non-link">
                    <Typography key={item.name}>{item.name}</Typography>
                  </div>
              }
            </div>
          )
        })
      }
    </UIBreadcrumbs>
  );
}

export default Breadcrumbs;