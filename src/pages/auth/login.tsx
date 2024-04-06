import { Input } from "@/components/ui/input"

type inputs={
  phoneNumber:string;
}
const Login = () => {
 const {
  login,
  handleSubmit,
  watch,
  formState:{errors}
 }=useForm<Inputs>()

  return (
    <div className="">
        <h1 className="uppercase text-4xl font-medium">Account  <span className="text-kYellow">Login</span></h1>
        <Input type="email" placeholder="Email"   className="mt-4"/>
    </div>
  )
}

export default Login