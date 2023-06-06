
import { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
import Swal from 'sweetalert2';

const Login = () => {
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const [isRemembered, setIsRemembered] = useState(false);

  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const handleRemembered=()=>{
    setIsRemembered(!isRemembered);
  }
  

  const submitSignIn = async()=>{
    if (!email) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter your email!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else if (!password) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter your password!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    } else if (!/@leoni\.com$/i.test(email)) {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter your verified Email!',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      const formData = new FormData();
      formData.append('email',email);
      formData.append('password',password);
      formData.append('remember me',isRemembered);
      console.log(formData); 
    }

  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader style={{marginTop:"-10px"}} className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={
                      require("../../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody style={{marginTop:"-40px"}} className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={handleEmail}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={handlePassword}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                  checked={isRemembered}
                  onChange={handleRemembered}
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button" onClick={submitSignIn}>
                  Sign in
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
