import LoginForm from "../../components/auth/LoginForm";
import { useLogin } from "../../hooks/useLogin";

const StudentLogin = () => {
    const {
        form,
        handleChange,
        handleLogin,
    } = useLogin("student");

    return (
        <LoginForm
            form = {form}
            handleChange={handleChange}
            handleLogin={handleLogin}
            role="student"
        />
    )
};

export default StudentLogin;