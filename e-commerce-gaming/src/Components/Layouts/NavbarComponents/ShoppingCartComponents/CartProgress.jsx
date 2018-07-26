import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GamesTable from './GamesTable';

const styles = {
  root: {
    width: '100%',
  },
  button: {
    float: 'right',
    marginLeft: 5
  },
};

let getSteps = () => {
  return ['Preview order', 'Confirm shipping and payment settings', 'Review settings'];
};

class CartProgress extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });

    if (activeStep == getSteps().length -1) {
      // this.showProcessingPaymentLoader();
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
                Thanks for shopping with us, we will email you the tracking number once we ship your order.
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
                'Shipping address payment method'
              }
              {this.state.activeStep == 2 && 
                'Review total and confirm'
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