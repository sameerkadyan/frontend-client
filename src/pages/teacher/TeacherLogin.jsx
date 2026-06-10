import LoginForm from "../../components/auth/LoginForm";
import { useLogin } from "../../hooks/useLogin";

const TeacherLogin = () => {

    const role = "teacher";

    const {
        form,
        handleChange,
        handleLogin,
    } = useLogin(role);

    return (
        <LoginForm
            form={form}
            handleChange={handleChange}
            handleLogin={handleLogin}
            role={role}
        />
    );
}

export default TeacherLogin;