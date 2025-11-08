import { type FC, type ChangeEvent, type FocusEvent, useState } from "react";
import { StyledForm, StyledLink, TextUnderForm, StyledText, ResetLink } from "./form-styles";
import { Input } from "../components/common/inputs/index-input";
import { Button } from "../components/common/Buttons/button-index";

export const Form: FC<{ autocomplete: "on" | "off" }> = ({ autocomplete }) => {
  const setIdForm: () => string = () => {
    return Math.floor(Math.random() * 6000).toString();
  };
  const idForm = setIdForm();

  // username state
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [usernameWasInFocus, setUsernameInFocus] = useState(false);
  // email state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emailWasInFocus, setEmailInFocus] = useState(false);
  // password state
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordWasInFocus, setPasswordInFocus] = useState(false);

  // username input
  const handleWithUsername = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setUsername(newValue);
  };
  const handleWithBlurOnUsername = (e: FocusEvent<HTMLInputElement>) => {
    setUsernameInFocus(true);
    if (!username.trim()) {
      const value = `Not acceptable:${e.target.value} Username is required!`;
      setUsernameError(value);
    } else if (username.trim().length < 3) {
      setUsernameError("Username should have minimum 3 letters");
    } else {
      setUsernameError("");
    }
  };

  // email input
  const handleWithEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setEmail(newValue);
  };
  const handleWithBlurOnEmail = (e: FocusEvent<HTMLInputElement>) => {
    setEmailInFocus(true);
    if (!email.trim()) {
      const value = `Not acceptable:${e.target.value} Email is required!`;
      setEmailError(value);
    } else if (!email.trim().includes("@")) {
      setEmailError("Email should have @ char");
    } else {
      setEmailError("");
    }
  };

  // password input
  const handleWithPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
  };
  const handleWithBlurOnPassword = (e: FocusEvent<HTMLInputElement>) => {
    setPasswordInFocus(true);
    if (!password.trim()) {
      const value = `Not acceptable: ${e.target.value} - Password is required!`;
      setPasswordError(value);
    } else if (password.trim().length < 8) {
      setPasswordError("Password should have minimum 8 letters");
    } else {
      setPasswordError("");
    }
  };
  // button
  const handleWithSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (usernameError || emailError || passwordError || !username || !email || !password) {
      console.log("Form has errors!");
      return;
    }
    console.log("Form submitted", { username, email, password });
  };

  return (
    <StyledForm
      action=""
      method="post"
      id={idForm}
      onSubmit={handleWithSubmit}
      autoComplete={autocomplete}
    >
      <label htmlFor="Username">Username</label>
      <Input
        label="Username"
        placeholder="Enter your name"
        type="text"
        value={username}
        form={idForm}
        id="Username"
        autocomplete="off"
        onChange={handleWithUsername}
        onBlur={handleWithBlurOnUsername}
        dataState={usernameWasInFocus && usernameError ? "error" : "default"}
      />
      {usernameWasInFocus && usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
      <label htmlFor="Email">Email</label>
      <Input
        label="Email"
        dataState={emailWasInFocus && emailError ? "error" : "default"}
        placeholder="Enter your email"
        type="email"
        value={email}
        form={idForm}
        id="Email"
        autocomplete="off"
        onChange={handleWithEmail}
        onBlur={handleWithBlurOnEmail}
      />
      {emailWasInFocus && emailError && <p style={{ color: "red" }}>{emailError}</p>}
      <label htmlFor="Password">Password</label>
      <Input
        label="Password"
        dataState={passwordWasInFocus && passwordError ? "error" : "default"}
        placeholder="Enter your password"
        type="password"
        value={password}
        form={idForm}
        id="Password"
        autocomplete="off"
        onChange={handleWithPassword}
        onBlur={handleWithBlurOnPassword}
      />
      {passwordWasInFocus && passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      <ResetLink>Forgot your password?</ResetLink>
      <Button label="Submit" dataState="default" variant="primary" />
      <TextUnderForm>
        <StyledText> Don't you have account yet?</StyledText>
        <StyledLink>Sign Up</StyledLink>
      </TextUnderForm>
    </StyledForm>
  );
};
