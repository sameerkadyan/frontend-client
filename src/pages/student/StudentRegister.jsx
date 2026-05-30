import RegisterForm from "../../components/auth/RegisterForm";
import { useRegister } from "../../hooks/useRegister";

const StudentRegister = () => {

  const {
    form,
    handleChange,
    handleRegister,
  } = useRegister("student");

  return (
    <RegisterForm
      form={form}
      handleChange={handleChange}
      handleRegister={handleRegister}
      role="student"
    />
  );
};

export default StudentRegister;