import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import GamesTable from './GamesTable';
import UserPaymentInfo from './UserPaymentInfo';
import PaymentReviewInfo from './PaymentReviewInfo';

const styles = {
  root: {
    width: '100%'    
  },
  button: {
    float: 'right',
    marginLeft: 5
  },
  progress: {
    position: 'absolute',
    left: '50%',
    top: '50%'
  }
};

let getSteps = () => {
  return ['Preview order', 'Confirm shipping and payment settings', 'Review settings'];
};

class CartProgress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      email: 'jdoe@email.com',
      showProgress: true
    };
  }

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });

    if (activeStep == getSteps().length -1) {
      setTimeout(() => {
        this.setState({ showProgress: false });
      }, 2000);
    }
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
    this.props.closeDialog();
  };

  render() {
    const steps = getSteps();
    const { activeStep } = this.state;
    const itemObjects = this.props.itemObjects;

    return (
      <div style={styles.root}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography style={styles.instructions}>
                {this.state.showProgress ? 
                  <CircularProgress style={styles.progress} size={50} /> :
                  <div>
                    Thanks for shopping with us, we will email to 
                    <span style={{fontWeight: 'bold'}}> {this.state.email} </span>
                    which should contain the tracking number once we ship your order.
                  </div>
                }
              </Typography>
              <Button onClick={this.handleReset} style={styles.button}>
                Done
              </Button>
            </div>
          ) : (
            <div>
              {this.state.activeStep == 0 && 
                <GamesTable itemObjects={itemObjects}/>
              }
              {this.state.activeStep == 1 && 
                <UserPaymentInfo />
              }
              {this.state.activeStep == 2 && 
                <PaymentReviewInfo itemObjects={itemObjects}/>
              }
              <div style={{ marginTop: 30 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.handleNext}
                  style={styles.button}
                >
                  {activeStep === steps.length - 1 ? 'Submit Payment' : 'Next'}
                </Button>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  style={styles.button}
                >
                  Back
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CartProgress;