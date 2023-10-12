import React, {useState} from 'react'
import './Login.css'
import Title from "./Title/Title"
import Label from "./Label/Label"
import Input from "./Input/Input"

const Login = () => {

    const [user, setUser] = useState ('');
    const [password, setPassword] = useState ('');
    const [passwordError, setPasswordError] = useState (false);
    const [isLogin, setIsLogin] = useState (false);
    const [hasError, setHasError] = useState (false);

    function handleChange (name, value) {
        if(name === 'usuario'){
            // necesito una variable para almacenar
            setUser(value)
        } else {
            if(value.length < 6){
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
        }
    };

    // console.log('usuario:', user)
    // console.log('password:', password)

    function ifMatch(param) {
        if(param.user.length > 0 && param.password.length > 0){
            if(param.user === 'administrador' && param.password === '123456'){
                const {user, password} = param;
                let ac = {user, password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let account = {user, password}
        if(account) {
            // console.log('account:', account)
            ifMatch(account);
        }
    };

    return (
        <div className="login-container">
            <Title text='¡Bienvenid@!'/>
            {hasError &&
            <label className="label-alert">
                Su contraseña o usuario son incorrectos o no existen en nuestra plataforma
            </label>
            }
            <Label text='Usuario'/>
            {/* <Input/> */}
            <Input attribute={{
                id: 'usuario',
                name:'usuario',
                type:'text',
                placeholder:'Ingrese su usuario'
            }}
            handleChange={handleChange}
            />
            <Label text='Contraseña'/>
            {/* <Input/> */}
            <Input attribute={{
                id: 'contraseña',
                name:'contraseña',
                type:'password',
                placeholder:'Ingrese su contraseña'
            }}
            handleChange={handleChange}
            param={passwordError}
            />
            {passwordError && 
            <label className="label-error">
                Contraseña invalida o incorrecta
            </label>
            }
            <div className="submit-button-container">
            <button className="submit-button" onClick={handleSubmit}>
                Ingresar
            </button>
            </div>
        </div>
    )
}

export default Login
