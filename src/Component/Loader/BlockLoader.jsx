import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  blockLoader: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
});

const BlockLoader = () => {
  const classes = useStyles();

  return (
    <div className={classes.blockLoader}>
      <Loader type="BallTriangle" color="#3f51b5" height={100} width={100} />
    </div>
  );
};

export default BlockLoader;
