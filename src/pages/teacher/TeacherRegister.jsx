import RegisterForm from "../../components/auth/RegisterForm";
import { useRegister } from "../../hooks/useRegister";

const TeacherRegister = () => {

  const role = "teacher";

  const {
    form,
    handleChange,
    handleRegister,
  } = useRegister(role);

  return (
    <RegisterForm
      form={form}
      handleChange={handleChange}
      handleRegister={handleRegister}
      role={role}
    />
  );
};

export default TeacherRegister;