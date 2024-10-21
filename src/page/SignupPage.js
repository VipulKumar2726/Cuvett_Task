import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser, FaPhone, FaBuilding, FaEnvelope, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    employeeSize: '',
  });


  const navigate = useNavigate(); 
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
     navigate('/verified');
  };

  return (
    <>
      <Header>
        <Logo src="image/logo.png" alt="Logo" />
        <Heading>Contact</Heading>
      </Header>
      <Container>
        <ContentWrapper>
          <LeftSection>
            <Description>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
            </Description>
          </LeftSection>

          <RightSection>
            <FormWrapper onSubmit={handleSubmit}>
              <FormTitle>Sign Up</FormTitle>
              <FormSubtitle>Lorem Ipsum is simply dummy text</FormSubtitle>

              <FormGroup>
                <FaUser />
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FaPhone />
                <Input
                  type="text"
                  name="phone"
                  placeholder="Phone no."
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FaBuilding />
                <Input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FaEnvelope />
                <Input
                  type="email"
                  name="companyEmail"
                  placeholder="Company Email"
                  value={formData.companyEmail}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <FaUsers />
                <Input
                  type="text"
                  name="employeeSize"
                  placeholder="Employee Size"
                  value={formData.employeeSize}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <Terms>
                By clicking on proceed you will accept our <a href="#">Terms & Conditions</a>
              </Terms>

              <SubmitButton type="submit">Proceed</SubmitButton>
            </FormWrapper>
          </RightSection>
        </ContentWrapper>
      </Container>
    </>
  );
};

// Styled Components (Same as before, no changes here)
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

const Logo = styled.img`
  height: 43px;
  width: 165px;
`;

const Heading = styled.h1`
  font-family: DM Sans;
  font-size: 28px;
  line-height: 36.46px;
  font-weight: 500;
  color: #576474;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  padding-left: 5%;
  padding-right: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Description = styled.p`
  font-family: DM Sans;
  font-size: 22.24px;
  line-height: 28.24px;
  font-weight: 500;
  color: #292929B2;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
`;

const FormWrapper = styled.form`
  max-width: 619px;
  width: 100%;
  padding: 30px;
  text-align: center;
  border: 1px solid;
  border-image: linear-gradient(90deg, #3F71FF 0%, #AA54FF 100%);
  border-image-slice: 1;
`;

const FormTitle = styled.h2`
  font-size: 32px;
  line-height: 41px;
  font-family: DM Sans;
  font-weight: 600;
  margin-bottom: 10px;
  color: #000000;
`;

const FormSubtitle = styled.p`
  font-size: 16px;
  line-height: 20.83px;
  font-family: DM Sans;
  font-weight: 500;
  margin-bottom: 20px;
  color: #292929B2;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  background-color: #F4F4F4;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;

  svg {
    margin-right: 10px;
    color: #888;
  }
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 100%;
  font-size: 24px;
  line-height: 31px;
  font-family: DM Sans;
  font-weight: 400;
  color: #535353;

  &:focus {
    outline: none;
  }
`;

const Terms = styled.p`
  font-family: DM Sans;
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  text-align: center;
  color: #292929B2;

  a {
    color: #0B66EFB2;
    text-decoration: none;
  }
`;

const SubmitButton = styled.button`
  font-size: 24px;
  line-height: 31.25px;
  font-family: DM Sans;
  font-weight: 700;
  width: 100%;
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SignupPage;
